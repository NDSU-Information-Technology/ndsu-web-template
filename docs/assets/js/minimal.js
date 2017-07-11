'use strict';

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

NDSU.showOverlay = function () {
    NDSU.fullOverlayElement.classList.add('active');
    document.body.style.overflow = 'hidden';
};
NDSU.hideOverlay = function () {
    NDSU.fullOverlayElement.classList.remove('active');
    document.body.style.overflow = '';
};
function NavBaseObj(baseElement) {
    var _this = this;

    this.element = baseElement;

    this.setRole = function (value) {
        return _this._setRole(_this, value);
    };
};
NavBaseObj.prototype._setRole = function (inst, value) {
    inst.element.setAttribute('role', value);
};

function Navbar(navbarElement, parentNavItem) {
    var _this2 = this;

    NavBaseObj.call(this, navbarElement);

    this.getNavItems = function () {
        return _this2._getNavItems(_this2);
    };
    this.getPreviousNavItem = function (currentNavItem) {
        return _this2._getNextNavItem(_this2, currentNavItem, -1);
    };
    this.getNextNavItem = function (currentNavItem) {
        return _this2._getNextNavItem(_this2, currentNavItem, 1);
    };
    this.setOffset = function () {
        return _this2._setOffset(_this2);
    };

    var isVerticalNavbar = navbarElement.classList.contains('navbar-vertical');
    var isDropUp = navbarElement.classList.contains('dropup');
    var isExtendedChildNavbar = navbarElement.classList.contains('extended-child-navbar');
    this.options = {
        autoCollapse: true,
        direction: isVerticalNavbar ? 'vertical' : 'horizontal',
        dropup: isDropUp,
        extendedChildNavbar: isExtendedChildNavbar
    };

    this.isVerticalNavbar = this.options.direction === 'vertical';
    this.isDropUp = this.options.dropup;
    this.isExtendedChildNavbar = this.options.extendedChildNavbar;

    this.childNavItems = this.getNavItems();
    this.parentNavItem = parentNavItem;

    if (this.parentNavItem) {
        this.setRole('menu');
        this.parentNavItem.element.classList.add('nav-item-haschild');
        if (this.isDropUp) {
            this.parentNavItem.element.classList.add('nav-item-haschild-up');
        }
    } else {
        this.setRole('menubar');
    }
};
Navbar.prototype = Object.create(NavBaseObj.prototype);
Navbar.prototype.constructor = Navbar;

Navbar.prototype._getNavItems = function (inst) {
    return Array.from(inst.element.children).filter(function (child) {
        return child.classList.contains('nav-item');
    }).map(function (navItemElement) {
        return new NavItem(navItemElement, inst);
    });
};
Navbar.prototype._setOffset = function (inst) {
    if (!inst.parentNavItem) return;

    var el = inst.parentNavItem.element;
    var elStyle = window.getComputedStyle(el);

    var elHeight = el.offsetHeight;

    if (inst.isDropUp) {
        elHeight += parseInt(elStyle.marginTop);
        inst.element.style.bottom = elHeight + 'px';
    } else {
        elHeight += parseInt(elStyle.marginBottom);
        inst.element.style.top = elHeight + 'px';
    }

    if (inst.isExtendedChildNavbar) {
        var rootNavbar = inst.parentNavItem.parentNavbar;
        if (rootNavbar && rootNavbar.element) {
            var destLeft = -el.offsetLeft;
            var elWidth = rootNavbar.element.offsetWidth;

            inst.element.style.left = -el.offsetLeft + 'px';
            inst.element.style.minWidth = elWidth + 'px';
        }
    } else {
        var elWidth = el.offsetWidth;
        inst.element.style.minWidth = elWidth + 'px';
    }
};
Navbar.prototype._getNextNavItem = function (inst, currentNavItem, increment) {
    var currentIndex = Array.prototype.indexOf.call(inst.childNavItems, currentNavItem);
    if (currentIndex === -1) return undefined;

    var nextIndex = currentIndex + increment;
    return nextIndex < inst.childNavItems.length ? inst.childNavItems[nextIndex] : undefined;
};

