$.prototype.ready = function (func) {
    if (document.readyState !== "loading") {
        func();
    } else {
        document.addEventListener("DOMContentLoaded", func);
    }
};
