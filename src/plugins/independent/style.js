$.fn.hide = function () {
    return this.each(function (element) {
        element.style.display = "none";
    });
};

$.fn.show = function () {
    return this.each(function (element) {
        element.style.display = "";
    });
};
