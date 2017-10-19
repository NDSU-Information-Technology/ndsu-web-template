'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.NDSU = {};

if (!NDSU.fullOverlayElement) {
    var fullOverlay = document.createElement('div');
    fullOverlay.className = 'full-overlay';
    fullOverlay.setAttribute('role', 'presentation');
    fullOverlay.addEventListener('click', function (e) {
        if (fullOverlay.offsetHeight !== 0) {
            NDSU.hideOverlay();
        }
    });

    NDSU.fullOverlayElement = fullOverlay;
    document.body.appendChild(NDSU.fullOverlayElement);
}

NDSU.contentElement = document.getElementById('content');

NDSU.showOverlay = function (overlayLevel) {
    NDSU.fullOverlayElement.classList.add('active');
    if (overlayLevel) {
        NDSU.fullOverlayElement.classList.add(overlayLevel);
    }
    document.body.style.overflow = 'hidden';
};
NDSU.hideOverlay = function (overlayLevel) {
    NDSU.fullOverlayElement.classList.remove('active');
    if (overlayLevel) {
        NDSU.fullOverlayElement.classList.remove(overlayLevel);
    }
    document.body.style.overflow = '';
};

var NavBaseClass = function () {
    _createClass(NavBaseClass, [{
        key: 'setRole',
        value: function setRole(value) {
            this.element.setAttribute('role', value);
        }
    }]);

    function NavBaseClass(baseElement) {
        _classCallCheck(this, NavBaseClass);

        this.element = baseElement;
    }

    return NavBaseClass;
}();

;

var Navbar = function (_NavBaseClass) {
    _inherits(Navbar, _NavBaseClass);

    _createClass(Navbar, [{
        key: '_setRoles',
        value: function _setRoles() {
            if (this.parentNavItem) {
                this.setRole('menu');
                this.parentNavItem.element.classList.add('nav-item-haschild');
                if (this.isDropUp) {
                    this.parentNavItem.element.classList.add('nav-item-haschild-up');
                }
            } else {
                this.setRole('menubar');
            }
        }
    }, {
        key: 'getNextNavItem',
        value: function getNextNavItem(currentNavItem) {
            var increment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            var currentIndex = Array.prototype.indexOf.call(this.childNavItems, currentNavItem);
            if (currentIndex === -1) return undefined;

            var nextIndex = currentIndex + increment;
            return nextIndex < this.childNavItems.length ? this.childNavItems[nextIndex] : undefined;
        }
    }, {
        key: 'getPreviousNavItem',
        value: function getPreviousNavItem(currentNavItem) {
            return this.getNextNavItem(currentNavItem, -1);
        }
    }, {
        key: 'setOffset',
        value: function setOffset() {
            if (!this.parentNavItem) return;

            var el = this.parentNavItem.element;
            var elStyle = window.getComputedStyle(el);

            var elHeight = el.offsetHeight;

            if (this.isDropUp) {
                elHeight += parseInt(elStyle.marginTop);
                this.element.style.bottom = elHeight + 'px';
            } else {
                elHeight += parseInt(elStyle.marginBottom);
                this.element.style.top = elHeight + 'px';
            }

            if (this.isExtendedChildNavbar) {
                var rootNavbar = this.parentNavItem.parentNavbar;
                if (rootNavbar && rootNavbar.element) {
                    var destLeft = -el.offsetLeft;
                    var elWidth = rootNavbar.element.offsetWidth;

                    this.element.style.left = -el.offsetLeft + 'px';
                    this.element.style.minWidth = elWidth + 'px';
                }
            } else {
                var _elWidth = el.offsetWidth;
                this.element.style.minWidth = _elWidth + 'px';
            }
        }
    }, {
        key: 'getNavItems',
        value: function getNavItems() {
            var _this2 = this;

            return Array.from(this.element.children).filter(function (child) {
                return child.classList.contains('nav-item');
            }).map(function (navItemElement) {
                return new NavItem(navItemElement, _this2);
            });
        }
    }, {
        key: 'isVerticalNavbar',
        get: function get() {
            return this.options.direction === 'vertical';
        }
    }, {
        key: 'isDropUp',
        get: function get() {
            return this.options.dropup;
        }
    }, {
        key: 'isExtendedChildNavbar',
        get: function get() {
            return this.options.extendedChildNavbar;
        }
    }, {
        key: 'isAccordion',
        get: function get() {
            return this.options.accordion;
        }
    }]);

    function Navbar(navbarElement, parentNavItem) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, navbarElement));

        _this.parentNavItem = parentNavItem;

        var isVerticalNavbar = navbarElement.classList.contains('navbar-vertical');
        var isDropUp = navbarElement.classList.contains('dropup');
        var isExtendedChildNavbar = navbarElement.classList.contains('extended-child-navbar');
        var isAccordion = navbarElement.classList.contains('accordion');

        _this.options = {
            autoCollapse: true,
            direction: isVerticalNavbar ? 'vertical' : 'horizontal',
            dropup: isDropUp,
            accordion: isAccordion,
            extendedChildNavbar: isExtendedChildNavbar
        };

        _this.childNavItems = _this.getNavItems();
        _this._setRoles();
        return _this;
    }

    return Navbar;
}(NavBaseClass);

