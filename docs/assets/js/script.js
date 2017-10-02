'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.NDSU = {};

if (!NDSU.fullOverlayElement) {
    var fullOverlay = document.createElement('div');
    fullOverlay.className = 'full-overlay';
    fullOverlay.setAttribute('role', 'presentation');
    fullOverlay.addEventListener('click', function (e) {
        if (fullOverlay.offsetHeight !== 0) {
            NDSU.hideOverlay();
        }
    });

    NDSU.fullOverlayElement = fullOverlay;
    document.body.appendChild(NDSU.fullOverlayElement);
}

NDSU.showOverlay = function () {
    NDSU.fullOverlayElement.classList.add('active');
    document.body.style.overflow = 'hidden';
};
NDSU.hideOverlay = function () {
    NDSU.fullOverlayElement.classList.remove('active');
    document.body.style.overflow = '';
};

if (typeof enableCodeExample !== 'undefined' && enableCodeExample) {
    Array.prototype.forEach.call(document.querySelectorAll('.code-example, .language-html'), function (element) {
        var elementId = element.getAttribute('id');
        if (!elementId) {
            elementId = 'codeExample_' + Math.random().toString(36).substr(2, 10);
            element.setAttribute('id', elementId);
        }

        var sourceCodeElement = element.querySelector('.code-source, pre.highlight');
        if (!sourceCodeElement) return;

        var sourceCode = void 0;
        if (sourceCodeElement.nodeName === 'TEXTAREA') {
            sourceCode = sourceCodeElement.value;
        } else if (sourceCodeElement.nodeName === 'PRE') {
            sourceCode = sourceCodeElement.innerText;
        }

        if (!sourceCode) return;
        var sourceCodeElementId = sourceCodeElement.getAttribute('id');
        if (!sourceCodeElementId) {
            sourceCodeElementId = elementId + '_sourceCode';
            sourceCodeElement.setAttribute('id', sourceCodeElementId);
        }
        sourceCodeElement.style.height = sourceCodeElement.scrollHeight + 'px';
        var sourceCodeLabel = document.createElement('h5');
        sourceCodeLabel.innerText = 'Source Code';

        var resultElement = document.createElement('div');
        var resultElementId = elementId + '_result';
        resultElement.setAttribute('id', resultElementId);
        resultElement.className = 'code-result';
        resultElement.innerHTML = sourceCode;
        var resultLabel = document.createElement('h5');
        resultLabel.innerText = 'Result';

        element.insertBefore(sourceCodeLabel, sourceCodeElement);
        element.appendChild(resultLabel);
        element.appendChild(resultElement);

        // TODO: Implement Tabbing
        // http://w3c.github.io/aria-practices/examples/tabs/tabs-1/tabs.html
    });
}

// From https://www.w3.org/WAI/tutorials/carousels/examples/carousel/

/* Focusin/out event polyfill (for Firefox) by nuxodin
 * Source: https://gist.github.com/nuxodin/9250e56a3ce6c0446efa
 */

!function () {
    var w = window,
        d = w.document;

    if (w.onfocusin === undefined) {
        d.addEventListener('focus', addPolyfill, true);
        d.addEventListener('blur', addPolyfill, true);
        d.addEventListener('focusin', removePolyfill, true);
        d.addEventListener('focusout', removePolyfill, true);
    }
    function addPolyfill(e) {
        var type = e.type === 'focus' ? 'focusin' : 'focusout';
        var event = new CustomEvent(type, { bubbles: true, cancelable: false });
        event.c1Generated = true;
        e.target.dispatchEvent(event);
    }
    function removePolyfill(e) {
        if (!e.c1Generated) {
            // focus after focusin, so chrome will the first time trigger tow times focusin
            d.removeEventListener('focus', addPolyfill, true);
            d.removeEventListener('blur', addPolyfill, true);
            d.removeEventListener('focusin', removePolyfill, true);
            d.removeEventListener('focusout', removePolyfill, true);
        }
        setTimeout(function () {
            d.removeEventListener('focusin', removePolyfill, true);
            d.removeEventListener('focusout', removePolyfill, true);
        });
    }
}();

/* Carousel by Eric Eggert for W3C */

