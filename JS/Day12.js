//Record Collection

// Setup
var recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] ??= [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");

//Iterate with JavaScript While Loops

// Setup
const myArray = [];
// Only change code below this line
let i = 5;
while (i >= 0 ) {
  myArray.push(i);
  i--;
}

//Iterate with JavaScript For Loops

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1 ;i <=5;i++){
  myArray.push(i);
}

//Iterate Odd Numbers With a For Loop

/const myArray = [];

// Only change code below this line
for/ Setup
 (let i = 1 ;i < 10;i++){
  if(i%2 ==1)
{
  myArray.push(i);
}
}

//Count Backwards With a For Loop

// Setup
const myArray = [];

// Only change code below this line
for(let i=9; i>0; i--){
  if(i%2==1){
    myArray.push(i);
  }
}
