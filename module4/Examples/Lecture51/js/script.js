//CLOSURES
function makeMultipliers (multi) {

  function b() {
    console.log("Multi is: " + multi) //even though the multi var is not defined
    //in this function b, js will look for the var in the outer enviroment till it find it
  }
  b()
  return ( //this return statement doesn't create its own execution enviroment
    function (x) { //this is a function value, no a function execution
      return multi*x
    }
    )
}

var doubleAll = makeMultipliers(2)

console.log(doubleAll(10)) //here the function (x) get its execution enviroment. so how does the function knows the value of "multi"?
//thanks to js closure the function can work because the memory of "multi" has been preserved