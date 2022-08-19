/*function test() {
  console.log(this)
  this.myName = "Luca"
}

test()
console.log(window.myName)*/

//Function constructors
/*
function Circle (radius) {
  console.log(this)
  this.radius = radius
}
//When I invoke a function together 
//with the new keyword,
//the JavaScript engine makes "this"
// point to the object itself that got created, which is the Circle
var myCircle = new Circle(10) //new Objcet
console.log(myCircle)*/

function Circle (radius) {
  this.radius = radius
/*  this.getArea = function () {
    return Math.PI * Math.pow(this.radius,2)
  }*/
}

//with the word prototype, the property will be created just once, not in every single instance of that object
Circle.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radius,2)
  }

var myCircle = new Circle(10)
console.log(myCircle)