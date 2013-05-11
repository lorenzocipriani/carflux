
module.exports.sync = function(method, model, options) {
	console.log("method: "+method);	
	console.log("model: "+typeof(model));
	
	var data = [{
    	"model": "1",
        "fuelConsumption": "4 l/100km",
        "fuelAutonomy": "150 km",
        "engineStatus": "ON",
        "batteryCharge": "95%"
   }];
       
   console.log("data: "+typeof(data)+" => "+data[0].model);
       
   // options.success(data);
   model.add(Alloy.createModel("engine",data));
   console.log("parse: "+model.length);
   model.trigger("change");
};
