$.prototype.attr = function (attrName, attrValue) {
    return attrValue === undefined ? this[0].getAttribute(attrName) : this.each(function (element) {
        element.setAttribute(attrName, attrValue);
    });
};

$.prototype.data = function (attrName, attrValue) {
    return this.attr("data-" + attrName, attrValue);
};
