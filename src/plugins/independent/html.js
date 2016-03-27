$.prototype.html = function (newHtmlContent) {
    return newHtmlContent === undefined ? this[0].innerHTML : this.each(function (element) {
        element.innerHTML = newHtmlContent;
    });
};
