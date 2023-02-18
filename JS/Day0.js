//Global Scope and Functions
// Declare the myGlobal variable below this line
let myGlobal;
myGlobal = 10;

function fun1() {
  oopsGlobal = 5// Assign 5 to oopsGlobal here

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Local Scope and Functions
function myLocalScope() {
  // Only change code below this line
var myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
myLocalScope();
console.log('outside myLocalScope', myVar);

