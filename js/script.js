'use strict';

// add event on check button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(guess === 0){
        document.querySelector('.message').textContent = '⛔ No number'
    }
});
