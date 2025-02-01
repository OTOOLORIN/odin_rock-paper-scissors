// create storage for players' scores
let userScore = 0;
let computerScore  = 0;

const humanScoreBoard = document.querySelector('#human');
const computerScoreBoard = document.querySelector('#computer')
const humanScoreUpdate = document.createElement('span');
const computerScoreUpdate = document.createElement('span');
const winner = document.querySelector('#winner');

humanScoreUpdate.textContent = `${userScore}`;
computerScoreUpdate.textContent = `${computerScore}`;

humanScoreBoard.append(humanScoreUpdate);
computerScoreBoard.append(computerScoreUpdate);

// get computer choice
function getComputerChoice() {
    // save computer choice
    let computerChoice;
    computerChoice = Math.floor(Math.random()*3) + 1;
    // console.log(computerChoice);

    /* translate computer choice to game language
    1 - "rock"
    2 - "paper"
    3 - "scissors"
    */
   computerChoice = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
//    console.log(computerChoice);

    return computerChoice;

}


// extract the result from a round played
function roundResult(userChoice, computerChoice) {

    // save the condition for a human to win the round
    let userWinningCondition = (
    (userChoice === "rock" && computerChoice === "scissors") || 
    (userChoice === "scissors" && computerChoice === "paper") || 
    (userChoice === "paper" && computerChoice === "rock"));
    

    if (userChoice === computerChoice) {
        console.log(`It's a tie, ${userChoice} = ${computerChoice}.\n`);
    } else if (userWinningCondition) {
        console.log(`You win this round, ${userChoice} beats ${computerChoice}!\n`);
        // update user new score 
        userScore += 1;
    } else {
        console.log(`You lose this round, ${computerChoice} beats ${userChoice}.\n`);
        // update computer score
        computerScore += 1;
    }
    humanScoreUpdate.textContent = `${userScore}`;
    computerScoreUpdate.textContent = `${computerScore}`;
}


function playRound() {
    const playerOptions = document.querySelector('.player-selection-container');
    playerOptions.addEventListener('click', (option) => {
        const playerChoice = option.target.id;
        const computerChoice = getComputerChoice();

        roundResult(playerChoice, computerChoice);


        if (userScore === 5) {
            winner.textContent = 'You win the game!';
        } else if (computerScore === 5) {
            
            winner.textContent = 'Computer win the game!';
        }

        restartGame();
     }
    
    )
}

function restartGame() {
    if (userScore === 5 || computerScore === 5) {
        userScore = 0;
        computerScore = 0;
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart Game';
        winner.appendChild(restartButton);
    }
}


playRound();
// THE END