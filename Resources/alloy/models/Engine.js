exports.definition = {
    config: {
        columns: {
            model: "String",
            fuelConsumption: "String",
            fuelAutonomy: "String",
            engineStatus: "String",
            batteryCharge: "String"
        },
        defaults: {
            model: "1",
            fuelConsumption: "4 l/100km",
            fuelAutonomy: "150 km",
            engineStatus: "ON",
            batteryCharge: "95%"
        },
        adapter: {
            type: "sql",
            collection_name: "engine"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("engine", exports.definition, []);

collection = Alloy.C("engine", exports.definition, model);

exports.Model = model;

exports.Collection = collection;