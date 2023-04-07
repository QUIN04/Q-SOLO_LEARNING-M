//Iterate Through an Array with a For Loop

// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
// Only change code below this line
for(var i = 0;i< myArr.length; i++) {
total+=myArr[i];
console.log(total)
}

//Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
 for (var i = 0; i < arr.length; i++) {
    for (var x = 0; x < arr[i].length; x++) {
      product *= arr[i][x];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//Iterate with JavaScript Do...While Loops

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while(i < 10)
  
  //Replace Loops using Recursion
  function sum(arr, n) {
    var sum = arr[0];
    for (var i = 1; i <= n; i++) {
        sum += arr[i];
    }
    return sum;
  }

// Recursive functions
function sum(arr, n) {
  // Only change code below this line
  if(n<=0){
    return arr[0];
  }else{
    return sum(arr,n-1)+arr[n];
  }
  // Only change code above this line
}
