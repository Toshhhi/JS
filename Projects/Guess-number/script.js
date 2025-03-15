let randomNo = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');  // ✅ Corrected class name
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please add a valid number!');
    } else if (guess <= 0) {
        alert('Please add a number greater than 0!');
    } else if (guess > 100) {
        alert('Please add a number less than 100!');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displaymsg(`Game over. Random number was ${randomNo}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNo) {
        displaymsg(`🎉 You guessed it right!`);
        endGame();
    } else if (guess < randomNo) {
        displaymsg(`📉 Number is too low`);
    } else {
        displaymsg(`📈 Number is too high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displaymsg(message) {
    console.log(`Displaying message: ${message}`); // ✅ Debugging log
    lowOrHigh.textContent = message;  // ✅ Fix: Use textContent instead of innerHTML
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game!</h2>`;
    startOver.appendChild(p);
    playGame = false;
    
    document.querySelector('#newGame').addEventListener('click', newGame);
}

function newGame() {
    randomNo = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
}
