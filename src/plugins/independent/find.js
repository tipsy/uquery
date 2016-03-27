$.prototype.find = function (selector) {
    return $(this[0].querySelector(selector));
};