;

var MobileNavbar = function (_Navbar) {
    _inherits(MobileNavbar, _Navbar);

    _createClass(MobileNavbar, [{
        key: 'getNavItems',
        value: function getNavItems() {
            var _this4 = this;

            return Array.from(this.element.children).filter(function (child) {
                return child.classList.contains('nav-item');
            }).map(function (navItemElement) {
                return new MobileNavItem(navItemElement, _this4);
            });
        }
    }, {
        key: 'setOffset',
        value: function setOffset() {
            if (!this.containerElement) return;

            var el = this.containerElement;
            var elStyle = window.getComputedStyle(el);

            var elHeight = el.offsetHeight;
            var windowHeight = window.innerHeight;
            this.element.style.maxHeight = windowHeight - elHeight + 'px';

            if (this.isDropUp) {
                elHeight += parseInt(elStyle.marginTop);
                this.element.style.bottom = elHeight + 'px';
            } else {
                elHeight += parseInt(elStyle.marginBottom);
                this.element.style.top = elHeight + 'px';
            }
        }
    }, {
        key: 'setToggleElement',
        value: function setToggleElement() {
            if (this.toggleElement) {
                this.toggleElement.setAttribute('aria-haspopup', true);
                this.toggleElement.setAttribute('aria-expanded', false);
                this.toggleElement.addEventListener('click', this.clickEvent);
                NDSU.fullOverlayElement.addEventListener('click', this.closeMenu);
            }
        }
    }], [{
        key: '_clickEvent',
        value: function _clickEvent(e, inst) {
            e.preventDefault();

            if (inst.element.offsetHeight === 0) {
                inst.openMenu();
            } else {
                inst.closeMenu();
            }
            e.stopPropagation();
        }
    }, {
        key: '_openMenu',
        value: function _openMenu(inst) {
            NDSU.showOverlay();
            inst.element.classList.add('expanded');
            inst.toggleElement.setAttribute('aria-expanded', true);
            inst.setOffset();
        }
    }, {
        key: '_closeMenu',
        value: function _closeMenu(inst) {
            inst.element.classList.remove('expanded');
            inst.toggleElement.setAttribute('aria-expanded', false);
            NDSU.hideOverlay();
        }
    }]);

    function MobileNavbar(navbarElement, parentNavItem, navbarContainerElement, navbarToggleElement) {
        _classCallCheck(this, MobileNavbar);

        var _this3 = _possibleConstructorReturn(this, (MobileNavbar.__proto__ || Object.getPrototypeOf(MobileNavbar)).call(this, navbarElement, parentNavItem));

        _this3.containerElement = navbarContainerElement;
        _this3.toggleElement = navbarToggleElement;

        _this3.openMenu = function () {
            return MobileNavbar._openMenu(_this3);
        };
        _this3.closeMenu = function () {
            return MobileNavbar._closeMenu(_this3);
        };
        _this3.clickEvent = function (e) {
            return MobileNavbar._clickEvent(e, _this3);
        };

        _this3.setToggleElement();
        return _this3;
    }

    return MobileNavbar;
}(Navbar);

;