var myCarousel = function myCarousel() {

    "use strict";

    // Some variables for the instance of the carousel

    var carousel,
        slides,
        index,
        slidenav,
        settings,
        timer,
        setFocus,
        animationSuspended,
        announceSlide = 'false';

    // Helper function for removing classes
    function removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    // Helper function for detecting if an element has a class
    function hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        } else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
    }

    // Initialization for the carousel
    // Argument: set = an object of settings
    // Possible settings:
    // id <string> ID of the carousel wrapper element (required).
    // slidenav <bool> If true, a list of slides is shown.
    // animate <bool> If true, the slides can be animated.
    // startAnimated <bool> If true, the animation begins
    //                        immediately.
    //                      If false, the animation needs
    //                        to be initiated by clicking
    //                        the play button.
    // pause <int> number of ms the slide will pause at a slide
    function init(set) {
        // Make settings available to all functions
        settings = set;
        settings.pause = settings.pause || 5000;

        // Select the element and the individual slides
        carousel = document.getElementById(settings.id);
        slides = carousel.querySelectorAll('.slide');

        carousel.className = 'active carousel';

        // Add the previous/next controls
        var ctrls = document.createElement('ul');

        ctrls.className = 'controls';
        ctrls.innerHTML = '<li>' + '<button type="button" class="btn-prev"><span class="sr-only">Previous Slide</span>&lsaquo;</button>' + '</li>' + '<li>' + '<button type="button" class="btn-next"><span class="sr-only">Next Slide</span>&rsaquo;</button>' + '</li>';

        ctrls.querySelector('.btn-prev').addEventListener('click', prevSlide);
        ctrls.querySelector('.btn-next').addEventListener('click', nextSlide);

        carousel.appendChild(ctrls);

        // Add list of slides and/or play/pause button
        if (settings.slidenav || settings.animate) {
            slidenav = document.createElement('ul');

            slidenav.className = 'slidenav';

            var li = document.createElement('li');

            if (settings.animate) {

                // Add Play/Pause button if the slider is animated

                if (settings.startAnimated) {
                    li.innerHTML = '<button data-stop=true><span class="sr-only">Stop Animation </span>⏸</button>';
                } else {
                    li.innerHTML = '<button data-start=true><span class="sr-only">Start Animation </span>▶</button>';
                }

                slidenav.appendChild(li);
            }

            if (settings.slidenav) {

                // Add button for each slide if slidenav = true
                for (var i = slides.length - 1; i >= 0; i--) {
                    var klass = i === 0 ? 'class="current" ' : '';
                    var kurrent = i === 0 ? ' <span class="sr-only">(Current Slide)</span>' : '';

                    li.innerHTML = '<button ' + klass + 'data-slide="' + i + '"><span class="sr-only">News</span> ' + (i + 1) + kurrent + '</button>';
                    slidenav.appendChild(li);
                }
            }

            // Register click event on the slidenav
            slidenav.addEventListener('click', function (event) {
                var button = event.target;
                if (button.localName == 'button') {
                    if (button.getAttribute('data-slide')) {
                        // If the button is from the slide list,
                        // stop the animation and go to the slide
                        stopAnimation();
                        setSlides(button.getAttribute('data-slide'), true);
                    } else if (button.getAttribute('data-stop')) {
                        // Stop animation if the stop button is activated
                        stopAnimation();
                    } else if (button.getAttribute('data-start')) {
                        // Start animation if the stop button is activated
                        startAnimation();
                    }
                }
            }, true);

            carousel.className = 'active carousel with-slidenav';
            carousel.appendChild(slidenav);
        }

        // Register a transitionend event so the slides can be
        // hidden after the transition
        slides[0].parentNode.addEventListener('transitionend', function (event) {
            var slide = event.target;
            removeClass(slide, 'in-transition');
            if (hasClass(slide, 'current')) {
                // Also, if the global setFocus variable is set
                // and the transition ended on the current slide,
                // set the focus on this slide.
                if (setFocus) {
                    // This is done if the user clicks a slidenav button.
                    slide.setAttribute('tabindex', '-1');
                    slide.focus();
                    setFocus = false;
                }
                if (announceSlide) {
                    slide.removeAttribute('aria-live');
                    announceSlide = false;
                }
            }
        });

        // Suspend the animation if the mouse enters the carousel
        // or if an element of the carousel (that is not the current
        // slide) receives focus.
        // (Re-)start animation when the mouse leaves or the focus
        // is removed.
        carousel.addEventListener('mouseenter', suspendAnimation);
        carousel.addEventListener('mouseleave', continueAnimation);

        carousel.addEventListener('focusin', function (event) {
            if (!hasClass(event.target, 'slide')) {
                suspendAnimation();
            }
        });
        carousel.addEventListener('focusout', function (event) {
            if (!hasClass(event.target, 'slide')) {
                continueAnimation();
            }
        });

        // Add arrow keys handler 
        carousel.addEventListener('keydown', function (event) {
            if (event.which == 37) {
                event.preventDefault();
                prevSlide();
            } else if (event.which == 39) {
                event.preventDefault();
                nextSlide();
            }
        });

        // Set the index (=current slide) to 0 – the first slide
        index = 0;
        setSlides(index);

        // If the carousel is animated, advance to the
        // next slide after 5s
        if (settings.startAnimated) {
            clearTimeout(timer);
            timer = setTimeout(nextSlide, settings.pause);
        }
    }

    // Function to set a slide the current slide
    function setSlides(new_current, focus, transition) {
        // Both, focus and transition are optional parameters.
        // focus denotes if the focus should be set after the
        // carousel advanced to slide number new_current.
        // transition denotes if the transition is going into the
        // next or previous direction.
        // Here defaults are set:
        setFocus = typeof focus !== 'undefined' ? focus : false;
        transition = typeof transition !== 'undefined' ? transition : 'none';

        new_current = parseFloat(new_current);

        var length = slides.length;
        var new_next = new_current + 1;
        var new_prev = new_current - 1;

        // If the next slide number is equal to the length,
        // the next slide should be the first one of the slides.
        // If the previous slide number is less than 0.
        // the previous slide is the last of the slides.
        if (new_next === length) {
            new_next = 0;
        } else if (new_prev < 0) {
            new_prev = length - 1;
        }

        // Reset slide classes
        for (var i = slides.length - 1; i >= 0; i--) {
            slides[i].className = "slide";
        }

        // Add classes to the previous, next and current slide
        slides[new_next].className = 'next slide';
        if (transition == 'next') {
            slides[new_next].className = 'next slide in-transition';
            slides[new_next].setAttribute('aria-hidden', 'true');
        }

        slides[new_prev].className = 'prev slide';
        if (transition == 'prev') {
            slides[new_prev].className = 'prev slide in-transition';
            slides[new_next].setAttribute('aria-hidden', 'true');
        }

        slides[new_current].className = 'current slide';
        slides[new_current].removeAttribute('aria-hidden');

        if (announceSlide) {
            slides[new_current].setAttribute('aria-live', 'polite');
        }

        // Update the slidenav buttons
        if (settings.slidenav) {
            var buttons = carousel.querySelectorAll('.slidenav button[data-slide]');
            for (var j = buttons.length - 1; j >= 0; j--) {
                buttons[j].className = '';
                buttons[j].innerHTML = '<span class="sr-only">News</span> ' + (j + 1);
            }
            buttons[new_current].className = "current";
            buttons[new_current].innerHTML = '<span class="sr-only">News</span> ' + (new_current + 1) + ' <span class="sr-only">(Current Slide)</span>';
        }

        // Set the global index to the new current value
        index = new_current;
    }

    // Function to advance to the next slide
    function nextSlide() {

        var length = slides.length,
            new_current = index + 1;

        if (new_current === length) {
            new_current = 0;
        }

        announceSlide = true;

        // If we advance to the next slide, the previous needs to be
        // visible to the user, so the third parameter is 'prev', not
        // next.
        setSlides(new_current, false, 'prev');

        // If the carousel is animated, advance to the next
        // slide after 5s
        if (settings.animate) {
            clearTimeout(timer);
            timer = setTimeout(nextSlide, settings.pause);
        }
    }

    // Function to advance to the previous slide
    function prevSlide() {
        var length = slides.length,
            new_current = index - 1;

        if (new_current < 0) {
            new_current = length - 1;
        }

        announceSlide = true;

        // If we advance to the previous slide, the next needs to be
        // visible to the user, so the third parameter is 'next', not
        // prev.
        setSlides(new_current, false, 'next');
    }

    // Function to stop the animation
    function stopAnimation() {
        clearTimeout(timer);
        settings.animate = false;
        animationSuspended = false;
        var _this = carousel.querySelector('[data-stop], [data-start]');
        _this.innerHTML = '<span class="sr-only">Start Animation </span>▶';
        _this.removeAttribute('data-stop');
        _this.setAttribute('data-start', 'true');
    }

    // Function to start the animation
    function startAnimation() {
        settings.animate = true;
        animationSuspended = false;
        clearTimeout(timer);
        timer = setTimeout(function () {
            nextSlide();
        }, settings.pause);
        var _this = carousel.querySelector('[data-stop], [data-start]');
        _this.innerHTML = '<span class="sr-only">Stop Animation </span>⏸';
        _this.setAttribute('data-stop', 'true');
        _this.removeAttribute('data-start');
    }

    // Function to suspend the animation
    function suspendAnimation() {
        if (settings.animate) {
            clearTimeout(timer);
            animationSuspended = true;
        }
    }

    function continueAnimation() {
        animationSuspended = false;
        if (settings.animate) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                nextSlide();
            }, settings.pause);
        }
    }

    // Making some functions public
    return {
        init: init,
        next: nextSlide,
        prev: prevSlide,
        goto: setSlides,
        stop: stopAnimation,
        start: startAnimation
    };
};

