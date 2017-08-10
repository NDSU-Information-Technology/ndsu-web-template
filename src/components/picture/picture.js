
const setPictureComponentSize = (img) => {
    let imgParent = img.parentElement;
    
    let imgRatio = img.naturalWidth/img.naturalHeight;
    
    if (imgParent.clientHeight == 0 && imgParent.clientWidth == 0) {
        imgParent.style.height = img.naturalHeight + 'px';
        imgParent.style.width = img.naturalWidth + 'px';
    } else if (imgParent.clientHeight == 0) {
        imgParent.style.height = (imgParent.clientWidth / imgRatio) + 'px';
    } else if (imgParent.clientWidth == 0) {
        imgParent.style.width = (imgParent.clientHeight / imgRatio) + 'px';
    } 

    let parentRatio = imgParent.clientWidth/imgParent.clientHeight;
    if (parentRatio >= imgRatio) {
        img.style.width = '100%';
    } else {
        img.style.height = '100%';
    }
}

Array.prototype.forEach.call(document.getElementsByClassName('full-size-picture'), picWrapper => {
    // if (picWrapper.offsetHeight > 0) return;
    let picImg = picWrapper.querySelector('img');
    if (!picImg) return;
    if (picImg.complete) {
        setPictureComponentSize(picImg);  
    } else { 
        picImg.addEventListener('load', (imgLoadEvent) => setPictureComponentSize(imgLoadEvent.currentTarget));
    }
});