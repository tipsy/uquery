$.prototype.text = function (newTextContent) {
    return newTextContent === undefined ? this[0].textContent : this.each(function (element) {
        element.textContent = newTextContent;
    });
};

$.prototype.html = function (newHtmlContent) {
    return newHtmlContent === undefined ? this[0].innerHTML : this.each(function (element) {
        element.innerHTML = newHtmlContent;
    });
};
