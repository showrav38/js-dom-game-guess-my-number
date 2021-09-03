'use strict';

// random number between 1 to 20
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;
let score = 20;
// add event on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // difference of guess and secretNumber
  const difference = guess - secretNumber;
  if (!guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔ No number';
    } else {
      document.querySelector('.message').textContent = '💥 You lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🎉 Correct Number';
    } else {
      document.querySelector('.message').textContent = '💥 You lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (difference === 1 || difference === 2 || difference === -1 || difference === -2) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📫 Too Close';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    debugger;
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
