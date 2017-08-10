class StickyBar {
    static _scrollEvent(e, obj) {
        let currentY = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if (currentY > obj.offsetTop){
            obj.element.classList.add('sticky-bar-on');
        } else {
            obj.element.classList.remove('sticky-bar-on');
        }
    }

    constructor(baseElement) {
        this.element = baseElement;
        this.offsetTop = this.element.offsetTop;
        
        window.addEventListener('scroll', (e) => StickyBar._scrollEvent(e, this));
    }
};

NDSU.stickyBars = Array.prototype.map.call(document.querySelectorAll('.sticky-bar'), (stickyBar) => {
    return new StickyBar(stickyBar);
});