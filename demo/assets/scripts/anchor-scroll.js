var buffer = $(".header").height(),
    easing = "easeInOutExpo",
    speed = 500,
    destination,
    anchor;
    
function slideTo(anchor) {
    
    'use strict';

    // console.log(anchor);
    destination = $(anchor).offset().top - buffer;

    $("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, speed, easing);

}

jQuery(function () {

    'use strict';

    $("a.slideTo, .slideTo a").click(function(e) {

        anchor = $(this).prop("hash");
        slideTo(anchor);
        e.preventDefault();

    });
    
});