var GalleryBaseObj = function GalleryBaseObj(baseElement) {
    _classCallCheck(this, GalleryBaseObj);

    this.element = baseElement;
};

;

var Gallery = function (_GalleryBaseObj) {
    _inherits(Gallery, _GalleryBaseObj);

    function Gallery(galleryElement) {
        _classCallCheck(this, Gallery);

        var _this2 = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, galleryElement));

        _this2.pictureLinks = Array.from(_this2.element.querySelectorAll('.gallery-item')).map(function (link) {
            return new GalleryPictureLink(link);
        });
        return _this2;
    }

    return Gallery;
}(GalleryBaseObj);

;

var GalleryPictureLink = function (_GalleryBaseObj2) {
    _inherits(GalleryPictureLink, _GalleryBaseObj2);

    _createClass(GalleryPictureLink, [{
        key: 'openPopup',
        value: function openPopup() {
            var _this4 = this;

            NDSU.showOverlay();
            var el = NDSU.fullOverlayElement;
            var containerEl = el.querySelector('.gallery-full-size');
            var imgEl = el.querySelector('.gallery-full-size img');
            var closeEl = el.querySelector('.gallery-full-size .close-button');
            if (!containerEl) {
                containerEl = document.createElement('div');
                containerEl.className = 'gallery-full-size';
                containerEl.setAttribute('role', 'dialog');
                imgEl = document.createElement('img');

                closeEl = document.createElement('a');
                closeEl.setAttribute('href', '#');
                closeEl.className = 'close-button';
                var closeTextEl = document.createElement('span');
                closeTextEl.className = 'sr-only';
                closeTextEl.innerText = 'Close full size image';
                closeEl.appendChild(closeTextEl);
                closeEl.addEventListener('click', function (event) {
                    event.preventDefault();
                    _this4.closePopup();
                });

                containerEl.appendChild(closeEl);
                containerEl.appendChild(imgEl);
                el.appendChild(containerEl);
            };

            imgEl.setAttribute('src', this.fullSizeImageSrc);
            imgEl.setAttribute('alt', this.imageDesc);

            var elId = this.element.getAttribute('id');

            if (!elId) {
                elId = 'parentLink_' + Math.random().toString(36).substr(2, 10);
                this.element.setAttribute('id', elId);
            }

            containerEl.classList.add('active');
            closeEl.setAttribute('data-parent-control', elId);
            closeEl.focus();
        }
    }, {
        key: 'closePopup',
        value: function closePopup() {
            NDSU.hideOverlay();
            var el = NDSU.fullOverlayElement;
            var containerEl = el.querySelector('.gallery-full-size');
            var closeEl = el.querySelector('.gallery-full-size .close-button');
            if (containerEl) {
                containerEl.classList.remove('active');
            }
            if (closeEl) {
                var parentId = closeEl.getAttribute('data-parent-control');
                var parentEl = document.getElementById(parentId);
                if (parentEl) parentEl.focus();
            }
        }
    }], [{
        key: 'setEvents',
        value: function setEvents(inst) {
            inst.element.addEventListener('click', function (event) {
                event.preventDefault();
                inst.openPopup();
            });
            NDSU.fullOverlayElement.addEventListener('click', inst.closePopup);
        }
    }]);

    function GalleryPictureLink(pictureLinkElement) {
        _classCallCheck(this, GalleryPictureLink);

        var _this3 = _possibleConstructorReturn(this, (GalleryPictureLink.__proto__ || Object.getPrototypeOf(GalleryPictureLink)).call(this, pictureLinkElement));

        _this3.imageElement = _this3.element.querySelector('img');

        _this3.imageSrc = _this3.imageElement.getAttribute('src');
        _this3.imageDesc = _this3.imageElement.getAttribute('alt');
        _this3.fullSizeImageSrc = _this3.imageElement.getAttribute('data-full-size-src') || _this3.imageSrc;

        if (_this3.element.querySelector('a')) return _possibleConstructorReturn(_this3);

        _this3.element.setAttribute('aria-haspopup', true);
        GalleryPictureLink.setEvents(_this3);
        return _this3;
    }

    return GalleryPictureLink;
}(GalleryBaseObj);

