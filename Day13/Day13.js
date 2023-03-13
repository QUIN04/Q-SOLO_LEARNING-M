let date = new date();
// getting current date
let dayNumber = date.getDay();
let thedayIs;
let quote;

//switching between days and quotes
switch(dayNumber){
  case 0:
    theDayIs = 'Sunday';
    quote = 'Time to chillax!';
    break;
    case 1:
    theDayIs = 'Monday';
    quote = 'Monday morning blues!';
    break;
    case 2:
    theDayIs = 'Tuesday';
    quote = 'Tabot time!';
    break;
    case 3:
    theDayIs = 'Wednesday';
    quote = 'Two more days to the weekend!';
    break;
    case 4:
    theDayIs = 'Thursday';
    quote = 'The weekend is almost here ...!';
    break;
    case 5:
    theDayIs = 'Friday';
    quote = 'Weekend is here!';
    break;
    case 6:
    theDayIs = 'Saturday';
    quote = 'Time to summarise my week!';
    break;
}