function MobileNavbar(navbarElement, parentNavItem, navbarContainerElement, navbarToggleElement) {
    var _this3 = this;

    Navbar.call(this, navbarElement, parentNavItem);

    this.containerElement = navbarContainerElement;
    this.toggleElement = navbarToggleElement;

    this.openMenu = function () {
        return _this3._openMobileMenu(_this3);
    };
    this.closeMenu = function () {
        return _this3._closeMobileMenu(_this3);
    };
    this.clickEvent = function (e) {
        e.preventDefault();

        if (_this3.element.offsetHeight === 0) {
            _this3.openMenu();
        } else {
            _this3.closeMenu();
        }
        e.stopPropagation();
    };

    this._setToggleElement(this);
}

MobileNavbar.prototype = Object.create(Navbar.prototype);
MobileNavbar.prototype.constructor = MobileNavbar;

MobileNavbar.prototype._setToggleElement = function (inst) {
    if (inst.toggleElement) {
        inst.toggleElement.setAttribute('aria-haspopup', true);
        inst.toggleElement.setAttribute('aria-expanded', false);
        inst.toggleElement.addEventListener('click', inst.clickEvent);
        NDSU.fullOverlayElement.addEventListener('click', inst.closeMenu);
    }
};
MobileNavbar.prototype._getNavItems = function (inst) {

    return Array.from(inst.element.children).filter(function (child) {
        return child.classList.contains('nav-item');
    }).map(function (navItemElement) {
        return new MobileNavItem(navItemElement, inst);
    });
};
MobileNavbar.prototype._setOffset = function (inst) {
    if (!inst.containerElement) return;

    var el = inst.containerElement;
    var elStyle = window.getComputedStyle(el);

    var elHeight = el.offsetHeight;
    var windowHeight = window.innerHeight;
    inst.element.style.maxHeight = windowHeight - elHeight + 'px';

    if (inst.isDropUp) {
        elHeight += parseInt(elStyle.marginTop);
        inst.element.style.bottom = elHeight + 'px';
    } else {
        elHeight += parseInt(elStyle.marginBottom);
        inst.element.style.top = elHeight + 'px';
    }
};
MobileNavbar.prototype._openMobileMenu = function (inst) {
    NDSU.showOverlay();
    inst.element.classList.add('active');
    inst.toggleElement.setAttribute('aria-expanded', true);
    inst.setOffset();
};
MobileNavbar.prototype._closeMobileMenu = function (inst) {
    inst.element.classList.remove('active');
    inst.toggleElement.setAttribute('aria-expanded', false);
    NDSU.hideOverlay();
};

