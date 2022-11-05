'use strict';

//Define the secret number to compare to our scenarios
//NOTE: we define it outside so the random number is able everywhere in the code

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const styleNumber = function (number) {
  document.querySelector('.number').style.width = number;
};
const styleBody = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Best scenario to start is by thinking that there is no input
  if (!guess) {
    displayMessage('⛔️ No Number!');

    //What happens when the guess is correct
  } else if (guess === randomNumber) {
    displayMessage('🎉 Correct Number!');
    styleBody('#60b347');
    styleNumber('30rem');
    displayNumber(randomNumber);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is different from secret number
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(
        guess > randomNumber
          ? '📈 Number is too High!' //What happens when the guess is too high
          : '📉 Number is too Low!'
      ); //What happens when the guess is too low)
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You Lost the Game!');
      displayScore(0);
    }
  }
});

// Restore the game in the AGAIN Button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  displayNumber('?');
  displayMessage('Start guessing...');
  displayScore(score);
  styleBody('#222');
  styleNumber('15rem');
  document.querySelector('.guess').value = '';
});

// Game Logic
// On an app like this where there is User input we always get a string,
// therefore, we need to convert it, to whatevr data we will need to compare it with.
// -----------
// 1st we are working with what type of value?
// Numbers => So we need to create a condition where we only accept numbers
// If the user input something else we need to tell him to input correct type of data
//------