var NavItem = function (_NavBaseClass2) {
    _inherits(NavItem, _NavBaseClass2);

    _createClass(NavItem, [{
        key: '_getChildNavbar',
        value: function _getChildNavbar() {
            var childNavbarElement = this.element.querySelector('.child-navbar');
            return childNavbarElement ? new Navbar(childNavbarElement, this) : undefined;
        }
    }, {
        key: '_getLinkElement',
        value: function _getLinkElement() {

            var linkElement = Array.prototype.filter.call(this.element.children, function (child) {
                return child.classList.contains('nav-link');
            })[0];
            if (linkElement) return linkElement;

            var titleElement = this.element.querySelector('.child-section-title');
            if (!titleElement) return linkElement;

            var title = titleElement.innerText;
            linkElement = document.createElement('a');
            linkElement.href = '#';
            linkElement.innerText = title;
            linkElement.className = 'nav-link';

            this.element.insertBefore(linkElement, this.element.firstChild);

            return linkElement;
        }
    }, {
        key: '_setEventListeners',
        value: function _setEventListeners() {
            var _this6 = this;

            if (!this.parentNavbar.isExtendedChildNavbar && !this.parentNavbar.isAccordion) {
                this.element.addEventListener('focusin', this.focusInListener);
                this.element.addEventListener('focusout', this.focusOutListener);
                this.element.addEventListener('mouseenter', this.mouseInListener);
                this.element.addEventListener('mouseleave', this.focusOutListener);
            }

            this.element.addEventListener('keydown', function (e) {
                return NavItem._keysListener(e, _this6);
            });
        }
    }, {
        key: '_setRoles',
        value: function _setRoles() {
            this.setRole('presentation');
            if (this.linkElement) {
                this.linkElement.setAttribute('role', 'menuitem');
            }
            if (this.childNavbar && this.linkElement) {
                this.linkElement.setAttribute('aria-haspopup', true);
                var elId = this.linkElement.getAttribute('id');
                if (!elId) {
                    elId = 'parentLink_' + Math.random().toString(36).substr(2, 10);
                    this.linkElement.setAttribute('id', elId);
                }

                this.childNavbar.element.setAttribute('aria-labelledby', elId);
                this.linkElement.setAttribute('aria-expanded', false);
            }
        }
    }, {
        key: 'focus',
        value: function focus() {
            if (this.linkElement) {
                this.linkElement.focus();
            } else if (this.childNavbar && this.childNavbar.childNavItems.length) {
                this.childNavbar.childNavItems[0].focus();
            }
        }
    }, {
        key: 'open',
        value: function open() {
            NavItem._open(this);
        }
    }, {
        key: 'openChild',
        value: function openChild() {
            NavItem._open(this.childNavbar);
        }
    }, {
        key: 'close',
        value: function close() {
            NavItem._close(this);
        }
    }, {
        key: 'closeChild',
        value: function closeChild() {
            NavItem._close(this.childNavbar);
        }
    }, {
        key: 'closeTimeout',
        get: function get() {
            return 200;
        }
    }, {
        key: 'previousNavItem',
        get: function get() {
            return this.parentNavbar.getPreviousNavItem(this) || this.parentNavbar.parentNavItem;
        }
    }, {
        key: 'nextNavItem',
        get: function get() {
            return this.parentNavbar.getNextNavItem(this);
        }
    }, {
        key: 'parentNavItem',
        get: function get() {
            return this.parentNavbar.parentNavItem;
        }
    }, {
        key: 'firstChildNavItem',
        get: function get() {
            if (!this.childNavbar) return undefined;
            return this.childNavbar.childNavItems[0];
        }
    }, {
        key: 'leftNeighbor',
        get: function get() {
            var neighbor = void 0;
            if (!this.parentNavbar.isVerticalNavbar) {
                neighbor = this.previousNavItem;
            } else if (this.parentNavItem) {
                var parentItem = this.parentNavItem;
                neighbor = parentItem.parentNavbar.getPreviousNavItem(parentItem) || parentItem;
            }
            return neighbor;
        }
    }, {
        key: 'rightNeighbor',
        get: function get() {
            var neighbor = void 0;
            if (!this.parentNavbar.isVerticalNavbar) {
                neighbor = this.nextNavItem;
            } else if (this.parentNavItem) {
                var parentItem = this.parentNavItem;
                neighbor = parentItem.parentNavbar.getNextNavItem(parentItem) || parentItem;
            }

            return neighbor;
        }
    }, {
        key: 'downNeighbor',
        get: function get() {
            var neighbor = void 0;
            if (this.parentNavbar.isVerticalNavbar) {
                if (this.parentNavbar.isDropUp) {
                    neighbor = this.nextNavItem || this._parentNavItem;
                } else {
                    neighbor = this.nextNavItem;
                }
            } else {
                neighbor = this.firstChildNavItem;
            }
            return neighbor;
        }
    }, {
        key: 'upNeighbor',
        get: function get() {
            var neighbor = void 0;
            if (this.parentNavbar.isVerticalNavbar) {
                if (this.parentNavbar.isDropUp) {
                    neighbor = this.previousNavItem;
                } else {
                    neighbor = this.previousNavItem || this._parentNavItem;
                }
            } else if (this.parentNavbar.isExtendedChildNavbar && !this.parentNavbar.isDropUp) {
                neighbor = this.parentNavItem;
            }
            return neighbor;
        }
    }], [{
        key: '_open',
        value: function _open(inst) {
            if (!inst || !inst.element) return;
            inst.setOffset();
            inst.element.classList.add('expanded');
            if (inst.parentNavItem) {
                inst.parentNavItem.linkElement.setAttribute('aria-expanded', true);
            }
        }
    }, {
        key: '_close',
        value: function _close(inst) {
            if (!inst || !inst.element) return;
            inst.element.classList.remove('expanded');
            if (inst.parentNavItem) {
                inst.parentNavItem.linkElement.setAttribute('aria-expanded', false);
            }
        }
    }, {
        key: '_keysListener',
        value: function _keysListener(e, inst) {
            e.stopPropagation();
            var nextItem = void 0;
            if (e.which === 37) {
                nextItem = inst.leftNeighbor;
            } else if (e.which === 38) {
                nextItem = inst.upNeighbor;
            } else if (e.which === 39) {
                nextItem = inst.rightNeighbor;
            } else if (e.which === 40) {
                nextItem = inst.downNeighbor;
            }

            if (nextItem) {
                e.preventDefault();
                nextItem.focus();
            }
        }
    }, {
        key: '_focusInEvent',
        value: function _focusInEvent(e, inst) {
            inst.openChild();
            if (inst.closeTimeoutinst) {
                clearTimeout(inst.closeTimeoutinst);
            }
        }
    }, {
        key: '_focusOutEvent',
        value: function _focusOutEvent(e, inst) {
            inst.closeTimeoutinst = setTimeout(function () {
                inst.closeChild();
            }, inst.closeTimeout);
        }
    }]);

    function NavItem(navItemElement, parentNavbar) {
        _classCallCheck(this, NavItem);

        var _this5 = _possibleConstructorReturn(this, (NavItem.__proto__ || Object.getPrototypeOf(NavItem)).call(this, navItemElement));

        _this5.parentNavbar = parentNavbar;
        _this5.linkElement = _this5._getLinkElement();
        _this5.childNavbar = _this5._getChildNavbar();

        _this5.closeTimeoutinst;
        _this5.focusInListener = function (e) {
            if (_this5.parentNavbar.options.autoCollapse) {
                NavItem._focusInEvent(e, _this5);
            }
        };

        _this5.mouseInListener = function (e) {
            return NavItem._focusInEvent(e, _this5);
        };

        _this5.focusOutListener = function (e) {
            return NavItem._focusOutEvent(e, _this5);
        };

        _this5._setEventListeners();
        _this5._setRoles();
        return _this5;
    }

    return NavItem;
}(NavBaseClass);

