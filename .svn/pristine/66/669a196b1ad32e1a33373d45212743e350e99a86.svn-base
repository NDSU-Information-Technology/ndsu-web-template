function StickyBar(baseElement){
    this.element = baseElement;

    this.offsetTop = this.element.offsetTop;
    window.addEventListener('scroll', (event) => {
        var currentY = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if (currentY > this.offsetTop){
            this.element.classList.add('sticky-bar-on');
        } else {
            this.element.classList.remove('sticky-bar-on');
        }
    });
};

NDSU.stickyBars = Array.prototype.map.call(document.querySelectorAll('.sticky-bar'), (stickyBar) => {
    return new StickyBar(stickyBar);
});