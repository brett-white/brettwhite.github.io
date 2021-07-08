//@codekit-prepend "_ga.js"

var hashAnchor;

function slideTo() {

    'use strict';

    var anchorDestination,
        anchorOffset = $('#nav').outerHeight();

    if (typeof hashAnchor !== 'undefined') {

        anchorDestination = $(hashAnchor).offset().top - anchorOffset;

        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: anchorDestination
        }, 1000, "easeInOutExpo");

    }

}

// function scrollEvents() {

//     'use strict';

//     var scrollTrigger;

//     function setScrollTrigger() {

//         scrollTrigger = Math.round($(window).height() * 0.8);
// //        $('body').next().css('top', scrollTrigger + 'px');
//     }

//     setScrollTrigger();

//     function setScrollStart() {

//         $('.page').each(function () {

//             var self = $(this),
//                 selfOffset = self.offset().top,
//                 scrollTop = $(window).scrollTop(),
//                 scrollStart = (selfOffset - scrollTop);

//             if (scrollStart <= scrollTrigger) {
//                 self.removeClass('below').addClass('above');
//             } else {
//                 self.removeClass('above').addClass('below');
//             }

//         });

//     }

//     setScrollStart();

//     function initScrollEvents() {

//         $('.reveal').each(function () {

//             var self = $(this),
//                 parent = self.parent(),
//                 selfOffset = Math.round(parent.offset().top),
//                 scrollTop = $(window).scrollTop(),
//                 selfTop = (selfOffset - scrollTop);

//             if (selfTop <= scrollTrigger) {
//                 if (!self.hasClass('fadeIn')) {
//                     self.addClass('fadeIn');
//                 }
//             } else {
//                 self.removeClass('fadeIn');
//             }

//         });

//         $('.page').each(function () {

//             var self = $(this),
//                 selfID = self.attr('id'),
//                 selfOffset = Math.round(self.offset().top),
//                 scrollTop = $(window).scrollTop(),
//                 scrollEnd = (selfOffset - scrollTop);

//             if (self.hasClass('below') && scrollEnd <= scrollTrigger) {
//                 self.addClass('is-current');
//                 self.prev().removeClass('is-current');
//                 $('body').removeClass().addClass('is-' + selfID);
//                 setScrollStart();
//             } else if (self.hasClass('above') && scrollEnd > scrollTrigger) {
//                 self.removeClass('is-current');
//                 self.prev().addClass('is-current');
//                 var prevID = self.prev().attr('id');
//                 $('body').removeClass().addClass('is-' + prevID);
//                 setScrollStart();
//             }

//         });
//     }

//     $(window).scroll(initScrollEvents);

//     $(window).resize(setScrollTrigger);

// }


function globalFunctions() {

    'use strict';

    if (window.location.hash) {

        hashAnchor = window.location.hash;
        $(window).scrollTop(0);
        // scrollEvents();

        setTimeout(function () {

            slideTo();

        }, 300);

    } else {

        $(window).scrollTop(0);

    }

}

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

$(function () {

    'use strict';

    $("body").delegate(".slide a, a.slide", "click", function (e) {

        hashAnchor = $(this).prop("hash");
        _gaq.push(['_trackPageview', hashAnchor]);
        // console.log(hashAnchor);
        slideTo();
        e.preventDefault();

    });
});

window.onload = function() {

    'use strict';

    globalFunctions();

    // var elements = document.getElementsByClassName('typewrite');
    // for (var i=0; i<elements.length; i++) {
    //     var toRotate = elements[i].getAttribute('data-type');
    //     var period = elements[i].getAttribute('data-period');
    //     if (toRotate) {
    //       new TxtType(elements[i], JSON.parse(toRotate), period);
    //     }
    // }
    // INJECT CSS
    // var css = document.createElement("style");
    // css.type = "text/css";
    // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    // document.body.appendChild(css);

    var pageURL = window.location.href;
    //console.log(pageURL);
    _gaq.push(['_trackPageview', pageURL]);

    (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
};