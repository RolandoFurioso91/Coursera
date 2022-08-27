(function (global) {
	//Set up a namespace for our utulity
	var ajaxUtils={}

	//Returns an HTTP request object
	function getRequestObject() {
		if (window.XMLHttpRequest) {
			return (new XMLHttpRequest())
		}
		else if (window.ActiveXObject) {
			//for very old IE browsers (optional)
			return (new ActiveXObject("Microsoft.XMLHTTP"))
		}
		else {
			global.alert("Ajax is not supported")
			return(null)
		}
	}

//to make the variable more global

//var myhandler = null

// Make an Ajax GET request to requestURL
	ajaxUtils.sendGetRequest = function(requestUrl, responseHandler) {
		var request = getRequestObject()
		//myhandler = responseHandler
		//request.onreadystatechange = HandleResponse
		request.onreadystatechange = function () {
			handleResponse(request, responseHandler)
		}
		request.open("GET", requestUrl, true)
		request.send(null) //for POST only
	}

//Only calls user provided "responseHandler"
//function if response is ready and not an error
	function handleResponse(request, responseHandler) {
		if ((request.readyState == 4) && (request.status==200)) {
			responseHandler(request)
		}
	}

//Expose utility to the global objcet
global.$ajaxUtils = ajaxUtils

})(window)