function NavItem(navItemElement, parentNavbar) {
    var _this4 = this;

    NavBaseObj.call(this, navItemElement);

    this.focus = function () {
        return _this4._focus(_this4);
    };
    this.getChildNavbar = function () {
        return _this4._getChildNavbar(_this4);
    };
    this.getLinkElement = function () {
        return _this4._getLinkElement(_this4);
    };

    this.open = function () {
        return _this4._open(_this4);
    };
    this.openChild = function () {
        return _this4._open(_this4.childNavbar);
    };
    this.close = function () {
        return _this4._close(_this4);
    };
    this.closeChild = function () {
        return _this4._close(_this4.childNavbar);
    };

    this.linkElement = this.getLinkElement();
    this.parentNavbar = parentNavbar;
    this.childNavbar = this.getChildNavbar();
    this.closeTimeout = 200;
    this.closeTimeoutObj;

    this.leftNeighbor = function () {
        var neighbor;
        if (!_this4.parentNavbar.isVerticalNavbar) {
            neighbor = _this4._previousNavItem(_this4);
        } else if (_this4._parentNavItem(_this4)) {
            var parentItem = _this4._parentNavItem(_this4);
            neighbor = parentItem.parentNavbar.getPreviousNavItem(parentItem) || parentItem;
        }
        return neighbor;
    };
    this.rightNeighbor = function () {
        var neighbor;
        if (!_this4.parentNavbar.isVerticalNavbar) {
            neighbor = _this4._nextNavItem(_this4);
        } else if (_this4._parentNavItem(_this4)) {
            var parentItem = _this4._parentNavItem(_this4);
            neighbor = parentItem.parentNavbar.getNextNavItem(parentItem) || parentItem;
        }

        return neighbor;
    };
    this.downNeighbor = function () {
        var neighbor;
        if (_this4.parentNavbar.isVerticalNavbar) {
            if (_this4.parentNavbar.isDropUp) {
                neighbor = _this4._nextNavItem(_this4) || _this4._parentNavItem;
            } else {
                neighbor = _this4._nextNavItem(_this4);
            }
        } else {
            neighbor = _this4._firstChildNavItem(_this4);
        }
        return neighbor;
    };
    this.upNeighbor = function () {
        var neighbor;
        if (_this4.parentNavbar.isVerticalNavbar) {
            if (_this4.parentNavbar.isDropUp) {
                neighbor = _this4._previousNavItem(_this4);
            } else {
                neighbor = _this4._previousNavItem(_this4) || _this4._parentNavItem;
            }
        } else if (_this4.parentNavbar.isExtendedChildNavbar && !_this4.parentNavbar.isDropUp) {
            neighbor = _this4._parentNavItem(_this4);
        }
        return neighbor;
    };

    this.focusInListener = function (e) {
        if (_this4.parentNavbar.options.autoCollapse) {
            _this4._focusInEvent(e, _this4);
        }
    };
    this.mouseInListener = function (e) {
        return _this4._focusInEvent(e, _this4);
    };
    this.focusOutListener = function (e) {
        return _this4._focusOutEvent(e, _this4);
    };
    this.keysListener = function (e) {
        _this4._arrowKeysHandler(e, _this4);
    };

    this._setEventListeners(this);
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
};

NavItem.prototype = Object.create(NavBaseObj.prototype);
NavItem.prototype.constructor = NavItem;

NavItem.prototype._setEventListeners = function (inst) {
    if (!inst.parentNavbar.isExtendedChildNavbar) {
        inst.element.addEventListener('focusin', inst.focusInListener);
        inst.element.addEventListener('focusout', inst.focusOutListener);
        inst.element.addEventListener('mouseenter', inst.mouseInListener);
        inst.element.addEventListener('mouseleave', inst.focusOutListener);
    }

    inst.element.addEventListener('keydown', inst.keysListener);
};
NavItem.prototype._getChildNavbar = function (inst) {
    var childNavbarElement = inst.element.querySelector('.child-navbar');
    return childNavbarElement ? new Navbar(childNavbarElement, inst) : undefined;
};
NavItem.prototype._getLinkElement = function (inst) {
    return Array.prototype.filter.call(inst.element.children, function (child) {
        return child.classList.contains('nav-link');
    })[0];
};
NavItem.prototype._focus = function (inst) {
    if (inst.linkElement) {
        inst.linkElement.focus();
    } else if (inst.childNavbar && inst.childNavbar.childNavItems.length) {
        inst.childNavbar.childNavItems[0].focus();
    }
};

