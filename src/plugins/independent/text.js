$.prototype.text = function (newTextContent) {
    return newTextContent === undefined ? this[0].textContent : this.each(function (element) {
        element.textContent = newTextContent;
    });
};

