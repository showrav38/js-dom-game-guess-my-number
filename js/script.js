'use strict';

// random number between 1 to 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
// add event on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // difference of guess and secretNumber
  const difference = guess - secretNumber;

  //When there is no input
  if (!guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔ No number';
    } else {
      document.querySelector('.message').textContent = '💥 You lost The Game';
      document.querySelector('.score').textContent = 0;
    }

    //When players wins
  } else if (guess === secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🎉 Correct Number';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    } else {
      document.querySelector('.message').textContent = '💥 You lost The Game';
      document.querySelector('.score').textContent = 0;
    }
    //When the guess too close
  } else if (difference === 1 || difference === 2 || difference === -1 || difference === -2) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📫 Too Close';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost The Game';
      document.querySelector('.score').textContent = 0;
    }

    //when the input is too high
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

    //when the input is too low
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

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
})