var MobileNavItem = function (_NavItem) {
    _inherits(MobileNavItem, _NavItem);

    _createClass(MobileNavItem, [{
        key: '_getChildNavbar',
        value: function _getChildNavbar() {
            var childNavbarElement = this.element.querySelector('.child-navbar');
            return childNavbarElement ? new MobileNavbar(childNavbarElement, this) : undefined;
        }
    }, {
        key: '_getLinkElement',
        value: function _getLinkElement() {
            var linkElement = Array.prototype.filter.call(this.element.children, function (child) {
                return child.classList.contains('nav-link');
            })[0];
            if (linkElement) return linkElement;

            var titleElement = this.element.querySelector('.child-section-title');
            if (!titleElement) return linkElement;

            var title = titleElement.innerText;
            linkElement = document.createElement('a');
            linkElement.href = '#';
            linkElement.innerText = title;
            linkElement.className = 'nav-link';

            this.element.insertBefore(linkElement, this.element.firstChild);

            return linkElement;
        }
    }, {
        key: '_setEventListeners',
        value: function _setEventListeners() {
            var _this8 = this;

            this.linkElement.addEventListener('click', function (e) {
                var childNavbar = _this8.childNavbar;
                if (!childNavbar) return;

                if (childNavbar.element.offsetHeight === 0) {
                    childNavbar.element.classList.add('expanded');
                    _this8.linkElement.classList.add('expanded');
                    _this8.linkElement.setAttribute('aria-expanded', true);
                } else {
                    childNavbar.element.classList.remove('expanded');
                    _this8.linkElement.classList.remove('expanded');
                    _this8.linkElement.setAttribute('aria-expanded', false);
                }
                e.preventDefault();
            });
        }
    }]);

    function MobileNavItem(navItemElement, parentNavbar) {
        _classCallCheck(this, MobileNavItem);

        var _this7 = _possibleConstructorReturn(this, (MobileNavItem.__proto__ || Object.getPrototypeOf(MobileNavItem)).call(this, navItemElement, parentNavbar));

        if (navItemElement.classList.contains('nav-item-home')) {
            _this7.linkElement.innerHTML = _this7.linkElement.innerText;
        }

        if (_this7.childNavbar) {
            var cloneElement = navItemElement.cloneNode();
            cloneElement.classList.remove('nav-item-haschild');

            var cloneLink = _this7.linkElement.cloneNode(true);
            cloneLink.setAttribute('id', '');
            cloneElement.appendChild(cloneLink);

            _this7.childNavbar.element.insertBefore(cloneElement, _this7.childNavbar.element.firstChild);
        }
        return _this7;
    }

    return MobileNavItem;
}(NavItem);

