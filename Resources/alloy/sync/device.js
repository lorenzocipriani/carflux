module.exports.sync = function(method, model) {
    console.log("method: " + method);
    console.log("model: " + typeof model);
    var url = "http://10.0.0.10";
    var client = Ti.Network.createHTTPClient({
        onload: function(e) {
            Ti.API.info("Received text: " + this.responseText);
            var data = JSON.parse(e.responseText);
            console.log("data: " + typeof data);
            model.add(Alloy.createModel("engine", data));
            console.log("parse: " + model.length);
            model.trigger("change");
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("error");
        },
        timeout: 5e3
    });
    client.open("GET", url);
    client.send();
};