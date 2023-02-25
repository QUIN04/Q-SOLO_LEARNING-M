//Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch(val) {
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff";
  break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line

switch (val){
   case 1:
   answer = "Low";
    break;
  case 2:
  answer = "Low";
    break;
  case 3:
    answer = "Low";
    break;
  case 4:
  answer = "Mid";
    break;
   case 5:
   answer = "Mid";
    break;
  case 6:
    answer = "Mid";
    break;
     case 7:
     answer = "High";
    break;
  case 8:
  answer = "High";
    break;
  case 9:
    answer = "High";
    break;
}

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

//Replacing If Else Chains with Switch
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);
