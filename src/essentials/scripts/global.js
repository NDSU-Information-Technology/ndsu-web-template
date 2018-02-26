
window.NDSU = {};

if (!NDSU.fullOverlayElement) {
    var fullOverlay = document.createElement('div');
    fullOverlay.className = 'full-overlay';
    fullOverlay.setAttribute('role', 'presentation');
    fullOverlay.addEventListener('click', (e) => {
        if (fullOverlay.offsetHeight !== 0) {
            NDSU.hideOverlay();
        }
    });

    NDSU.fullOverlayElement = fullOverlay;
    document.body.appendChild(NDSU.fullOverlayElement);
}

NDSU.contentElement = document.getElementById('content');

NDSU.showOverlay = (overlayLevel) => {
    NDSU.fullOverlayElement.classList.add('active');
    if (overlayLevel) {
        NDSU.fullOverlayElement.classList.add(overlayLevel);
    }
    document.body.style.overflow = 'hidden';
};
NDSU.hideOverlay = (overlayLevel) => {
    NDSU.fullOverlayElement.classList.remove('active');
    if (overlayLevel) {
        NDSU.fullOverlayElement.classList.remove(overlayLevel);
    }
    document.body.style.overflow = '';
};