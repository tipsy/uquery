/*
 * uq.js - a micro library covering the most basic jQuery functionality
 *
 * μQuery (micro query) is a tiny library meant to be included inline in the <head> tag.
 * It was created for use in projects that only use JavaScript for nice-to-have
 * functionality, and where all JavaScript is inlined (max 2-3kb per page).
 *
 * Copyright (c) 2016 David Åse
 */

// "!" saves 1 byte over "()"
!function () {

    // Declare the library
    $ = function (seldom) { //selector or dom element
        return new MicroQuery(seldom);
    };

    // If it's an element (has node-type), we merge "this" and the element.
    // Otherwise, we assume it's a string and merge "this" and the result of a query-selection
    function MicroQuery(seldom) { //selector or dom element
        [].push.apply(this, seldom.nodeType ? [seldom] : document.querySelectorAll(seldom));
    }

    // Core functions
    $.prototype = MicroQuery.prototype = $.fn = {

        on: function (eventName, func) {
            return this.each(function (element) {
                element.addEventListener(eventName, func)
            });
        }

        , each: function (func, element) {
            [].forEach.call(this, func, element);
            return this;
        }

        , splice: [].splice // turns object into array-like object

    }
}();
