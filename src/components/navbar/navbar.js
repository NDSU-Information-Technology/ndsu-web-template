class NavBaseClass {
    setRole(value) {
        this.element.setAttribute('role', value);
    }

    constructor(baseElement) {
        this.element = baseElement;
    }
};

class Navbar extends NavBaseClass {

    _setRoles() {
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

    getNextNavItem(currentNavItem, increment = 1){
        let currentIndex = Array.prototype.indexOf.call(this.childNavItems, currentNavItem);
        if (currentIndex === -1) return undefined;

        let nextIndex = currentIndex + increment;
        return nextIndex < this.childNavItems.length ? this.childNavItems[nextIndex] : undefined;
    }

    getPreviousNavItem(currentNavItem) {
        return this.getNextNavItem(currentNavItem, -1);
    }

    setOffset() {
        if (!this.parentNavItem) return;
        
        let el = this.parentNavItem.element;
        let elStyle = window.getComputedStyle(el);
        
        let elHeight = el.offsetHeight;

        if (this.isDropUp) {
            elHeight += parseInt(elStyle.marginTop);
            this.element.style.bottom = elHeight + 'px';
        } else{
            elHeight += parseInt(elStyle.marginBottom);
            this.element.style.top = elHeight + 'px';
        }

        if (this.isExtendedChildNavbar){
            let rootNavbar = this.parentNavItem.parentNavbar;
            if (rootNavbar && rootNavbar.element) {
                let destLeft = -el.offsetLeft;
                let elWidth = rootNavbar.element.offsetWidth;

                this.element.style.left = -el.offsetLeft + 'px';
                this.element.style.minWidth = elWidth + 'px';
            }
        } else {
            let elWidth = el.offsetWidth;
            this.element.style.minWidth = elWidth + 'px';
        }
    }

    getNavItems() {
        return Array.from(this.element.children).filter(child => {
            return child.classList.contains('nav-item');
        }).map(navItemElement => {
            return new NavItem(navItemElement, this);
        });
    }

    get isVerticalNavbar() {
        return this.options.direction === 'vertical';
    }

    get isDropUp() {
        return this.options.dropup;
    }

    get isExtendedChildNavbar() {
        return this.options.extendedChildNavbar;
    }

    constructor(navbarElement, parentNavItem) {
        super(navbarElement);
        this.parentNavItem = parentNavItem;

        let isVerticalNavbar = navbarElement.classList.contains('navbar-vertical');
        let isDropUp = navbarElement.classList.contains('dropup');
        let isExtendedChildNavbar = navbarElement.classList.contains('extended-child-navbar');

        this.options = {
            autoCollapse: true,
            direction: isVerticalNavbar ? 'vertical' : 'horizontal',
            dropup: isDropUp,
            extendedChildNavbar: isExtendedChildNavbar
        };

        this.childNavItems = this.getNavItems();
        this._setRoles();
    }
};

class MobileNavbar extends Navbar {
    static _clickEvent(e, inst) {
        e.preventDefault();

        if (inst.element.offsetHeight === 0) {
            inst.openMenu();
        } else {
            inst.closeMenu();
        }
        e.stopPropagation();
    }

    static _openMenu(inst) {
        NDSU.showOverlay();
        inst.element.classList.add('active');
        inst.toggleElement.setAttribute('aria-expanded', true);
        inst.setOffset();
    }

    static _closeMenu(inst) {
        inst.element.classList.remove('active');
        inst.toggleElement.setAttribute('aria-expanded', false);
        NDSU.hideOverlay();
    }

    getNavItems() {
        return Array.from(this.element.children).filter(child => {
            return child.classList.contains('nav-item');
        }).map(navItemElement => {
            return new MobileNavItem(navItemElement, this);
        });
    }

    setOffset() {
        if (!this.containerElement) return;
        
        let el = this.containerElement;
        let elStyle = window.getComputedStyle(el);
        
        let elHeight = el.offsetHeight;
        let windowHeight = window.innerHeight;
        this.element.style.maxHeight = (windowHeight - elHeight) + 'px';

        if (this.isDropUp) {
            elHeight += parseInt(elStyle.marginTop);
            this.element.style.bottom = elHeight + 'px';
        } else {
            elHeight += parseInt(elStyle.marginBottom);
            this.element.style.top = elHeight + 'px';
        }
    }