NavItem.prototype._open = function (inst) {
    if (!inst || !inst.element) return;
    inst.setOffset();
    inst.element.classList.add('active');
    if (inst.parentNavItem) {
        inst.parentNavItem.linkElement.setAttribute('aria-expanded', true);
    }
};
NavItem.prototype._close = function (inst) {
    if (!inst || !inst.element) return;
    inst.element.classList.remove('active');
    if (inst.parentNavItem) {
        inst.parentNavItem.linkElement.setAttribute('aria-expanded', false);
    }
};
NavItem.prototype._focusInEvent = function (e, inst) {
    inst.openChild();
    if (inst.closeTimeoutObj) {
        clearTimeout(inst.closeTimeoutObj);
    }
};
NavItem.prototype._focusOutEvent = function (e, inst) {
    inst.closeTimeoutObj = setTimeout(function () {
        inst.closeChild();
    }, inst.closeTimeout);
};

NavItem.prototype._previousNavItem = function (inst) {
    return inst.parentNavbar.getPreviousNavItem(inst) || inst.parentNavbar.parentNavItem;
};
NavItem.prototype._nextNavItem = function (inst) {
    return inst.parentNavbar.getNextNavItem(inst);
};
NavItem.prototype._parentNavItem = function (inst) {
    return inst.parentNavbar.parentNavItem;
};

NavItem.prototype._firstChildNavItem = function (inst) {
    if (!inst.childNavbar) return undefined;
    return inst.childNavbar.childNavItems[0];
};
NavItem.prototype._arrowKeysHandler = function (e, inst) {
    e.stopPropagation();
    var nextItem;
    if (e.which === 37) {
        nextItem = inst.leftNeighbor();
    } else if (e.which === 38) {
        nextItem = inst.upNeighbor();
    } else if (e.which === 39) {
        nextItem = inst.rightNeighbor();
    } else if (e.which === 40) {
        nextItem = inst.downNeighbor();
    }

    if (nextItem) {
        e.preventDefault();
        nextItem.focus();
    }
};

function MobileNavItem(navItemElement, parentNavbar) {
    NavItem.call(this, navItemElement, parentNavbar);
}
MobileNavItem.prototype = Object.create(NavItem.prototype);
MobileNavItem.prototype.constructor = MobileNavItem;

MobileNavItem.prototype._getChildNavbar = function (inst) {
    var childNavbarElement = inst.element.querySelector('.child-navbar');
    return childNavbarElement ? new MobileNavbar(childNavbarElement, inst) : undefined;
};
MobileNavItem.prototype._getLinkElement = function (inst) {
    var linkElement = Array.prototype.filter.call(inst.element.children, function (child) {
        return child.classList.contains('nav-link');
    })[0];
    if (linkElement) return linkElement;

    var titleElement = inst.element.querySelector('.child-section-title');
    if (!titleElement) return linkElement;

    var title = titleElement.innerText;
    var linkElement = document.createElement('a');
    linkElement.href = '#';
    linkElement.innerText = title;
    linkElement.className = 'nav-link';

    inst.element.insertBefore(linkElement, inst.element.firstChild);

    return linkElement;
};
MobileNavItem.prototype._setEventListeners = function (inst) {
    inst.linkElement.addEventListener('click', function (e) {
        var childNavbar = inst.childNavbar;
        if (!childNavbar) return;

        if (childNavbar.element.offsetHeight === 0) {
            childNavbar.element.classList.add('active');
            inst.linkElement.classList.add('active');
            inst.linkElement.setAttribute('aria-expanded', true);
        } else {
            childNavbar.element.classList.remove('active');
            inst.linkElement.classList.remove('active');
            inst.linkElement.setAttribute('aria-expanded', false);
        }
        e.preventDefault();
    });
};

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

function StickyBar(baseElement) {
    var _this5 = this;

    this.element = baseElement;

    this.offsetTop = this.element.offsetTop;
    window.addEventListener('scroll', function (event) {
        var currentY = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;

        if (currentY > _this5.offsetTop) {
            _this5.element.classList.add('sticky-bar-on');
        } else {
            _this5.element.classList.remove('sticky-bar-on');
        }
    });
};

NDSU.stickyBars = Array.prototype.map.call(document.querySelectorAll('.sticky-bar'), function (stickyBar) {
    return new StickyBar(stickyBar);
});