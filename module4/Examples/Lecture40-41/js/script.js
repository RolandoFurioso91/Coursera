var message = "in global";
console.log("global: message = " + message);

var a = function () {
	var message = "inside a";
	console.log("a: message = " + message);

	b()
}

function b () {
	console.log("b: message = " + message)
}

a()

/*if b is defined in global, it will take the message
from message defined in global
if b is defined inside a, then the message 
displayed will be the one defined in function a