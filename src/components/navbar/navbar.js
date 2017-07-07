function NavBaseObj(baseElement){
    this.element = baseElement;

    this.setRole = (value) => this._setRole(this, value);
};
NavBaseObj.prototype._setRole = (inst, value) => {
    inst.element.setAttribute('role', value);
};

function Navbar(navbarElement, parentNavItem){
    NavBaseObj.call(this, navbarElement);

    this.getNavItems = () => this._getNavItems(this);
    this.getPreviousNavItem = (currentNavItem) => this._getNextNavItem(this, currentNavItem, -1);
    this.getNextNavItem = (currentNavItem) => this._getNextNavItem(this, currentNavItem, 1);
    this.setOffset = () => this._setOffset(this);


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
        if (this.isDropUp){
            this.parentNavItem.element.classList.add('nav-item-haschild-up');
        }
    } else {
        this.setRole('menubar');
    }
};
Navbar.prototype = Object.create(NavBaseObj.prototype);
Navbar.prototype.constructor = Navbar;

Navbar.prototype._getNavItems = (inst) => {
    return Array.from(inst.element.children).filter(child => {
        return child.classList.contains('nav-item');
    }).map(navItemElement => {
        return new NavItem(navItemElement, inst);
    });
};
Navbar.prototype._setOffset = (inst) => {
    if (!inst.parentNavItem) return;
    
    var el = inst.parentNavItem.element;
    var elStyle = window.getComputedStyle(el);
    
    var elHeight = el.offsetHeight;

    if (inst.isDropUp) {
        elHeight += parseInt(elStyle.marginTop);
        inst.element.style.bottom = elHeight + 'px';
    } else{
        elHeight += parseInt(elStyle.marginBottom);
        inst.element.style.top = elHeight + 'px';
    }

    if (inst.isExtendedChildNavbar){
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
Navbar.prototype._getNextNavItem = (inst, currentNavItem, increment) => {
    var currentIndex = Array.prototype.indexOf.call(inst.childNavItems, currentNavItem);
    if (currentIndex === -1) return undefined;

    var nextIndex = currentIndex + increment;
    return nextIndex < inst.childNavItems.length ? inst.childNavItems[nextIndex] : undefined;
};

function MobileNavbar(navbarElement, parentNavItem, navbarContainerElement, navbarToggleElement){
    Navbar.call(this, navbarElement, parentNavItem);

    this.containerElement = navbarContainerElement;
    this.toggleElement = navbarToggleElement;


    this.openMenu = () => this._openMobileMenu(this);
    this.closeMenu = () => this._closeMobileMenu(this);
    this.clickEvent = (e) => {
        e.preventDefault();

        if (this.element.offsetHeight === 0) {
            this.openMenu();
        } else {
            this.closeMenu();
        }
        e.stopPropagation();
    };

    this._setToggleElement(this);
}

MobileNavbar.prototype = Object.create(Navbar.prototype);
MobileNavbar.prototype.constructor = MobileNavbar;

MobileNavbar.prototype._setToggleElement = (inst) => {
    if (inst.toggleElement){
        inst.toggleElement.setAttribute('aria-haspopup', true);
        inst.toggleElement.setAttribute('aria-expanded', false);
        inst.toggleElement.addEventListener('click', inst.clickEvent);
        NDSU.fullOverlayElement.addEventListener('click', inst.closeMenu);
    }
};
MobileNavbar.prototype._getNavItems = (inst) => {
    
    return Array.from(inst.element.children).filter(child => {
        return child.classList.contains('nav-item');
    }).map(navItemElement => {
        return new MobileNavItem(navItemElement, inst);
    });
};
MobileNavbar.prototype._setOffset = (inst) => {
    if (!inst.containerElement) return;
    
    var el = inst.containerElement;
    var elStyle = window.getComputedStyle(el);
    
    var elHeight = el.offsetHeight;
    var windowHeight = window.innerHeight;
    inst.element.style.maxHeight = (windowHeight - elHeight) + 'px';

    if (inst.isDropUp) {
        elHeight += parseInt(elStyle.marginTop);
        inst.element.style.bottom = elHeight + 'px';
    } else{
        elHeight += parseInt(elStyle.marginBottom);
        inst.element.style.top = elHeight + 'px';
    }
};
MobileNavbar.prototype._openMobileMenu = (inst) => {
    NDSU.showOverlay();
    inst.element.classList.add('active');
    inst.toggleElement.setAttribute('aria-expanded', true);
    inst.setOffset();
};
MobileNavbar.prototype._closeMobileMenu = (inst) => {
    inst.element.classList.remove('active');
    inst.toggleElement.setAttribute('aria-expanded', false);
    NDSU.hideOverlay();
};

function NavItem(navItemElement, parentNavbar){
    NavBaseObj.call(this, navItemElement);
    
    this.focus = () => this._focus(this);
    this.getChildNavbar = () => this._getChildNavbar(this);
    this.getLinkElement = () => this._getLinkElement(this);

    this.open = () => this._open(this);
    this.openChild = () => this._open(this.childNavbar);
    this.close = () => this._close(this);
    this.closeChild = () => this._close(this.childNavbar);

    this.linkElement = this.getLinkElement();
    this.parentNavbar = parentNavbar;
    this.childNavbar = this.getChildNavbar();
    this.closeTimeout = 200;
    this.closeTimeoutObj;

    this.leftNeighbor = () => {
        var neighbor;
        if (!this.parentNavbar.isVerticalNavbar) {
            neighbor = this._previousNavItem(this);
        } else if (this._parentNavItem(this)){
            var parentItem = this._parentNavItem(this);
            neighbor = parentItem.parentNavbar.getPreviousNavItem(parentItem) || parentItem;
        }
        return neighbor;
    };
    this.rightNeighbor = () => {
        var neighbor;
        if (!this.parentNavbar.isVerticalNavbar){
            neighbor = this._nextNavItem(this);
        } else if (this._parentNavItem(this)) {
            var parentItem = this._parentNavItem(this);
            neighbor = parentItem.parentNavbar.getNextNavItem(parentItem) || parentItem;
        }
        
        return neighbor;
    }
    this.downNeighbor = () => {
        var neighbor;
        if (this.parentNavbar.isVerticalNavbar){
            if (this.parentNavbar.isDropUp){
                neighbor = this._nextNavItem(this) || this._parentNavItem;
            } else {
                neighbor = this._nextNavItem(this);
            }
        } else {
            neighbor = this._firstChildNavItem(this);
        }
        return neighbor;
    };
    this.upNeighbor = () => {
        var neighbor;
        if (this.parentNavbar.isVerticalNavbar){
            if (this.parentNavbar.isDropUp){
                neighbor = this._previousNavItem(this);
            } else{
                neighbor = this._previousNavItem(this) || this._parentNavItem;
            }
        } else if (this.parentNavbar.isExtendedChildNavbar && !this.parentNavbar.isDropUp){
            neighbor = this._parentNavItem(this);
        }
        return neighbor;
    };

    this.focusInListener = (e) => {
        if (this.parentNavbar.options.autoCollapse){
            this._focusInEvent(e, this);
        }
    };
    this.mouseInListener = (e) => this._focusInEvent(e, this);
    this.focusOutListener = (e) => this._focusOutEvent(e, this);
    this.keysListener =  (e) => {
        this._arrowKeysHandler(e, this);
    };

    this._setEventListeners(this);
    this.setRole('presentation');
    if (this.linkElement){
        this.linkElement.setAttribute('role', 'menuitem');
    }
    if (this.childNavbar && this.linkElement){
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

NavItem.prototype._setEventListeners = (inst) => {
    if (!inst.parentNavbar.isExtendedChildNavbar){
        inst.element.addEventListener('focusin', inst.focusInListener);
        inst.element.addEventListener('focusout', inst.focusOutListener);
        inst.element.addEventListener('mouseenter', inst.mouseInListener);
        inst.element.addEventListener('mouseleave', inst.focusOutListener);
    }

    inst.element.addEventListener('keydown', inst.keysListener);
};
NavItem.prototype._getChildNavbar = (inst) => {
    var childNavbarElement = inst.element.querySelector('.child-navbar');
    return childNavbarElement ? new Navbar(childNavbarElement, inst) : undefined;
};
NavItem.prototype._getLinkElement = (inst) => {
    return Array.prototype.filter.call(inst.element.children, child => {
        return child.classList.contains('nav-link');
    })[0];
};
NavItem.prototype._focus = (inst) => {
    if (inst.linkElement) {
        inst.linkElement.focus();
    } else if (inst.childNavbar && inst.childNavbar.childNavItems.length) {
        inst.childNavbar.childNavItems[0].focus();
    }
};

NavItem.prototype._open = (inst) => {
    if (!inst || !inst.element) return;
    inst.setOffset();
    inst.element.classList.add('active');
    if (inst.parentNavItem){
        inst.parentNavItem.linkElement.setAttribute('aria-expanded', true);
    }
};
NavItem.prototype._close = (inst) => {
    if (!inst || !inst.element) return;
    inst.element.classList.remove('active');
    if (inst.parentNavItem){
        inst.parentNavItem.linkElement.setAttribute('aria-expanded', false);
    }
};
NavItem.prototype._focusInEvent = (e, inst) => {
    inst.openChild();
    if (inst.closeTimeoutObj){
        clearTimeout(inst.closeTimeoutObj);
    }
};
NavItem.prototype._focusOutEvent = (e, inst) => {
    inst.closeTimeoutObj = setTimeout(() => {
        inst.closeChild();
    }, inst.closeTimeout);
};


NavItem.prototype._previousNavItem = (inst) => {
    return inst.parentNavbar.getPreviousNavItem(inst) || inst.parentNavbar.parentNavItem;
};
NavItem.prototype._nextNavItem = (inst) => {
    return inst.parentNavbar.getNextNavItem(inst);
};
NavItem.prototype._parentNavItem = (inst) => {
    return inst.parentNavbar.parentNavItem;
};

NavItem.prototype._firstChildNavItem = (inst) => {
    if (!inst.childNavbar) return undefined;
    return inst.childNavbar.childNavItems[0];
};
NavItem.prototype._arrowKeysHandler = (e, inst) => {
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
}

function MobileNavItem(navItemElement, parentNavbar) {
    NavItem.call(this, navItemElement, parentNavbar);
}
MobileNavItem.prototype = Object.create(NavItem.prototype);
MobileNavItem.prototype.constructor = MobileNavItem;

MobileNavItem.prototype._getChildNavbar = (inst) => {
    var childNavbarElement = inst.element.querySelector('.child-navbar');
    return childNavbarElement ? new MobileNavbar(childNavbarElement, inst) : undefined;
};
MobileNavItem.prototype._getLinkElement = (inst) => {
    var linkElement = Array.prototype.filter.call(inst.element.children, child => {
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
MobileNavItem.prototype._setEventListeners = (inst) => {
    inst.linkElement.addEventListener('click', (e) => {
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

NDSU.mobileNavbars = Array.prototype.map.call(document.querySelectorAll('.navbar-mobile-container'), (navbarContainer) => {
    var mobileNavbar = navbarContainer.querySelector('.navbar-mobile:not(.child-navbar)');
    var navbarToggle = navbarContainer.querySelector('.navbar-toggle');

    if (!mobileNavbar || !navbarToggle || !navbarToggle.classList.contains('navbar-toggle')) return 0;

    Array.prototype.forEach.call(document.querySelectorAll('.navbar-mobilize:not(.child-navbar):not(.navbar-mobile)'), (navbar) => {
        Array.from(navbar.children).filter(child => {
            return child.classList.contains('nav-item') && !child.classList.contains('nav-item-mobile-hide');
        }).forEach((navItem) => {
            mobileNavbar.appendChild(navItem.cloneNode(true));
        });
    });
    
    return new MobileNavbar(mobileNavbar, null, navbarContainer, navbarToggle);
});

NDSU.navbars = Array.prototype.map.call(document.querySelectorAll('.navbar:not(.child-navbar):not(.navbar-mobile)'), (navbar) => {
    return new Navbar(navbar);
});
