//Functions are First-Class Data Types
//Functions are OBJECTS

function multiply(x,y) {
	return x*y
}

console.log(multiply(5,3));
//treat the function as an object defining properties
multiply.version = "v.1.0.0";
console.log(multiply.version)

//Function factory
function makeMultiplier(multiplier) {
	var myFunc = function(x) {
		return multiplier*x
	};	
	return myFunc
}

var multiplyBy3 = makeMultiplier(3)
console.log(multiplyBy3(10))

var doubleAll = makeMultiplier(2)
console.log(doubleAll(100))

//Passing functions as argument
function do0Operation(x, operation) {
	return operation(x)
}

var result = do0Operation(5, multiplyBy3)
console.log(result)