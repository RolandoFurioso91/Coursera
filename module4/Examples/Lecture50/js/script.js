//ARRAYS start with index 0 as vbs
var array = new Array()
array[0] = "Luca"
array[1] = 2
array[2] = function (name) {
  console.log("hello "+name)
}
array[3] = {course: "HTML, CSS & JS"}

console.log(array)
console.log(array[1])
array[2](array[0])

//Short hand array creation
var names = ["Luca", "Andrea", "Mattia"]
console.log(names)

for (var i=0; i < names.length; i++) {
  console.log("Hello " + names[i])
}
/*
names[100] = "Jim"

for (var i=0; i < names.length; i++) {
  console.log("Hello " + names[i])
}*/

//FOR LOOP FOR OBJECT'S PROPERTIES
var myObj = {
  name: "Luca",
  course: "HTML/CSS/JS",
  platform: "Coursera"
}

for (var prop in myObj) {  //for every property in the objcet i created
    console.log(prop + ": " + myObj[prop])
}

//in case of array, this for loop will loop over every properties
for (var name in names) {
  console.log("Hello "+names[name])
}