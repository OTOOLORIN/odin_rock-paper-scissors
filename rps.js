// initialize players' scor
let userScore = 0;
let computerScore = 0;

let noOfRounds = 0;

// References to DOM nodes to be manipulated/created;

const roundDisplay = document.createElement('span');
const header = document.querySelector('.intro-container');
const computerArena = document.querySelector('.arena.computer')
const userOptions = document.querySelector('.selection-container')
const userScoreDisplay = document.querySelector('.score-display.user');
const computerScoreDisplay = document.querySelector('.score-display.computer');
const userChoiceDisplay = document.querySelector('.choice-display.user');
const computerChoiceDisplay = document.querySelector('.choice-display.computer');
const userChoiceValue = document.createElement('span');
const computerChoiceValue = document.createElement('span');
const winnerDisplay = document.querySelector('#winner-display');
const winnerDisplayMessage = document.createElement('span');
const resetBtn = document.createElement('button');
resetBtn.setAttribute('class', 'restart-btn');
roundDisplay.setAttribute('class', 'round-display');
userChoiceValue.setAttribute('class', 'player-option');
computerChoiceValue.setAttribute('class', 'player-option');
const body = document.querySelector('body');
winnerDisplay.appendChild(winnerDisplayMessage);


roundDisplay.textContent = `Round: ${noOfRounds}`;
header.appendChild(roundDisplay);
userChoiceDisplay.appendChild(userChoiceValue);
computerChoiceDisplay.appendChild(computerChoiceValue);
resetBtn.textContent = 'Restart Game'

function getComputerChoice () {
    const computerNumeriChoice = Math.floor(Math.random() * 3) + 1;
    let computerTextChoice;

    switch (computerNumeriChoice) {
        case 1:
            computerTextChoice = 'rock';
            break;
        case 2:
            computerTextChoice = 'paper';
            break;
        default:
            computerTextChoice = 'scissors';
    }
    return computerTextChoice;
}

function getWinner (userChoice, computerChoice) {
    const userWinningCondition = 
                        ((userChoice === 'rock' && computerChoice === 'scissors') ||
                        (userChoice === 'scissors' && computerChoice === 'paper') ||
                        (userChoice === 'paper' && computerChoice === 'rock'));
    if (userChoice === computerChoice) {

    }
    else if (userWinningCondition) {
        userScore += 1;
    } else {
        computerScore +=  1;
    }

    userScoreDisplay.textContent = `${userScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;
}

function titleCaseOption (option) {
    const firstLetter = option[0].toUpperCase();
    const otherLetters = option.slice(1);
    return firstLetter + otherLetters

}

function resetGameValues () {
    userScore = 0;
    computerScore = 0;
    noOfRounds = 0;
}
function resetGame() {
    resetGameValues();
    body.appendChild(resetBtn);
resetBtn.addEventListener('click', () => {
    resetGameValues()
    winnerDisplayMessage.textContent = '';
    userChoiceValue.textContent = '';
    computerChoiceValue.textContent = '';
    userScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    roundDisplay.textContent = 'Round: 0';
    body.removeChild(resetBtn);
})
}

function determineGameWinner (userScore, computerScore) {
    const winningPoint = 5;
    if ((userScore == winningPoint) && (computerScore < winningPoint)) {
        winnerDisplayMessage.setAttribute('class', 'winner-color');
        winnerDisplayMessage.textContent = 'You won.'
        resetGame();
    }
    if ((computerScore == winningPoint) && (userScore < winningPoint)) {
        winnerDisplayMessage.setAttribute('class', 'loser-color')
        winnerDisplayMessage.textContent = 'You lose.'
        resetGame();
    }
}

userOptions.addEventListener('click', (event) => {
    winnerDisplayMessage.textContent = '';

    
    const button = event.target;
    const userChoice = button.id;
    if (!userChoice) {
        return;
    }

    noOfRounds++;
    roundDisplay.textContent = `Round: ${noOfRounds}`;
    const computerChoice = getComputerChoice();

    const computerChoiceTitled = titleCaseOption(computerChoice);
    const userChoiceTitled = titleCaseOption(userChoice);
    userChoiceValue.textContent = ` ${userChoiceTitled}`;
    computerChoiceValue.textContent = ` ${computerChoiceTitled}`;
    getWinner(userChoice, computerChoice);
    determineGameWinner(userScore, computerScore);
})