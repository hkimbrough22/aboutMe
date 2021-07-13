'use strict';
//ask a few questions and use if statements or switch statements to reply with a unique alert
let userName = prompt('Please enter your name');
document.write("Hello, " + userName + ". Welcome!");

let iBackgroundQ = prompt('Haustin currently lives in Arizona, did he grow up there?');
let backgroundQ = iBackgroundQ.toLowerCase();
let numCorrect = 0;
console.log(iBackgroundQ);
console.log(backgroundQ);

if(backgroundQ === 'yes' || backgroundQ === 'y'){
  alert('Nope! Kentucky is home, but Tennessee is a close second! Being an Army brat makes you a nomad if you didn\'t know!');
}

else if(backgroundQ === 'no'|| backgroundQ === 'n'){
  alert('Right you are! Kentucky is home and Tennessee is a close second!');
  numCorrect++;
}  

else {
    alert('Oops, that wasn\'t an option!');
}

let iEducationQ = prompt('Has Haustin ever attended college?');
let educationQ = iEducationQ.toLowerCase();
console.log(iEducationQ);
console.log(educationQ);

if(educationQ === 'yes' || educationQ === 'y'){
  alert('Correct! Technically, three universities and one college! No degree yet, but he\'s still working on it!');
  numCorrect++;
}

else if(educationQ === 'no'|| educationQ === 'n'){
  alert('*insert loud buzzer sound* Wrong! He\'s got a few under his belt, but no degree!');
}  

else {
    alert('Oops, that wasn\'t an option!');
}


let iJobQ = prompt('He\'s been an Army brat, but was Haustin ever in the military?');
let jobQ = iJobQ.toLowerCase();
console.log(iJobQ);
console.log(jobQ);

if(jobQ === 'yes' || jobQ === 'y'){
  alert('That\'s right! He served for about seven years in the Army!');
  numCorrect++;
}

else if(jobQ === 'no'|| jobQ === 'n'){
  alert('Sorry, that\'s incorrect.  He served in the Army for about seven years!');
}  

else {
    alert('Oops, that wasn\'t an option!');
}

let iGoalsQ = prompt('Does Haustin want to be a software developer for the rest of his career?');
let goalsQ = iGoalsQ.toLowerCase();
console.log(iGoalsQ);
console.log(goalsQ);

if(goalsQ === 'yes' || goalsQ === 'y'){
  alert('Oh no! That\'s not right. He hopes to own his own his own business one day.');
}

else if(goalsQ === 'no'|| goalsQ === 'n'){
  alert('Cooooooorrect! He hopes to own his own federal contracting business focusing on professional services procurement one day!');
  numCorrect++;
}  

else {
    alert('Oops, that wasn\'t an option!');
}

let iFunQ = prompt('Does Haustin have any pets?');
let funQ = iFunQ.toLowerCase();
console.log(iFunQ);
console.log(funQ);

if(funQ === 'yes' || funQ === 'y'){
  alert('DING DING DING!! Awesome! Haustin is a proud father to Bob Ross and Lenny Kravitz, two of the most spoiled kitties on the planet. You could probably include his daughter, Winter Sofia, on the list too since she is basically a wild animal.');
  numCorrect++;
}

else if(funQ === 'no'|| funQ === 'n'){
  alert('INCORRECT! He is a proud father to Bob Ross and Lenny Kravitz, two of the most spoiled kitties on the planet. Winter Sofia, his daughter, is also on the list since she is basically a wild animal.');
}  

else {
    alert('Oops, that wasn\'t an option!');
}
if(numCorrect == 0){
  alert('Yikes, ' +userName+ '. You got none right. Haustin is very disappointed.');
}
else if(numCorrect == 1 || numCorrect == 2){
  alert('Uh oh, you only got ' + numCorrect + ' out of 5 questions right, ' +userName+ '. You better study up on Haustin!');
}
else if(numCorrect == 3){
  alert('Not too bad, ' +userName+ '! You got ' +numCorrect+ ' out of 5 questions right. Enjoy some more information about Haustin!');
}
else{
  alert('Wow! Great job, ' +userName+ '. You got ' +numCorrect+ ' out of 5 questions right! *cough* stalker *cough*');
}






// switch statements - used for lots of options

// let funLevel = prompt('On a scale of 1 to 5, with 5 being the most fun, how fun was backgroundQ when you went');
// console.log(typeof(funLevel));
// let funLevelNum = parseInt(funLevel);
//make a default if no number is given
//another option is let funLevelNum = Number(funLevel);

//debugger;

// switch(funLevelNum){
//   case 1:
//     alert ('you should try again');
//     break;
//   case 2:
//     alert ('should not have had the turkey leg');
//     break;
//   case 3:
//     alert('awesome!');
//     break;
//   case 4:
//     alert('awesome!');
//     break;
//   case 5:
//     alert('awesome!');
//     break;
//   default:
//     alert ('let me help you plan your next trip!');
    //dont need a break because it's the last option
