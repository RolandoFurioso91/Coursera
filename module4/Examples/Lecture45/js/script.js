//OBJECT CREATION
//first way
var company = new Object();
company.name = "Facebook"
company.ceo = new Object()
company.ceo.firstName = "Mark"
company.ceo.favColor = "blue"

console.log(company)
console.log("Company CEO name is: " + company.ceo.firstName)
console.log(company["name"])
company["stock of company"] = 110

//what's inside square bracket can be a variable either
//var stockPropName = "stock of company"
//company[stockPropName] = 110 
//console.log("Stock price is: " + company[StockPropName])
//i'll get the same result

console.log("Stock price is: " + company["stock of company"])

//second way (better): object literal
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue" //NO COMMA FOR THE LAST VALUE BEFORE CURLY BRAKETS
	},
	$Stock: 110
}

console.log(facebook)