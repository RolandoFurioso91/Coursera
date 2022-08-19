//HANDLING VALUES
function orderChickenWith(sideDish) {
	/*if (sideDish === undefined) { //in order to avoid getting undefined values
		//if sidedish is undefined, i'll get the string with "whatever"
		sideDish = "whatever"
	}*/
	//there's a shortcut for saying the above if statement. look below
	sideDish = sideDish || "whatever!" //first value is a boolean false, second is true
	console.log("Chicken with " + sideDish)
}

orderChickenWith("noodles")
orderChickenWith() //undefined value sidedish