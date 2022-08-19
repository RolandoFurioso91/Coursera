var literalCircle = { //new Object
  radius:10,

  getArea: function() {
    var self = this //
    console.log(this) //isn't pointing to the global object, but it's referring the object that has been created
   
    var increaseRadius = function () {
      self.radius = 20
    }

    increaseRadius() //we'll see still radius=10 because when we have nested function, as in this case, the nested functions "this" is pointing to the global object
    console.log(this.radius)

    return Math.PI * Math.pow(this.radius,2)  
  }
};

console.log(literalCircle.getArea())

