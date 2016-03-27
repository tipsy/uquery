$.fn.addClass = function (className) {
    return this.each(function (element) {
        element.classList.add(className)
    });
};

$.fn.removeClass = function (className) {
    return this.each(function (element) {
        element.classList.remove(className)
    });
};

$.fn.toggleClass = function (className) {
    return this.each(function (element) {
        element.classList.toggle(className)
    });
};

$.fn.hasClass = function (className) {
    return this[0].classList.contains(className);
};
