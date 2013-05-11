function Controller() {
    function __alloyId13() {
        var models = __alloyId12.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId6 = models[i];
            __alloyId6.__transform = {};
            var __alloyId7 = Ti.UI.createTableViewRow({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 18,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "right",
                model_id: "undefined" != typeof __alloyId6.__transform["model"] ? __alloyId6.__transform["model"] : __alloyId6.get("model")
            });
            rows.push(__alloyId7);
            var __alloyId8 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId6.__transform["fuelConsumption"] ? __alloyId6.__transform["fuelConsumption"] : __alloyId6.get("fuelConsumption")
            });
            __alloyId7.add(__alloyId8);
            var __alloyId9 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId6.__transform["fuelAutonomy"] ? __alloyId6.__transform["fuelAutonomy"] : __alloyId6.get("fuelAutonomy")
            });
            __alloyId7.add(__alloyId9);
            var __alloyId10 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId6.__transform["engineStatus"] ? __alloyId6.__transform["engineStatus"] : __alloyId6.get("engineStatus")
            });
            __alloyId7.add(__alloyId10);
            var __alloyId11 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId6.__transform["batteryCharge"] ? __alloyId6.__transform["batteryCharge"] : __alloyId6.get("batteryCharge")
            });
            __alloyId7.add(__alloyId11);
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
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 18,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "left",
        id: "engineTable"
    });
    $.__views.__alloyId5.add($.__views.engineTable);
    var __alloyId12 = Alloy.Collections["engine"] || engine;
    __alloyId12.on("fetch destroy change add remove reset", __alloyId13);
    $.__views.__alloyId4 = Ti.UI.createTab({
        window: $.__views.__alloyId5,
        title: "Dashboard",
        icon: "nav_car.png",
        id: "__alloyId4"
    });
    $.__views.index.addTab($.__views.__alloyId4);
    $.__views.__alloyId15 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Trips",
        id: "__alloyId15"
    });
    var __alloyId16 = [];
    $.__views.carfluxMap = Ti.Map.createAnnotation({
        id: "carfluxMap",
        latitude: "52.45543",
        longitude: "13.52501",
        title: "Carflux AngelHack",
        subtitle: "Berlin",
        pincolor: Titanium.Map.ANNOTATION_RED,
        myid: "1"
    });
    __alloyId16.push($.__views.carfluxMap);
    $.__views.mapview = Ti.Map.createView({
        annotations: __alloyId16,
        id: "mapview",
        ns: Ti.Map,
        animate: "true",
        regionFit: "true",
        userLocation: "true",
        mapType: Ti.Map.STANDARD_TYPE
    });
    $.__views.__alloyId15.add($.__views.mapview);
    doClick ? $.__views.mapview.addEventListener("click", doClick) : __defers["$.__views.mapview!click!doClick"] = true;
    $.__views.__alloyId14 = Ti.UI.createTab({
        window: $.__views.__alloyId15,
        title: "Trips",
        icon: "nav_map.png",
        id: "__alloyId14"
    });
    $.__views.index.addTab($.__views.__alloyId14);
    $.__views.__alloyId18 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Parking",
        id: "__alloyId18"
    });
    $.__views.__alloyId19 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Start",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Stop",
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Pay",
        id: "__alloyId21"
    });
    $.__views.__alloyId18.add($.__views.__alloyId21);
    $.__views.__alloyId17 = Ti.UI.createTab({
        window: $.__views.__alloyId18,
        title: "Parking",
        icon: "nav_friends.png",
        id: "__alloyId17"
    });
    $.__views.index.addTab($.__views.__alloyId17);
    $.__views.__alloyId23 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Highscores",
        id: "__alloyId23"
    });
    $.__views.__alloyId24 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Name 1",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Name 2",
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Name 3",
        id: "__alloyId26"
    });
    $.__views.__alloyId23.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Name 4",
        id: "__alloyId27"
    });
    $.__views.__alloyId23.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Name 5",
        id: "__alloyId28"
    });
    $.__views.__alloyId23.add($.__views.__alloyId28);
    $.__views.__alloyId22 = Ti.UI.createTab({
        window: $.__views.__alloyId23,
        title: "Highscores",
        icon: "nav_friends.png",
        id: "__alloyId22"
    });
    $.__views.index.addTab($.__views.__alloyId22);
    $.__views.__alloyId30 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Profile",
        id: "__alloyId30"
    });
    $.__views.__alloyId31 = Ti.UI.createScrollView({
        disableBounce: "false",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.profileImage = Ti.UI.createImageView({
        width: 320,
        height: 606,
        id: "profileImage",
        image: "/profile.jpg"
    });
    $.__views.__alloyId31.add($.__views.profileImage);
    $.__views.__alloyId29 = Ti.UI.createTab({
        window: $.__views.__alloyId30,
        title: "Profile",
        icon: "nav_flux.png",
        id: "__alloyId29"
    });
    $.__views.index.addTab($.__views.__alloyId29);
    $.__views.__alloyId33 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Parking",
        id: "__alloyId33"
    });
    $.__views.__alloyId34 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Accident",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Engine",
        id: "__alloyId35"
    });
    $.__views.__alloyId33.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Fuel",
        id: "__alloyId36"
    });
    $.__views.__alloyId33.add($.__views.__alloyId36);
    $.__views.__alloyId32 = Ti.UI.createTab({
        window: $.__views.__alloyId33,
        title: "Alarms",
        icon: "nav_friends.png",
        id: "__alloyId32"
    });
    $.__views.index.addTab($.__views.__alloyId32);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId12.off("fetch destroy change add remove reset", __alloyId13);
    };
    _.extend($, $.__views);
    $.index.open();
    var engineData = Alloy.Collections.instance("engine");
    engineData.on("change", function() {
        console.log("change: " + engineData.length);
        engineData.length > 0 && console.log("at: " + engineData.at(engineData.length - 1).get("fuelConsumption"));
    });
    engineData.push(Alloy.createModel("engine", {
        model: "1",
        fuelConsumption: "4 l/100km",
        fuelAutonomy: "150 km",
        engineStatus: "ON",
        batteryCharge: "95%"
    }));
    engineData.fetch();
    console.log("length: " + engineData.length);
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