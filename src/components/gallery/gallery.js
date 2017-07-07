function GalleryBaseObj(baseElement) {
    this.element = baseElement;
};

function Gallery(galleryElement) {
    GalleryBaseObj.call(this, galleryElement);
    
    this.pictureLinks = this._getPictureLinks(this);
};
Gallery.prototype = Object.create(GalleryBaseObj.prototype);
Gallery.prototype.constructor = Gallery;

Gallery.prototype._getPictureLinks = (inst) => {
    return Array.from(inst.element.querySelectorAll('.picture-container')).map(link => {
        return new GalleryPictureLink(link);
    });
};

function GalleryPictureLink(pictureLinkElement) {
    GalleryBaseObj.call(this, pictureLinkElement);
    
    this.openPopup = () => this._openPopup(this);
    this.closePopup = () => this._closePopup(this);

    
    this.imageElement = this._getImageElement(this);
    this.imageSrc = this.imageElement.getAttribute('src');
    this.imageDesc = this.imageElement.getAttribute('alt');

    this.element.setAttribute('aria-haspopup', true);
    this._setEvents(this);
};

GalleryPictureLink.prototype = Object.create(GalleryBaseObj.prototype);
GalleryPictureLink.prototype.constructor = GalleryPictureLink;

GalleryPictureLink.prototype._getImageElement = (inst) => {
    return inst.element.querySelector('img');
};
GalleryPictureLink.prototype._openPopup = (inst) => {
    NDSU.showOverlay();
    var el = NDSU.fullOverlayElement;
    var containerEl = el.querySelector('.gallery-full-size');
    var imgEl = el.querySelector('.gallery-full-size img');
    var closeEl = el.querySelector('.gallery-full-size .close-button');
    if (!containerEl) {
        var containerEl = document.createElement('div');
        containerEl.className = 'gallery-full-size';
        containerEl.setAttribute('role', 'dialog');
        imgEl = document.createElement('img');

        var closeEl = document.createElement('a');
        closeEl.setAttribute('href', '#');
        closeEl.className = 'close-button';
        var closeTextEl = document.createElement('span');
        closeTextEl.className = 'sr-only';
        closeTextEl.innerText = 'Close full size image';
        closeEl.appendChild(closeTextEl);
        closeEl.addEventListener('click', (event) => {
            event.preventDefault();
            inst.closePopup();
        });
        
        containerEl.appendChild(closeEl);
        containerEl.appendChild(imgEl);
        el.appendChild(containerEl);
    };

    imgEl.setAttribute('src', inst.imageSrc);
    imgEl.setAttribute('alt', inst.imageDesc);

    var elId = inst.element.getAttribute('id');
    if (!elId) {
        elId = 'parentLink_' + Math.random().toString(36).substr(2, 10);
        inst.element.setAttribute('id', elId);
    }

    containerEl.classList.add('active');
    closeEl.setAttribute('data-parent-control', elId);
    closeEl.focus();
};
GalleryPictureLink.prototype._closePopup = (inst) => {
    NDSU.hideOverlay();
    var el = NDSU.fullOverlayElement;
    var containerEl = el.querySelector('.gallery-full-size');
    var closeEl = el.querySelector('.gallery-full-size .close-button');
    if (containerEl){
        containerEl.classList.remove('active');
    }
    if (closeEl) {
        var parentId = closeEl.getAttribute('data-parent-control');
        var parentEl = document.getElementById(parentId);
        if (parentEl) parentEl.focus();
    }
};
GalleryPictureLink.prototype._setEvents = (inst) => {
    inst.element.addEventListener('click', (event) => {
        event.preventDefault();
        inst.openPopup();
    });
    NDSU.fullOverlayElement.addEventListener('click', inst.closePopup);
};

NDSU.galleries = Array.from(document.querySelectorAll('.gallery.photo')).map(galleryElement => {
    return new Gallery(galleryElement);
});