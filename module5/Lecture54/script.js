//DOM Manipulation (Document Object Module)
//Document object contains all the html code

document.addEventListener("DOMContentLoaded",function (event) {

  function SayHello(event) {
    this.textContent = "Said it"
    //to store the value in a variable a retrieve it in a new part of the website
    var name = document.getElementById("name").value
    var message = "<h2>Hello " + name + "!</h2>"

    document
    .getElementById("content")
    .innerHTML = message

    if (name === "student") {
      var title = document.querySelector("#title").textContent;
      title += " & Lovin' it" 
      document.querySelector("h1").textContent = title
    }
  }

  //Unobstrusive event binding
  document.querySelector("button")
  .addEventListener("click",SayHello)

}
)

//addEventListener: a command that "listen" for the event
//in the "". when that event happens, it trigger the function written 
//afterwards

//another method to call the function SayHello
//document.querySelector("button").onclick = SayHello
