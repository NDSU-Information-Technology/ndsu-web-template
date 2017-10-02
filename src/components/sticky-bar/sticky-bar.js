class StickyBar {

    static _scrollEvent(e, obj) {
        let currentY = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if (currentY > obj.offsetTop){
            obj.element.classList.add('sticky-bar-on');
            obj.bufferElement.style.height = obj.element.offsetHeight + 'px';
        } else if (currentY <= obj.offsetTop - obj.element.offsetHeight) {
            obj.element.classList.remove('sticky-bar-on');
            obj.bufferElement.style.height = 0;
        }
    }

    constructor(baseElement) {
        this.element = baseElement;
        this.offsetTop = this.element.offsetTop;

        this.bufferElement = document.createElement('div');
        this.bufferElement.classList.add('sticky-buffer');

        let sizes = ['xl', 'lg', 'md', 'sm', 'xs'];
        sizes.forEach((size) => {
            let stickyClass = 'sticky-' + size;
            if (this.element.classList.contains(stickyClass))
                this.bufferElement.classList.add(stickyClass);
        });
        this.element.parentElement.insertBefore(this.bufferElement, this.element);
        
        window.addEventListener('scroll', (e) => StickyBar._scrollEvent(e, this));
    }
};

NDSU.stickyBars = Array.prototype.map.call(document.querySelectorAll('.sticky-bar'), (stickyBar) => {
    return new StickyBar(stickyBar);
});