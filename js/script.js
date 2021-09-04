'use strict';

// all dom Element
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const highscore = document.querySelector('.highscore');
const guess = document.querySelector('.guess');
const again = document.querySelector('.again');4

// random number between 1 to 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let defaultScore = 20;
let defaultHighscore = 0;
let won = false;

//function for displaye the message
const displayMessage = function(gameMessage){
  message.textContent = gameMessage;
}
// add event on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // difference of guess and secretNumber
  const difference = guess - secretNumber;

  //When there is no input
  if (!guess) {
    if (defaultScore > 1) {
      displayMessage('⛔ No number');
    } else {
      displayMessage('💥 You lost The Game');
      score.textContent = 0;
    }

    //When players wins
  } else if (guess === secretNumber) {
    won = true;
    winResult();

    //when anyone win a game
  } else if (won) {
    message.innerHTML = `🎴 You Already Won, <br> <span style = "margin-left: 45px;">Please  Play Again.</span>`;

    //When the guess too close
  } else if (difference === 1 || difference === 2 || difference === -1 || difference === -2) {
    if (defaultScore > 1) {
      displayMessage('📫 Too Close');
      defaultScore--;
      score.textContent = defaultScore;
    } else {
      displayMessage('💥 You lost The Game');
      score.textContent = 0;
    }

    //when the guess is wrong
  } else if (guess !== secretNumber) {
    if (defaultScore > 1) {
      displayMessage(guess > secretNumber ? '📈 too high' : '📈 too Low');
      defaultScore--;
      score.textContent = defaultScore;
    } else {
      displayMessage('💥 You lost The Game');
      score.textContent = 0;
    }
  } 
});

function winResult() {
  if (defaultScore > 1) {
    displayMessage('🎉 Correct Number');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (defaultScore > defaultHighscore) {
      defaultHighscore = defaultScore;
      highscore.textContent = defaultHighscore;
    }
  }
}

// Again button work....everything will be like beginning
document.querySelector('.again').addEventListener('click', function () {
  defaultScore = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  number.textContent = '?';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  displayMessage('Start guessing...');
  score.textContent = defaultScore;
  guess.value = '';
  won = false;
});
