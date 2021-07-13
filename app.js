'use strict';

console.log('hello!');

//ask a few questions and use if statements or switch statements to reply with a unique alert

let disneylandOrig = prompt('Have you ever been to disneyland?');
let disneyland = disneylandOrig.toLowerCase;
console.log(disneylandOrig);
console.log(disneyland);
if(disneyland === 'yes' || disneyland === 'y'){
  alert('congrats!');
}
else if(disneyland === 'no'|| disneyland === 'n'){
  alert('bummer!');
}  
else {
    alert('Oops');
  }

// switch statements - used for lots of options

let funLevel = prompt('On a scale of 1 to 5, with 5 being the most fun, how fun was disneyland when you went');
console.log(typeof(funLevel));
let funLevelNum = parseInt(funLevel);
//make a default if no number is given
//another option is let funLevelNum = Number(funLevel);

//debugger;

switch(funLevelNum){
  case 1:
    alert ('you should try again');
    break;
  case 2:
    alert ('should not have had the turkey leg');
    break;
  case 3:
    alert('awesome!');
    break;
  case 4:
    alert('awesome!');
    break;
  case 5:
    alert('awesome!');
    break;
  default:
    alert ('let me help you plan your next trip!');
    //dont need a break because it's the last option
}