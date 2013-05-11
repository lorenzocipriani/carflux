
module.exports.sync = function(method, model, options) {	
	var url = "http://10.0.0.10";
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {	         
         	var data = JSON.parse(this.responseText);
	        model.reset();
		   	model.add(Alloy.createModel("engine",data));
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         // alert('error');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send();
};
