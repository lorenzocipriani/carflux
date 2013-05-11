
module.exports.sync = function(method, model, options) {
	console.log("method: "+method);	
	console.log("model: "+typeof(model));
	
	/*var data = [{
    	"model": "1",
        "fuelConsumption": "4 l/100km",
        "fuelAutonomy": "150 km",
        "engineStatus": "ON",
        "batteryCharge": "95%"
   	}];*/
	
	var url = "http://10.0.0.10";
	 var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
	         
         	var data = JSON.parse(e.responseText);
	         console.log("data: "+typeof(data));    
		   	// options.success(data);
		   	model.add(Alloy.createModel("engine",data));
		   	console.log("parse: "+model.length);
		   	model.trigger("change");
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send();
};
