exports.definition = {
	config: {

		columns: {
			"model": "String",
            "fuelConsumption": "String",
            "fuelAutonomy": "String",
            "engineStatus": "String",
            "batteryCharge": "String"
        },
        defaults: {
        	"model": "1",
            "fuelConsumption": "4 l/100km",
            "fuelAutonomy": "150 km",
            "engineStatus": "ON",
            "batteryCharge": "95%"
        },
        adapter: {
			type: "device",
			collection_name: "engine"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		
		return Collection;
	}
}