;

NDSU.galleries = Array.from(document.querySelectorAll('.gallery')).map(function (galleryElement) {
    return new Gallery(galleryElement);
});

function timeoutPromise(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Timeout!");
        }, delay);
    });
};

function detectAutoPlay() {
    var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;


    var autoPlayDetection = new Promise(function (resolve, reject) {
        // AUTOPLAY detection from https://gist.github.com/mrcoles/5537536
        // Audio file data URIs from comments in
        // [this gist](https://gist.github.com/westonruter/253174)
        // via [mudcube](https://github.com/mudcube)
        var mp3 = 'data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';

        var ogg = 'data:audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA=';

        try {
            var audio = new Audio();
            var src = audio.canPlayType('audio/ogg') ? ogg : mp3;
            audio.autoplay = true;
            audio.volume = 0;

            // this will only be triggered if autoplay works
            audio.addEventListener('play', function () {
                resolve(true);
            });

            audio.src = src;
        } catch (e) {
            reject(e);
        }
    });

    return Promise.race([autoPlayDetection, timeoutPromise(delay)]).then(function () {
        return true;
    }, function () {
        return Promise.reject('AUTOPLAY not detected within the specified timeframe');
    });
};

function onYouTubeIframeAPIReady() {
    var onYtPlayerReady = function onYtPlayerReady(e) {
        e.target.setVolume(0);
        e.target.mute();
    };

    var onYtPlayerStateChange = function onYtPlayerStateChange(e) {
        if (e.data === YT.PlayerState.PLAYING) {
            var iframeElement = e.target.getIframe();
            iframeElement.style.opacity = "1";
        } else if (e.data === YT.PlayerState.ENDED) {
            var ytPlayer = e.target;
            ytPlayer.seekTo(ytPlayer.getDuration() - 0.08);
            ytPlayer.pauseVideo();
        }
    };

    var heroBannerElements = document.querySelectorAll('.hero-banner[data-video-id]');
    NDSU.ytPlayers = Array.prototype.map.call(heroBannerElements, function (heroBanner) {
        var videoId = heroBanner.getAttribute('data-video-id');
        // let videoPosterUrl = heroBanner.getAttribute('data-video-poster');

        var playerContainer = document.createElement('div');
        playerContainer.className = 'yt-player';

        // let posterElement = document.createElement('div');
        // posterElement.className = 'poster';
        // posterElement.style.backgroundImage = 'url(' + videoPosterUrl + ')';

        var playerElement = document.createElement('div');
        var playerElementId = 'ytPlayer_' + Math.random().toString(36).substr(2, 10);
        playerElement.id = playerElementId;

        heroBanner.appendChild(playerContainer);
        // playerContainer.appendChild(posterElement);
        playerContainer.appendChild(playerElement);

        return new YT.Player(playerElementId, {
            height: '720',
            width: '1280',
            videoId: videoId,
            events: {
                'onReady': onYtPlayerReady,
                'onStateChange': onYtPlayerStateChange
            },
            playerVars: {
                autoplay: 1,
                cc_load_pollicy: 0,
                controls: 0,
                disablekb: 1,
                enablejsapi: 1,
                fs: 0,
                iv_load_policy: 3,
                loop: 0,
                origin: window.location.hostname,
                rel: 0,
                showinfo: 0
            }
        });
    });
};

