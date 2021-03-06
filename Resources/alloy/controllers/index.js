function Controller() {
    function __alloyId34() {
        var models = __alloyId33.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId7 = models[i];
            __alloyId7.__transform = {};
            var __alloyId8 = Ti.UI.createTableViewSection({});
            rows.push(__alloyId8);
            var __alloyId10 = Ti.UI.createTableViewRow({
                width: "100%",
                height: Ti.UI.SIZE,
                color: "#000",
                textAlign: "right",
                layout: "horizontal"
            });
            __alloyId8.add(__alloyId10);
            var __alloyId12 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "Consumption: "
            });
            __alloyId10.add(__alloyId12);
            var __alloyId14 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId7.__transform["fuelConsumption"] ? __alloyId7.__transform["fuelConsumption"] : __alloyId7.get("fuelConsumption")
            });
            __alloyId10.add(__alloyId14);
            var __alloyId16 = Ti.UI.createTableViewRow({
                width: "100%",
                height: Ti.UI.SIZE,
                color: "#000",
                textAlign: "right",
                layout: "horizontal"
            });
            __alloyId8.add(__alloyId16);
            var __alloyId18 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "Autonomy: "
            });
            __alloyId16.add(__alloyId18);
            var __alloyId20 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId7.__transform["fuelAutonomy"] ? __alloyId7.__transform["fuelAutonomy"] : __alloyId7.get("fuelAutonomy")
            });
            __alloyId16.add(__alloyId20);
            var __alloyId22 = Ti.UI.createTableViewRow({
                width: "100%",
                height: Ti.UI.SIZE,
                color: "#000",
                textAlign: "right",
                layout: "horizontal"
            });
            __alloyId8.add(__alloyId22);
            var __alloyId24 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "Status: "
            });
            __alloyId22.add(__alloyId24);
            var __alloyId26 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId7.__transform["engineStatus"] ? __alloyId7.__transform["engineStatus"] : __alloyId7.get("engineStatus")
            });
            __alloyId22.add(__alloyId26);
            var __alloyId28 = Ti.UI.createTableViewRow({
                width: "100%",
                height: Ti.UI.SIZE,
                color: "#000",
                textAlign: "right",
                layout: "horizontal"
            });
            __alloyId8.add(__alloyId28);
            var __alloyId30 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "Battery: "
            });
            __alloyId28.add(__alloyId30);
            var __alloyId32 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId7.__transform["batteryCharge"] ? __alloyId7.__transform["batteryCharge"] : __alloyId7.get("batteryCharge")
            });
            __alloyId28.add(__alloyId32);
        }
        $.__views.engineTable.setData(rows);
    }
    function doClick(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
        ("leftButton" == evt.clicksource || "leftPane" == evt.clicksource || "leftView" == evt.clicksource) && Ti.API.info("Annotation " + evt.title + ", left button clicked.");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("engine");
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId5 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Dashboard",
        id: "__alloyId5"
    });
    $.__views.engineTable = Ti.UI.createTableView({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: "left",
        id: "engineTable"
    });
    $.__views.__alloyId5.add($.__views.engineTable);
    var __alloyId33 = Alloy.Collections["engine"] || engine;
    __alloyId33.on("fetch destroy change add remove reset", __alloyId34);
    $.__views.__alloyId4 = Ti.UI.createTab({
        window: $.__views.__alloyId5,
        title: "Dashboard",
        icon: "nav_car.png",
        id: "__alloyId4"
    });
    $.__views.index.addTab($.__views.__alloyId4);
    $.__views.__alloyId36 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Trips",
        id: "__alloyId36"
    });
    var __alloyId37 = [];
    $.__views.carfluxMap = Ti.Map.createAnnotation({
        id: "carfluxMap",
        latitude: "52.45543",
        longitude: "13.52501",
        title: "Carflux AngelHack",
        subtitle: "Berlin",
        pincolor: Titanium.Map.ANNOTATION_RED,
        myid: "1"
    });
    __alloyId37.push($.__views.carfluxMap);
    $.__views.mapview = Ti.Map.createView({
        annotations: __alloyId37,
        id: "mapview",
        ns: Ti.Map,
        animate: "true",
        regionFit: "true",
        userLocation: "true",
        mapType: Ti.Map.STANDARD_TYPE
    });
    $.__views.__alloyId36.add($.__views.mapview);
    doClick ? $.__views.mapview.addEventListener("click", doClick) : __defers["$.__views.mapview!click!doClick"] = true;
    $.__views.__alloyId35 = Ti.UI.createTab({
        window: $.__views.__alloyId36,
        title: "Trips",
        icon: "nav_map.png",
        id: "__alloyId35"
    });
    $.__views.index.addTab($.__views.__alloyId35);
    $.__views.__alloyId39 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Parking",
        layout: "vertical",
        id: "__alloyId39"
    });
    $.__views.__alloyId40 = Ti.UI.createButton({
        title: "Start",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createButton({
        title: "Stop",
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createButton({
        title: "Pay",
        id: "__alloyId42"
    });
    $.__views.__alloyId39.add($.__views.__alloyId42);
    $.__views.__alloyId38 = Ti.UI.createTab({
        window: $.__views.__alloyId39,
        title: "Parking",
        icon: "nav_friends.png",
        id: "__alloyId38"
    });
    $.__views.index.addTab($.__views.__alloyId38);
    $.__views.__alloyId44 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Highscores",
        id: "__alloyId44"
    });
    $.__views.__alloyId45 = Ti.UI.createScrollView({
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createImageView({
        width: 320,
        height: 606,
        image: "/carflux_app_ct_1-05.jpg",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId43 = Ti.UI.createTab({
        window: $.__views.__alloyId44,
        title: "Highscores",
        icon: "nav_friends.png",
        id: "__alloyId43"
    });
    $.__views.index.addTab($.__views.__alloyId43);
    $.__views.__alloyId48 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Profile",
        id: "__alloyId48"
    });
    $.__views.__alloyId49 = Ti.UI.createScrollView({
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.profileImage = Ti.UI.createImageView({
        width: 320,
        height: 606,
        id: "profileImage",
        image: "/profile.jpg"
    });
    $.__views.__alloyId49.add($.__views.profileImage);
    $.__views.__alloyId47 = Ti.UI.createTab({
        window: $.__views.__alloyId48,
        title: "Profile",
        icon: "nav_flux.png",
        id: "__alloyId47"
    });
    $.__views.index.addTab($.__views.__alloyId47);
    $.__views.__alloyId51 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Alarms",
        id: "__alloyId51"
    });
    $.__views.__alloyId52 = Ti.UI.createScrollView({
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createImageView({
        width: 320,
        height: 606,
        image: "/carflux_app_ct_1-01.jpg",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId50 = Ti.UI.createTab({
        window: $.__views.__alloyId51,
        title: "Alarms",
        icon: "nav_friends.png",
        id: "__alloyId50"
    });
    $.__views.index.addTab($.__views.__alloyId50);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId33.off("fetch destroy change add remove reset", __alloyId34);
    };
    _.extend($, $.__views);
    $.index.open();
    var engineData = Alloy.Collections.instance("engine");
    engineData.fetch();
    setInterval(function() {
        engineData.fetch();
    }, 1e3);
    $.mapview.annotations = [ $.carfluxMap ];
    $.mapview.region = {
        latitude: 52.45543,
        longitude: 13.52501,
        latitudeDelta: .01,
        longitudeDelta: .01
    };
    $.index.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.mapview!click!doClick"] && $.__views.mapview.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;