
$.index.open();

var engineData = Alloy.Collections.instance("engine");
engineData.fetch();

setInterval(function() {
	engineData.fetch();
},1000);

function doClick(evt){
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);

    // Check for all of the possible names that clicksouce
    // can report for the left button/view.
    if (evt.clicksource == 'leftButton' || evt.clicksource == 'leftPane' ||
        evt.clicksource == 'leftView') {
        Ti.API.info("Annotation " + evt.title + ", left button clicked.");
    }
};

function accessPayPal() {
	
	var auth = 'ATzTGhDAwwjkcPBrRFQvOxadhnavDGkMqg9Aa6LAfs0kvSB7AjunQgWBpRpT:EMSpbxA7TUDD7cfpT21BrLkgJh1Kh_lmdmskUYkm4EqPO21X31RVKFG-vVSp';
	var xhr = Ti.Network.createHTTPClient();

	xhr.onload = function(e) {
	//handle response, which at minimum will be an HTTP status code
	};
	
	xhr.open('POST','https://' + auth + '@api.sandbox.paypal.com/v1/oauth2/token');
	xhr.send({
		Accept:'application/json',
		Accept_Language:'en_US',
		grant_type:'client_credentials'
	});		
}

function doPay(){
	
	var xhr = Ti.Network.createHTTPClient();

	xhr.onload = function(e) {
	//handle response, which at minimum will be an HTTP status code
	};

	xhr.open('POST','http://www.myblog.com/post.php');
	xhr.send({
		title:'My awesome blog',
		body:'Today I met Susy at the laundromat.  Best day EVAR\!'
	});		
}

// These parameters can also be defined in the TSS file.
$.mapview.annotations = [$.carfluxMap];
$.mapview.region = {latitude:52.45543, longitude:13.52501, latitudeDelta:0.01, longitudeDelta:0.01};

$.index.addEventListener('close', function() {
    $.destroy();
});