    setToggleElement() {
        if (this.toggleElement){
            this.toggleElement.setAttribute('aria-haspopup', true);
            this.toggleElement.setAttribute('aria-expanded', false);
            this.toggleElement.addEventListener('click', this.clickEvent);
            NDSU.fullOverlayElement.addEventListener('click', this.closeMenu);
        }
    }

    constructor(navbarElement, parentNavItem, navbarContainerElement, navbarToggleElement) {
        super(navbarElement, parentNavItem);

        this.containerElement = navbarContainerElement;
        this.toggleElement = navbarToggleElement;

        this.openMenu = () => MobileNavbar._openMenu(this);
        this.closeMenu = () => MobileNavbar._closeMenu(this);
        this.clickEvent = (e) => MobileNavbar._clickEvent(e, this);

        this.setToggleElement();
    }
};


class NavItem extends NavBaseClass {
    
    static _open(inst) {
        if (!inst || !inst.element) return;
        inst.setOffset();
        inst.element.classList.add('active');
        if (inst.parentNavItem){
            inst.parentNavItem.linkElement.setAttribute('aria-expanded', true);
        }
    }

    static _close(inst) {
        if (!inst || !inst.element) return;
        inst.element.classList.remove('active');
        if (inst.parentNavItem){
            inst.parentNavItem.linkElement.setAttribute('aria-expanded', false);
        }
    }

    static _keysListener(e, inst) {
        e.stopPropagation();
        let nextItem;
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

    static _focusInEvent(e, inst) {
        inst.openChild();
        if (inst.closeTimeoutinst){
            clearTimeout(inst.closeTimeoutinst);
        }
    };

    static _focusOutEvent(e, inst) {
        inst.closeTimeoutinst = setTimeout(() => {
            inst.closeChild();
        }, inst.closeTimeout);
    };

    _getChildNavbar() {
        let childNavbarElement = this.element.querySelector('.child-navbar');
        return childNavbarElement ? new Navbar(childNavbarElement, this) : undefined;
    }
    _getLinkElement() {

        let linkElement = Array.prototype.filter.call(this.element.children, child => {
            return child.classList.contains('nav-link');
        })[0];
        if (linkElement) return linkElement;

        let titleElement = this.element.querySelector('.child-section-title');
        if (!titleElement) return linkElement;

        let title = titleElement.innerText;
        linkElement = document.createElement('a');
        linkElement.href = '#';
        linkElement.innerText = title;
        linkElement.className = 'nav-link';

        this.element.insertBefore(linkElement, this.element.firstChild);

        return linkElement;
    }

    _setEventListeners() {
        if (!this.parentNavbar.isExtendedChildNavbar){
            this.element.addEventListener('focusin', this.focusInListener);
            this.element.addEventListener('focusout', this.focusOutListener);
            this.element.addEventListener('mouseenter', this.mouseInListener);
            this.element.addEventListener('mouseleave', this.focusOutListener);
        }

        this.element.addEventListener('keydown', e => NavItem._keysListener(e, this));
    }

    _setRoles() {
        this.setRole('presentation');
        if (this.linkElement){
            this.linkElement.setAttribute('role', 'menuitem');
        }
        if (this.childNavbar && this.linkElement){
            this.linkElement.setAttribute('aria-haspopup', true);
            let elId = this.linkElement.getAttribute('id');
            if (!elId) {
                elId = 'parentLink_' + Math.random().toString(36).substr(2, 10);
                this.linkElement.setAttribute('id', elId);
            }

            this.childNavbar.element.setAttribute('aria-labelledby', elId);
            this.linkElement.setAttribute('aria-expanded', false);
        }
    }


    focus() {
        if (this.linkElement) {
            this.linkElement.focus();
        } else if (this.childNavbar && this.childNavbar.childNavItems.length) {
            this.childNavbar.childNavItems[0].focus();
        }
    }
    
    open() {
        NavItem._open(this);
    }

    openChild() {
        NavItem._open(this.childNavbar);
    }

    close() {
        NavItem._close(this);
    }

    closeChild() {
        NavItem._close(this.childNavbar);
    }

    get closeTimeout() {
        return 200;
    }

    get previousNavItem() {
        return this.parentNavbar.getPreviousNavItem(this) || this.parentNavbar.parentNavItem;
    }
    get nextNavItem() {
        return this.parentNavbar.getNextNavItem(this);
    }

    get parentNavItem() {
        return this.parentNavbar.parentNavItem;
    }

    get firstChildNavItem() {
        if (!this.childNavbar) return undefined;
        return this.childNavbar.childNavItems[0];
    };

    get leftNeighbor() {
        let neighbor;
        if (!this.parentNavbar.isVerticalNavbar) {
            neighbor = this.previousNavItem;
        } else if (this.parentNavItem){
            let parentItem = this.parentNavItem;
            neighbor = parentItem.parentNavbar.getPreviousNavItem(parentItem) || parentItem;
        }
        return neighbor;
    }

    get rightNeighbor() {
        let neighbor;
        if (!this.parentNavbar.isVerticalNavbar){
            neighbor = this.nextNavItem;
        } else if (this.parentNavItem) {
            let parentItem = this.parentNavItem;
            neighbor = parentItem.parentNavbar.getNextNavItem(parentItem) || parentItem;
        }
        
        return neighbor;
    }

    get downNeighbor() {
        let neighbor;
        if (this.parentNavbar.isVerticalNavbar){
            if (this.parentNavbar.isDropUp){
                neighbor = this.nextNavItem || this._parentNavItem;
            } else {
                neighbor = this.nextNavItem;
            }
        } else {
            neighbor = this.firstChildNavItem;
        }
        return neighbor;
    }

    get upNeighbor() {
        let neighbor;
        if (this.parentNavbar.isVerticalNavbar){
            if (this.parentNavbar.isDropUp){
                neighbor = this.previousNavItem;
            } else{
                neighbor = this.previousNavItem || this._parentNavItem;
            }
        } else if (this.parentNavbar.isExtendedChildNavbar && !this.parentNavbar.isDropUp){
            neighbor = this.parentNavItem;
        }
        return neighbor;
    }

    constructor(navItemElement, parentNavbar) {
        super(navItemElement);

        this.parentNavbar = parentNavbar;
        this.linkElement = this._getLinkElement();
        this.childNavbar = this._getChildNavbar();
        
        this.closeTimeoutinst;
        this.focusInListener = (e) => {
            if (this.parentNavbar.options.autoCollapse){
                NavItem._focusInEvent(e, this);
            }
        };

        this.mouseInListener = (e) => NavItem._focusInEvent(e, this);

        this.focusOutListener = (e) => NavItem._focusOutEvent(e, this);

        this._setEventListeners();
        this._setRoles();
    }
}

class MobileNavItem extends NavItem {
    _getChildNavbar() {
        let childNavbarElement = this.element.querySelector('.child-navbar');
        return childNavbarElement ? new MobileNavbar(childNavbarElement, this) : undefined;
    }