NDSU.mobileNavbars = Array.prototype.map.call(document.querySelectorAll('.navbar-mobile-container'), function (navbarContainer) {
    var mobileNavbar = navbarContainer.querySelector('.navbar-mobile:not(.child-navbar)');
    var navbarToggle = navbarContainer.querySelector('.navbar-toggle');

    if (!mobileNavbar || !navbarToggle || !navbarToggle.classList.contains('navbar-toggle')) return 0;

    Array.prototype.forEach.call(document.querySelectorAll('.navbar-mobilize:not(.child-navbar):not(.navbar-mobile)'), function (navbar) {
        Array.from(navbar.children).filter(function (child) {
            return child.classList.contains('nav-item') && !child.classList.contains('nav-item-mobile-hide');
        }).forEach(function (navItem) {
            mobileNavbar.appendChild(navItem.cloneNode(true));
        });
    });

    return new MobileNavbar(mobileNavbar, null, navbarContainer, navbarToggle);
});

NDSU.navbars = Array.prototype.map.call(document.querySelectorAll('.navbar:not(.child-navbar):not(.navbar-mobile)'), function (navbar) {
    return new Navbar(navbar);
});

var StickyBar = function () {
    _createClass(StickyBar, null, [{
        key: '_scrollEvent',
        value: function _scrollEvent(e, obj) {
            var currentY = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;

            if (currentY > obj.offsetTop) {
                obj.element.classList.add('sticky-bar-on');
                obj.bufferElement.style.height = obj.element.offsetHeight + 'px';
            } else if (currentY <= obj.offsetTop - obj.element.offsetHeight) {
                obj.element.classList.remove('sticky-bar-on');
                obj.bufferElement.style.height = 0;
            }
        }
    }]);

    function StickyBar(baseElement) {
        var _this9 = this;

        _classCallCheck(this, StickyBar);

        this.element = baseElement;
        this.offsetTop = this.element.offsetTop;

        this.bufferElement = document.createElement('div');
        this.bufferElement.classList.add('sticky-buffer');

        var sizes = ['xl', 'lg', 'md', 'sm', 'xs'];
        sizes.forEach(function (size) {
            var stickyClass = 'sticky-' + size;
            if (_this9.element.classList.contains(stickyClass)) _this9.bufferElement.classList.add(stickyClass);
        });
        this.element.parentElement.insertBefore(this.bufferElement, this.element);

        window.addEventListener('scroll', function (e) {
            return StickyBar._scrollEvent(e, _this9);
        });
    }

    return StickyBar;
}();

;

NDSU.stickyBars = Array.prototype.map.call(document.querySelectorAll('.sticky-bar'), function (stickyBar) {
    return new StickyBar(stickyBar);
});

NDSU.resizeTimer;

var padMainContent = function padMainContent() {
    var stickyBarHeight = Array.prototype.reduce.call(NDSU.stickyBars, function (largestHeight, currentStickyBar) {
        return Math.max(largestHeight, currentStickyBar.element.clientHeight);
    }, 0);
    NDSU.contentElement.style.marginTop = '-' + stickyBarHeight + 'px';
    NDSU.contentElement.style.paddingTop = stickyBarHeight + 'px';
};
window.addEventListener('resize', function (e) {
    clearTimeout(NDSU.resizeTimer);
    NDSU.resizeTimer = setTimeout(padMainContent, 250);
});
padMainContent();