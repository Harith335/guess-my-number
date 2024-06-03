'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const displayNumber = number =>
  (document.querySelector('.number').textContent = number);
const displayHighscore = highscore =>
  (document.querySelector('.highscore').textContent = highscore);
const displayScore = score =>
  (document.querySelector('.score').textContent = score);
const displayBody = body =>
  (document.querySelector('body').style.backgroundColor = body);
const displayGuess = guess => (document.querySelector('.guess').value = guess);
const displayNumberWidth = number =>
  (document.querySelector('.number').style.width = number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number');
  }
  // When the player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayBody('#60b347');
    displayNumberWidth('30rem');
    displayNumber(secretNumber);
    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  }
  // When the player is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game');
      displayScore(0);
    }
  }
});

// When the player clicks "Again"
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  displayNumber('?');
  displayGuess('');
  displayMessage('Start guessing...');
  displayBody('#222');
  displayNumberWidth('15rem');
});