    _getLinkElement() {
        let linkElement = Array.prototype.filter.call(this.element.children, child => {
            return child.classList.contains('nav-link');
        })[0];
        if (linkElement) return linkElement;

        let titleElement = this.element.querySelector('.child-section-title');
        if (!titleElement) return linkElement;

        let title = titleElement.innerText;
        linkElement = document.createElement('a');
        linkElement.href = '#';
        linkElement.innerText = title;
        linkElement.className = 'nav-link';

        this.element.insertBefore(linkElement, this.element.firstChild);

        return linkElement;
    }

    _setEventListeners() {
        this.linkElement.addEventListener('click', (e) => {
            let childNavbar = this.childNavbar;
            if (!childNavbar) return;

            if (childNavbar.element.offsetHeight === 0) {
                childNavbar.element.classList.add('active');
                this.linkElement.classList.add('active');
                this.linkElement.setAttribute('aria-expanded', true);
            } else {
                childNavbar.element.classList.remove('active');
                this.linkElement.classList.remove('active');
                this.linkElement.setAttribute('aria-expanded', false);
            }
            e.preventDefault();
        });
    }

    constructor(navItemElement, parentNavbar) {
        super(navItemElement, parentNavbar);
    }
}

NDSU.mobileNavbars = Array.prototype.map.call(document.querySelectorAll('.navbar-mobile-container'), (navbarContainer) => {
    let mobileNavbar = navbarContainer.querySelector('.navbar-mobile:not(.child-navbar)');
    let navbarToggle = navbarContainer.querySelector('.navbar-toggle');

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
