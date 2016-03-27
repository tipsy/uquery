$.prototype.is = function (selector) {
    var element = this[0];
    return [].some.call(element.parentNode.querySelectorAll(selector), function (node) {
        return node === element;
    });
};
