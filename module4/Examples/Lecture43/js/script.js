//String Concatination

var string="Hello";
string += " World"; //string concatination shortcut
console.log(string + "!"); //string concatination without overwrite "string"


//Regular math operator +-*/
console.log((5+4)/3);
console.log(undefined / 5); //getting a NaN
function test1 (a) {
	console.log (a/5);
}
test1(); //getting a NaN because no value has been passed to the function

// Equality

var x = 4, y = 4;
if (x==y) {
	console.log("x=4 is equal to y=4");
}

x="4"; //x is a string, but because of js' 
//type coercion we will enter the if statement and get "x=4 is equal to y=4" as well. (even though x="4" is a string
//and y=4 is a number)
//why? because if compare to values that has different data type, js will convert one of them
//in order to have the same data type, then compare the values.
if (x==y) {
	console.log("x=4 is equal to y=4")
}
//if i don't want this kind of behavior, i need to use the Strict Equality (triple =)
if (x===y) {
	console.log("Strict: x='4' is equal to y=4");
}
else {
	console.log("Strict: x='4' is NOT equal to y=4");
}

//BOOLEAN EXPRESSION

// IF Statement (all false): all the things that IF Statement consider false
if (false || null || undefined || "" || 0 || NaN) { // "||" or operator
	console.log("This line won't ever execute");
}
else {
	console.log ("All false");
}

// IF Statement (all true)
if (true && "Hello" && 1 && -1 && "false") {
	console.log("All True");
}

//FOR LOOP
var sum=1;
for (var i=1; i<10; i++) {
	console.log(sum)
	sum=sum*i;
}
console.log("sum of 0 through 9 is: " + sum);