detectAutoPlay(1000).then(function (autoplay) {
    if (!autoplay) return;

    var heroBannerElements = document.querySelectorAll('.hero-banner[data-video-id]');
    if (!heroBannerElements.length) return;

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}, function (error) {
    console.log(error);
});

var NavBaseClass = function () {
    _createClass(NavBaseClass, [{
        key: 'setRole',
        value: function setRole(value) {
            this.element.setAttribute('role', value);
        }
    }]);

    function NavBaseClass(baseElement) {
        _classCallCheck(this, NavBaseClass);

        this.element = baseElement;
    }

    return NavBaseClass;
}();

;

var Navbar = function (_NavBaseClass) {
    _inherits(Navbar, _NavBaseClass);

    _createClass(Navbar, [{
        key: '_setRoles',
        value: function _setRoles() {
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
    }, {
        key: 'getNextNavItem',
        value: function getNextNavItem(currentNavItem) {
            var increment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            var currentIndex = Array.prototype.indexOf.call(this.childNavItems, currentNavItem);
            if (currentIndex === -1) return undefined;

            var nextIndex = currentIndex + increment;
            return nextIndex < this.childNavItems.length ? this.childNavItems[nextIndex] : undefined;
        }
    }, {
        key: 'getPreviousNavItem',
        value: function getPreviousNavItem(currentNavItem) {
            return this.getNextNavItem(currentNavItem, -1);
        }
    }, {
        key: 'setOffset',
        value: function setOffset() {
            if (!this.parentNavItem) return;

            var el = this.parentNavItem.element;
            var elStyle = window.getComputedStyle(el);

            var elHeight = el.offsetHeight;

            if (this.isDropUp) {
                elHeight += parseInt(elStyle.marginTop);
                this.element.style.bottom = elHeight + 'px';
            } else {
                elHeight += parseInt(elStyle.marginBottom);
                this.element.style.top = elHeight + 'px';
            }

            if (this.isExtendedChildNavbar) {
                var rootNavbar = this.parentNavItem.parentNavbar;
                if (rootNavbar && rootNavbar.element) {
                    var destLeft = -el.offsetLeft;
                    var elWidth = rootNavbar.element.offsetWidth;

                    this.element.style.left = -el.offsetLeft + 'px';
                    this.element.style.minWidth = elWidth + 'px';
                }
            } else {
                var _elWidth = el.offsetWidth;
                this.element.style.minWidth = _elWidth + 'px';
            }
        }
    }, {
        key: 'getNavItems',
        value: function getNavItems() {
            var _this6 = this;

            return Array.from(this.element.children).filter(function (child) {
                return child.classList.contains('nav-item');
            }).map(function (navItemElement) {
                return new NavItem(navItemElement, _this6);
            });
        }
    }, {
        key: 'isVerticalNavbar',
        get: function get() {
            return this.options.direction === 'vertical';
        }
    }, {
        key: 'isDropUp',
        get: function get() {
            return this.options.dropup;
        }
    }, {
        key: 'isExtendedChildNavbar',
        get: function get() {
            return this.options.extendedChildNavbar;
        }
    }]);

    function Navbar(navbarElement, parentNavItem) {
        _classCallCheck(this, Navbar);

        var _this5 = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, navbarElement));

        _this5.parentNavItem = parentNavItem;

        var isVerticalNavbar = navbarElement.classList.contains('navbar-vertical');
        var isDropUp = navbarElement.classList.contains('dropup');
        var isExtendedChildNavbar = navbarElement.classList.contains('extended-child-navbar');

        _this5.options = {
            autoCollapse: true,
            direction: isVerticalNavbar ? 'vertical' : 'horizontal',
            dropup: isDropUp,
            extendedChildNavbar: isExtendedChildNavbar
        };

        _this5.childNavItems = _this5.getNavItems();
        _this5._setRoles();
        return _this5;
    }

    return Navbar;
}(NavBaseClass);

;

