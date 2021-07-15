'use strict';
//Get the user's name and print it on the website after the rest of the script

function userGreeting(){
  let userName = prompt('Please enter your name');
  document.write("Hello, " + userName + ". Welcome!");
  console.log('The user\'s name is ' +userName);
}
userGreeting();


//Question 1*******

function backgroundQ(){
  let iBackgroundQ = prompt('Haustin currently lives in Arizona, did he grow up there?');
  console.log('The user answered ' +iBackgroundQ+ ' to question 1.');
  let backgroundQ = iBackgroundQ.toLowerCase();
  let numCorrect = 0;
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
}
backgroundQ();


//Question 2*******

function educationQ(){
  let iEducationQ = prompt('Has Haustin ever attended college?');
  console.log('The user answered ' +iEducationQ+ ' to question 2.');
  let educationQ = iEducationQ.toLowerCase();

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
}
educationQ();


//Question 3******

function jobQ(){
  let iJobQ = prompt('He\'s been an Army brat, but was Haustin ever in the military?');
  console.log('The user answered ' +iJobQ+ ' to question 3.');
  let jobQ = iJobQ.toLowerCase();

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
}
jobQ();


//Question 4*******

function goalsQ(){
  let iGoalsQ = prompt('Does Haustin want to be a software developer for the rest of his career?');
  console.log('The user answered ' +iGoalsQ+ ' to question 4.');
  let goalsQ = iGoalsQ.toLowerCase();

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
}
goalsQ();

//Question 5*******

function funQ(){
  let iFunQ = prompt('Does Haustin have any pets?');
  console.log('The user answered ' +iFunQ+ ' to question 5.');
  let funQ = iFunQ.toLowerCase();

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
}
funQ();


//Question 6*******

var iUserGuess = prompt('Let\'s play a game! Haustin was born in May of 1991, what date was he born on? You\'ve got four chances to get it right!');
var userGuess = parseInt(iUserGuess);
var guessCount = 0;
for (guessCount; guessCount < 4; guessCount++){
  console.log('The user answered '+userGuess+ ' on guess number ' + (guessCount +1) + '.');
  var chances = 4 - guessCount;
  if (userGuess < 23){
    iUserGuess = prompt('Nope! Sorry, you\'re too low. You\'ve got ' +chances+ ' chances left!');
    userGuess = parseInt(iUserGuess);
  }
  else if (userGuess > 23){
    iUserGuess = prompt('Nope! Sorry, you\'re too high. You\'ve got ' +chances+ ' chances left!');
    userGuess = parseInt(iUserGuess);
  }
  else if(userGuess === 23){
    alert('You got it right! Great job! He was born on 23 May 1991!');
    numCorrect++;
    break;
  }
}
if (guessCount === 4){
  alert('Sorry! You\'ve run out of guesses! The correct answer was 23!');
  console.log('The user ran out of attempts for question 6');
}

//Question 7
const myGames = ['Runescape', 'Heroes of the Storm', 'Call of Duty', 'Halo', 'Pokemon'];
var guessCount = 6;
let correctGame = false;
while (!correctGame && guessCount > 0){
  var iUserGuess = prompt ('Now, a different game! Haustin has loved only a few video games over the years, what is one of them? You have ' +guessCount+ ' chances remaining!');
  console.log('The user answered ' +iUserGuess+ '.');
  var userGuess = iUserGuess.toLowerCase();
  for (let i = 0; i < myGames.length; i++){
    if(userGuess === myGames[i].toLowerCase()){
      alert('Correct! ' +iUserGuess+ ' is one of his favorites! ' +myGames+ ' are all of the games he loves!');
      correctGame = true;
    }
  }
  if(correctGame){
    numCorrect++;
  }
  else if (!correctGame && guessCount <= 6 && guessCount > 1){
    alert('Nope! Try again!');
  }
  else if (!correctGame && guessCount === 1) {
    alert('Sorry! You\'ve run out of guesses! Possible choices were ' +myGames+ '.');
  }
  guessCount--;
}



//Calculate total questions answered correctly and display a response based on how well they did.
if(numCorrect === 0){
  alert('Yikes, ' +userName+ '. You got none right. Haustin is very disappointed.');
}
else if(numCorrect >= 1 && numCorrect <= 3){
  alert('Uh oh, you only got ' + numCorrect + ' out of 5 questions right, ' +userName+ '. You better study up on Haustin!');
}
else if(numCorrect === 4 || numCorrect === 5){
  alert('Not too bad, ' +userName+ '! You got ' +numCorrect+ ' out of 5 questions right. Enjoy some more information about Haustin!');
}
else{
  alert('Wow! Great job, ' +userName+ '. You got ' +numCorrect+ ' out of 7 questions right! *cough* stalker *cough*');
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
