//Event handling
document.addEventListener("DOMContentLoaded", function(event) {
  //Unobstruisve event binding
  document.querySelector("button").addEventListener("click", function() {
    
    //Call server to get the name
    $ajaxUtils.sendGetRequest("name.json", function (res) {
      var message = res.firstName + " " + res.lastname
      if (res.likeChineseFood) { //if it's true
        message += " likes Chinese Food"
      } 
      else {
        message += " doesn't likes Chinese Food"
      }
      message += " and uses "
      message += res.numberOfDisplays
      message += " displays for coding"
      
      var name = request.responseText
      //console.log(name)
      document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!"
    })
  })
})