var MobileNavbar = function (_Navbar) {
    _inherits(MobileNavbar, _Navbar);

    _createClass(MobileNavbar, [{
        key: 'getNavItems',
        value: function getNavItems() {
            var _this8 = this;

            return Array.from(this.element.children).filter(function (child) {
                return child.classList.contains('nav-item');
            }).map(function (navItemElement) {
                return new MobileNavItem(navItemElement, _this8);
            });
        }
    }, {
        key: 'setOffset',
        value: function setOffset() {
            if (!this.containerElement) return;

            var el = this.containerElement;
            var elStyle = window.getComputedStyle(el);

            var elHeight = el.offsetHeight;
            var windowHeight = window.innerHeight;
            this.element.style.maxHeight = windowHeight - elHeight + 'px';

            if (this.isDropUp) {
                elHeight += parseInt(elStyle.marginTop);
                this.element.style.bottom = elHeight + 'px';
            } else {
                elHeight += parseInt(elStyle.marginBottom);
                this.element.style.top = elHeight + 'px';
            }
        }
    }, {
        key: 'setToggleElement',
        value: function setToggleElement() {
            if (this.toggleElement) {
                this.toggleElement.setAttribute('aria-haspopup', true);
                this.toggleElement.setAttribute('aria-expanded', false);
                this.toggleElement.addEventListener('click', this.clickEvent);
                NDSU.fullOverlayElement.addEventListener('click', this.closeMenu);
            }
        }
    }], [{
        key: '_clickEvent',
        value: function _clickEvent(e, inst) {
            e.preventDefault();

            if (inst.element.offsetHeight === 0) {
                inst.openMenu();
            } else {
                inst.closeMenu();
            }
            e.stopPropagation();
        }
    }, {
        key: '_openMenu',
        value: function _openMenu(inst) {
            NDSU.showOverlay();
            inst.element.classList.add('active');
            inst.toggleElement.setAttribute('aria-expanded', true);
            inst.setOffset();
        }
    }, {
        key: '_closeMenu',
        value: function _closeMenu(inst) {
            inst.element.classList.remove('active');
            inst.toggleElement.setAttribute('aria-expanded', false);
            NDSU.hideOverlay();
        }
    }]);

    function MobileNavbar(navbarElement, parentNavItem, navbarContainerElement, navbarToggleElement) {
        _classCallCheck(this, MobileNavbar);

        var _this7 = _possibleConstructorReturn(this, (MobileNavbar.__proto__ || Object.getPrototypeOf(MobileNavbar)).call(this, navbarElement, parentNavItem));

        _this7.containerElement = navbarContainerElement;
        _this7.toggleElement = navbarToggleElement;

        _this7.openMenu = function () {
            return MobileNavbar._openMenu(_this7);
        };
        _this7.closeMenu = function () {
            return MobileNavbar._closeMenu(_this7);
        };
        _this7.clickEvent = function (e) {
            return MobileNavbar._clickEvent(e, _this7);
        };

        _this7.setToggleElement();
        return _this7;
    }

    return MobileNavbar;
}(Navbar);

;

