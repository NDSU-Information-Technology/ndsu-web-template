class GalleryBaseObj {
    constructor(baseElement) {
        this.element = baseElement;
    }
};

class Gallery extends GalleryBaseObj {
    constructor(galleryElement) {
        super(galleryElement);
        this.pictureLinks = Array.from(this.element.querySelectorAll('.gallery-item')).map(link => new GalleryPictureLink(link));
    }
};

class GalleryPictureLink extends GalleryBaseObj {
    static setEvents(inst) {
        inst.element.addEventListener('click', (event) => {
            event.preventDefault();
            inst.openPopup();
        });
        NDSU.fullOverlayElement.addEventListener('click', inst.closePopup);
    }

    openPopup() {
        NDSU.showOverlay(this.overlayLevel);
        let el = NDSU.fullOverlayElement;
        let containerEl = el.querySelector('.gallery-full-size');
        let imgEl = el.querySelector('.gallery-full-size img');
        let closeEl = el.querySelector('.gallery-full-size .close-button');
        if (!containerEl) {
            containerEl = document.createElement('div');
            containerEl.className = 'gallery-full-size';
            containerEl.setAttribute('role', 'dialog');
            imgEl = document.createElement('img');

            closeEl = document.createElement('a');
            closeEl.setAttribute('href', '#');
            closeEl.className = 'btn  btn-tiny close-button';
            closeEl.innerText = 'Close';
            closeEl.addEventListener('click', (event) => {
                event.preventDefault();
                this.closePopup();
            });
            
            containerEl.appendChild(closeEl);
            containerEl.appendChild(imgEl);
            el.appendChild(containerEl);
        };

        imgEl.setAttribute('src', this.fullSizeImageSrc);
        imgEl.setAttribute('alt', this.imageDesc);

        let elId = this.element.getAttribute('id');

        if (!elId) {
            elId = 'parentLink_' + Math.random().toString(36).substr(2, 10);
            this.element.setAttribute('id', elId);
        }

        containerEl.classList.add('active');
        closeEl.setAttribute('data-parent-control', elId);
        closeEl.focus();
    }

    closePopup() {
        NDSU.hideOverlay(this.overlayLevel);
        let el = NDSU.fullOverlayElement;
        let containerEl = el.querySelector('.gallery-full-size');
        let closeEl = el.querySelector('.gallery-full-size .close-button');
        if (containerEl){
            containerEl.classList.remove('active');
        }
        if (closeEl) {
            let parentId = closeEl.getAttribute('data-parent-control');
            let parentEl = document.getElementById(parentId);
            if (parentEl) parentEl.focus();
        }
    }

    constructor(pictureLinkElement) {
        super(pictureLinkElement);
        this.imageElement = this.element.querySelector('img');
        if (!this.imageElement) return;
        
        this.imageSrc = this.imageElement.getAttribute('src');
        this.imageDesc = this.imageElement.getAttribute('alt');
        this.fullSizeImageSrc = this.imageElement.getAttribute('data-full-size-src') || this.imageSrc;
        this.overlayLevel = 'high';

        if (this.element.querySelector('a')) return;

        this.element.setAttribute('aria-haspopup', true);
        GalleryPictureLink.setEvents(this);
    }
};

NDSU.galleries = Array.from(document.querySelectorAll('.gallery')).map(galleryElement => {
    return new Gallery(galleryElement);
});