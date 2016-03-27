$.prototype.siblings = function () {
    var element = this[0];
    return [].filter.call(element.parentNode.children, function (child) {
        return child !== element;
    });
};