var NavItem = function (_NavBaseClass2) {
    _inherits(NavItem, _NavBaseClass2);

    _createClass(NavItem, [{
        key: '_getChildNavbar',
        value: function _getChildNavbar() {
            var childNavbarElement = this.element.querySelector('.child-navbar');
            return childNavbarElement ? new Navbar(childNavbarElement, this) : undefined;
        }
    }, {
        key: '_getLinkElement',
        value: function _getLinkElement() {

            var linkElement = Array.prototype.filter.call(this.element.children, function (child) {
                return child.classList.contains('nav-link');
            })[0];
            if (linkElement) return linkElement;

            var titleElement = this.element.querySelector('.child-section-title');
            if (!titleElement) return linkElement;

            var title = titleElement.innerText;
            linkElement = document.createElement('a');
            linkElement.href = '#';
            linkElement.innerText = title;
            linkElement.className = 'nav-link';

            this.element.insertBefore(linkElement, this.element.firstChild);

            return linkElement;
        }
    }, {
        key: '_setEventListeners',
        value: function _setEventListeners() {
            var _this10 = this;

            if (!this.parentNavbar.isExtendedChildNavbar) {
                this.element.addEventListener('focusin', this.focusInListener);
                this.element.addEventListener('focusout', this.focusOutListener);
                this.element.addEventListener('mouseenter', this.mouseInListener);
                this.element.addEventListener('mouseleave', this.focusOutListener);
            }

            this.element.addEventListener('keydown', function (e) {
                return NavItem._keysListener(e, _this10);
            });
        }
    }, {
        key: '_setRoles',
        value: function _setRoles() {
            this.setRole('presentation');
            if (this.linkElement) {
                this.linkElement.setAttribute('role', 'menuitem');
            }
            if (this.childNavbar && this.linkElement) {
                this.linkElement.setAttribute('aria-haspopup', true);
                var elId = this.linkElement.getAttribute('id');
                if (!elId) {
                    elId = 'parentLink_' + Math.random().toString(36).substr(2, 10);
                    this.linkElement.setAttribute('id', elId);
                }

                this.childNavbar.element.setAttribute('aria-labelledby', elId);
                this.linkElement.setAttribute('aria-expanded', false);
            }
        }
    }, {
        key: 'focus',
        value: function focus() {
            if (this.linkElement) {
                this.linkElement.focus();
            } else if (this.childNavbar && this.childNavbar.childNavItems.length) {
                this.childNavbar.childNavItems[0].focus();
            }
        }
    }, {
        key: 'open',
        value: function open() {
            NavItem._open(this);
        }
    }, {
        key: 'openChild',
        value: function openChild() {
            NavItem._open(this.childNavbar);
        }
    }, {
        key: 'close',
        value: function close() {
            NavItem._close(this);
        }
    }, {
        key: 'closeChild',
        value: function closeChild() {
            NavItem._close(this.childNavbar);
        }
    }, {
        key: 'closeTimeout',
        get: function get() {
            return 200;
        }
    }, {
        key: 'previousNavItem',
        get: function get() {
            return this.parentNavbar.getPreviousNavItem(this) || this.parentNavbar.parentNavItem;
        }
    }, {
        key: 'nextNavItem',
        get: function get() {
            return this.parentNavbar.getNextNavItem(this);
        }
    }, {
        key: 'parentNavItem',
        get: function get() {
            return this.parentNavbar.parentNavItem;
        }
    }, {
        key: 'firstChildNavItem',
        get: function get() {
            if (!this.childNavbar) return undefined;
            return this.childNavbar.childNavItems[0];
        }
    }, {
        key: 'leftNeighbor',
        get: function get() {
            var neighbor = void 0;
            if (!this.parentNavbar.isVerticalNavbar) {
                neighbor = this.previousNavItem;
            } else if (this.parentNavItem) {
                var parentItem = this.parentNavItem;
                neighbor = parentItem.parentNavbar.getPreviousNavItem(parentItem) || parentItem;
            }
            return neighbor;
        }
    }, {
        key: 'rightNeighbor',
        get: function get() {
            var neighbor = void 0;
            if (!this.parentNavbar.isVerticalNavbar) {
                neighbor = this.nextNavItem;
            } else if (this.parentNavItem) {
                var parentItem = this.parentNavItem;
                neighbor = parentItem.parentNavbar.getNextNavItem(parentItem) || parentItem;
            }

            return neighbor;
        }
    }, {
        key: 'downNeighbor',
        get: function get() {
            var neighbor = void 0;
            if (this.parentNavbar.isVerticalNavbar) {
                if (this.parentNavbar.isDropUp) {
                    neighbor = this.nextNavItem || this._parentNavItem;
                } else {
                    neighbor = this.nextNavItem;
                }
            } else {
                neighbor = this.firstChildNavItem;
            }
            return neighbor;
        }
    }, {
        key: 'upNeighbor',
        get: function get() {
            var neighbor = void 0;
            if (this.parentNavbar.isVerticalNavbar) {
                if (this.parentNavbar.isDropUp) {
                    neighbor = this.previousNavItem;
                } else {
                    neighbor = this.previousNavItem || this._parentNavItem;
                }
            } else if (this.parentNavbar.isExtendedChildNavbar && !this.parentNavbar.isDropUp) {
                neighbor = this.parentNavItem;
            }
            return neighbor;
        }
    }], [{
        key: '_open',
        value: function _open(inst) {
            if (!inst || !inst.element) return;
            inst.setOffset();
            inst.element.classList.add('active');
            if (inst.parentNavItem) {
                inst.parentNavItem.linkElement.setAttribute('aria-expanded', true);
            }
        }
    }, {
        key: '_close',
        value: function _close(inst) {
            if (!inst || !inst.element) return;
            inst.element.classList.remove('active');
            if (inst.parentNavItem) {
                inst.parentNavItem.linkElement.setAttribute('aria-expanded', false);
            }
        }
    }, {
        key: '_keysListener',
        value: function _keysListener(e, inst) {
            e.stopPropagation();
            var nextItem = void 0;
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
    }, {
        key: '_focusInEvent',
        value: function _focusInEvent(e, inst) {
            inst.openChild();
            if (inst.closeTimeoutinst) {
                clearTimeout(inst.closeTimeoutinst);
            }
        }
    }, {
        key: '_focusOutEvent',
        value: function _focusOutEvent(e, inst) {
            inst.closeTimeoutinst = setTimeout(function () {
                inst.closeChild();
            }, inst.closeTimeout);
        }
    }]);

    function NavItem(navItemElement, parentNavbar) {
        _classCallCheck(this, NavItem);

        var _this9 = _possibleConstructorReturn(this, (NavItem.__proto__ || Object.getPrototypeOf(NavItem)).call(this, navItemElement));

        _this9.parentNavbar = parentNavbar;
        _this9.linkElement = _this9._getLinkElement();
        _this9.childNavbar = _this9._getChildNavbar();

        _this9.closeTimeoutinst;
        _this9.focusInListener = function (e) {
            if (_this9.parentNavbar.options.autoCollapse) {
                NavItem._focusInEvent(e, _this9);
            }
        };

        _this9.mouseInListener = function (e) {
            return NavItem._focusInEvent(e, _this9);
        };

        _this9.focusOutListener = function (e) {
            return NavItem._focusOutEvent(e, _this9);
        };

        _this9._setEventListeners();
        _this9._setRoles();
        return _this9;
    }

    return NavItem;
}(NavBaseClass);

var MobileNavItem = function (_NavItem) {
    _inherits(MobileNavItem, _NavItem);

    _createClass(MobileNavItem, [{
        key: '_getChildNavbar',
        value: function _getChildNavbar() {
            var childNavbarElement = this.element.querySelector('.child-navbar');
            return childNavbarElement ? new MobileNavbar(childNavbarElement, this) : undefined;
        }
    }, {
        key: '_getLinkElement',
        value: function _getLinkElement() {
            var linkElement = Array.prototype.filter.call(this.element.children, function (child) {
                return child.classList.contains('nav-link');
            })[0];
            if (linkElement) return linkElement;

            var titleElement = this.element.querySelector('.child-section-title');
            if (!titleElement) return linkElement;

            var title = titleElement.innerText;
            linkElement = document.createElement('a');
            linkElement.href = '#';
            linkElement.innerText = title;
            linkElement.className = 'nav-link';

            this.element.insertBefore(linkElement, this.element.firstChild);

            return linkElement;
        }
    }, {
        key: '_setEventListeners',
        value: function _setEventListeners() {
            var _this12 = this;

            this.linkElement.addEventListener('click', function (e) {
                var childNavbar = _this12.childNavbar;
                if (!childNavbar) return;

                if (childNavbar.element.offsetHeight === 0) {
                    childNavbar.element.classList.add('active');
                    _this12.linkElement.classList.add('active');
                    _this12.linkElement.setAttribute('aria-expanded', true);
                } else {
                    childNavbar.element.classList.remove('active');
                    _this12.linkElement.classList.remove('active');
                    _this12.linkElement.setAttribute('aria-expanded', false);
                }
                e.preventDefault();
            });
        }
    }]);

    function MobileNavItem(navItemElement, parentNavbar) {
        _classCallCheck(this, MobileNavItem);

        var _this11 = _possibleConstructorReturn(this, (MobileNavItem.__proto__ || Object.getPrototypeOf(MobileNavItem)).call(this, navItemElement, parentNavbar));

        if (navItemElement.classList.contains('nav-item-home')) {
            _this11.linkElement.innerHTML = _this11.linkElement.innerText;
        }

        if (_this11.childNavbar) {
            var cloneElement = navItemElement.cloneNode();
            cloneElement.classList.remove('nav-item-haschild');

            var cloneLink = _this11.linkElement.cloneNode(true);
            cloneLink.setAttribute('id', '');
            cloneElement.appendChild(cloneLink);

            _this11.childNavbar.element.insertBefore(cloneElement, _this11.childNavbar.element.firstChild);
        }
        return _this11;
    }

    return MobileNavItem;
}(NavItem);

NDSU.mobileNavbars = Array.prototype.map.call(document.querySelectorAll('.navbar-mobile-container'), function (navbarContainer) {
    var mobileNavbar = navbarContainer.querySelector('.navbar-mobile:not(.child-navbar)');
    var navbarToggle = navbarContainer.querySelector('.navbar-toggle');

    if (!mobileNavbar || !navbarToggle || !navbarToggle.classList.contains('navbar-toggle')) return 0;

    Array.prototype.forEach.call(document.querySelectorAll('.navbar-mobilize:not(.child-navbar):not(.navbar-mobile)'), function (navbar) {
        Array.from(navbar.children).filter(function (child) {
            return child.classList.contains('nav-item') && !child.classList.contains('nav-item-mobile-hide');
        }).forEach(function (navItem) {
            mobileNavbar.appendChild(navItem.cloneNode(true));
        });
    });

    return new MobileNavbar(mobileNavbar, null, navbarContainer, navbarToggle);
});

NDSU.navbars = Array.prototype.map.call(document.querySelectorAll('.navbar:not(.child-navbar):not(.navbar-mobile)'), function (navbar) {
    return new Navbar(navbar);
});

var setPictureComponentSize = function setPictureComponentSize(img) {
    if (img.style.width) {
        img.style.width = "";
    }
    if (img.style.height) {
        img.style.height = "";
    }
    var imgParent = img.parentElement;

    var imgRatio = img.naturalWidth / img.naturalHeight;

    if (imgParent.clientHeight == 0 && imgParent.clientWidth == 0) {
        imgParent.style.height = img.naturalHeight + 'px';
        imgParent.style.width = img.naturalWidth + 'px';
    } else if (imgParent.clientHeight == 0) {
        imgParent.style.height = imgParent.clientWidth / imgRatio + 'px';
    } else if (imgParent.clientWidth == 0) {
        imgParent.style.width = imgParent.clientHeight * imgRatio + 'px';
    }

    var parentRatio = imgParent.clientWidth / imgParent.clientHeight;
    if (parentRatio >= imgRatio) {
        img.style.width = '100%';
    } else {
        img.style.height = '100%';
    }
};

Array.prototype.forEach.call(document.querySelectorAll('.img-wrapper.full-size-img'), function (picWrapper) {
    // if (picWrapper.offsetHeight > 0) return;
    var picImg = picWrapper.querySelector('img');
    if (!picImg) return;
    if (picImg.complete) {
        setPictureComponentSize(picImg);
    } else {
        picImg.addEventListener('load', function (imgLoadEvent) {
            return setPictureComponentSize(imgLoadEvent.currentTarget);
        });
    }
});

var StickyBar = function () {
    _createClass(StickyBar, null, [{
        key: '_scrollEvent',
        value: function _scrollEvent(e, obj) {
            var currentY = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;

            if (currentY > obj.offsetTop) {
                obj.element.classList.add('sticky-bar-on');
                obj.bufferElement.style.height = obj.element.offsetHeight + 'px';
            } else if (currentY <= obj.offsetTop - obj.element.offsetHeight) {
                obj.element.classList.remove('sticky-bar-on');
                obj.bufferElement.style.height = 0;
            }
        }
    }]);

    function StickyBar(baseElement) {
        var _this13 = this;

        _classCallCheck(this, StickyBar);

        this.element = baseElement;
        this.offsetTop = this.element.offsetTop;

        this.bufferElement = document.createElement('div');
        this.bufferElement.classList.add('sticky-buffer');

        var sizes = ['xl', 'lg', 'md', 'sm', 'xs'];
        sizes.forEach(function (size) {
            var stickyClass = 'sticky-' + size;
            if (_this13.element.classList.contains(stickyClass)) _this13.bufferElement.classList.add(stickyClass);
        });
        this.element.parentElement.insertBefore(this.bufferElement, this.element);

        window.addEventListener('scroll', function (e) {
            return StickyBar._scrollEvent(e, _this13);
        });
    }

    return StickyBar;
}();

;

NDSU.stickyBars = Array.prototype.map.call(document.querySelectorAll('.sticky-bar'), function (stickyBar) {
    return new StickyBar(stickyBar);
});