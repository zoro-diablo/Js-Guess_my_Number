//Random Number b/w (1-20)
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Default Score
let score = 20;

//High Score
let highScore = 0;

//Display Message
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

//Chech Button event
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    //When Player Wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number🎉';
    displayMessage('Correct Number🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When player is Wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 Game Over!';
      displayMessage('💥 Game Over!');
      document.querySelector('body').style.backgroundColor = '#c81d1d';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   //When guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 Game Over!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 Game Over!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//Again button event
document.querySelector('.again').addEventListener('click', () => {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
