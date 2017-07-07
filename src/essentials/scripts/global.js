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

NDSU.showOverlay = () => {
    NDSU.fullOverlayElement.classList.add('active');
    document.body.style.overflow = 'hidden';
};
NDSU.hideOverlay = () => {
    NDSU.fullOverlayElement.classList.remove('active');
    document.body.style.overflow = '';
};