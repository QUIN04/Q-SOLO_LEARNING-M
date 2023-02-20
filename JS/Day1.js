Global vs. Local Scope in Functions
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();

//Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

// Assignment with a Returned Value
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
