//Stand in Line
function nextInLine(arr, item) {
  // Only change code below this line
arr.push(item);
var removed = arr.shift();
  return removed;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Understanding Boolean Values
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

//Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue){
  return "Yes, that was true";
}
return "No, that was false";



  // Only change code above this line

}

//Comparison with the Equality Operator
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
