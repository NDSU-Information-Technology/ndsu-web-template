Array.prototype.forEach.call(document.getElementsByClassName('full-size-picture'), picWrapper => {
    // if (picWrapper.offsetHeight > 0) return;
    var picImg = picWrapper.querySelector('img');
    if (!picImg) return;
    picImg.addEventListener('load', (imgLoadEvent) => {
        var img = imgLoadEvent.currentTarget;
        var imgParent = img.parentElement;
        
        var imgRatio = img.naturalWidth/img.naturalHeight;
        
        if (imgParent.clientHeight == 0 && imgParent.clientWidth == 0) {
            imgParent.style.height = img.naturalHeight + 'px';
            imgParent.style.width = img.naturalWidth + 'px';
        } else if (imgParent.clientHeight == 0) {
            imgParent.style.height = (imgParent.clientWidth / imgRatio) + 'px';
        } else if (imgParent.clientWidth == 0) {
            imgParent.style.width = (imgParent.clientHeight / imgRatio) + 'px';
        } 

        var parentRatio = imgParent.clientWidth/imgParent.clientHeight;
        if (parentRatio >= imgRatio) {
            img.style.width = '100%';
        } else {
            img.style.height = '100%';
        }
    });
});