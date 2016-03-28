$.ajax = function (config) {
    var request = new XMLHttpRequest();
    request.open(config.type, config.url, true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            if (config.done instanceof Function) {
                config.done(this);
            }
        } else { // reached endpoint, but bad response
            if (config.fail instanceof Function) {
                config.fail(this);
            }
        }
    };
    request.onerror = function () { // didn't reach endpoint
        if (config.fail instanceof Function) {
            config.fail(this);
        }
    };
    request.send();
};

$.get = function (url, callback) {
    $.ajax({
        type: "GET",
        url: url,
        done: callback
    });
};
