//DOM Manipulation (Document Object Module)
//Document object contains all the html code

//console.log(document.getElementById("title"))

//console.log(document instanceof HTMLDocument)

function SayHello() {
  //to print the name in the console
  /*console.log(
    document.getElementById("name").value
    )*/
  //to store the value in a variable a retrieve it in another already existing element of the website
  var name = document.getElementById("name").value
  var message = "Hello " + name + "!"

  document.getElementById("content").textContent = message
}

function SayHello() {
  //to print the name in the console
  /*console.log(
    document.getElementById("name").value
    )*/
  //to store the value in a variable a retrieve it in a new part of the website
  var name = document.getElementById("name").value
  var message = "<h2>Hello " + name + "!</h2>"

  document
  .getElementById("content")
  .innerHTML = message

  if (name === "student") {
    //var title = 
    //document.getElementById("title") 1 method
    var title = document.querySelector("#title").textContent;
    title += " & Lovin' it" 
    document.querySelector("h1").textContent = title

  }
}