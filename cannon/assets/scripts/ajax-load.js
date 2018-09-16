function loadFunctions() {

    'use strict';

}

jQuery(function () {

    /*global console:true */

    'use strict';

    var timeDelay = 1000,
        loadContainer = jQuery("#container"),
        thisHref;

    function loadComplete() {

        loadContainer.fadeIn(timeDelay);
        jQuery(".preloader").fadeOut(timeDelay);

    }

    function loadContent(href) {

        console.log(href);

        if (Modernizr.history) {

            jQuery(".preloader").fadeIn(timeDelay);

            loadContainer.find("#loader");

            loadContainer.fadeOut(timeDelay, function () {

                loadContainer.load(href + " #loader", null, function () {

                    loadComplete();
                    loadFunctions();

                });

            });

        } else {

            loadComplete();
            loadFunctions();

        }

    }

    jQuery(window).bind("load", function () {

        jQuery(".logo, .nav a").addClass("load");

        jQuery("body").delegate("a.load", "click", function (e) {

            thisHref = jQuery(this).attr("href");

            history.pushState(null, null, thisHref);
            loadContent(thisHref);

            e.preventDefault();

            jQuery(window).bind('popstate', function () {

                thisHref = location.pathname;
                loadContent(thisHref);

            });

        });

        jQuery("body").delegate("a.load", "click", function () {

            jQuery("body").attr("id", "");

            jQuery("a.load").removeClass("is-current");
            jQuery(this).addClass("is-current");
            jQuery("a.load[href='" + thisHref + "']").addClass("is-current");

        });

    });

});