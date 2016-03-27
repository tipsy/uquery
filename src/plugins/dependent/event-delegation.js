// Depends on $(...).is()

$.prototype.delegate = function (selector, eventName, func) {
    return this.each(function (element) {
        element.addEventListener(eventName, function (event) {
            var target = event.target;
            while (target !== document && !$(target).is(selector)) {
                target = target.parentNode;
            }
            if (target !== document) { // target is selector
                func();
            }
        });
    });
};
