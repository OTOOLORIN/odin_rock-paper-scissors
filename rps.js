// print welcome message to the user
console.log("Hi there! Welcome to the game\nYou'll be playing against a computer.\nMay the gods favor you!\n\n"
);

// create storage for players' scores
let userScore = 0;
let computerScore  = 0;

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


function getHumanChoice() {
    //get human choice

    /*prompt user to enter the number 1, 2, or 3 to  play
    1 - "rock"
    2 - "paper"
    3 - "scissors"
    */
    userChoice = parseInt(prompt("Rock, Paper, Scissors?\n\nType a number to shoot!\n1 - rock\n2 - paper\n3 - scissors"))
    let userTextChoice;
    // return the text equivalent of human choice
    userTextChoice = userChoice === 1 ? "rock" : userChoice === 2 ? "paper" : userChoice === 3 ? "scissors" :null;
    return userTextChoice;
}

// create a function to play a round
function playRound(userChoice, computerChoice) {
    // save the condition for a human to win the round
    let userWinningCondition = (
    (userChoice === "rock" && computerChoice === "scissors") || 
    (userChoice === "scissors" && computerChoice === "paper") || 
    (userChoice === "paper" && computerChoice === "rock"));
    // do not start game if userChoice is invalid
    if (!userChoice) {
        computerScore += 1;
        console.log("Type a valid number, you lose this round.");
    // check if the round is a tie
    } else if (userChoice === computerChoice) {
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
}

// create variables to store players' choices
const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

// playRound(getHumanChoice(), getComputerChoice());
// play a game (five rounds)

function playGame() {
    playRound(humanSelection(), computerSelection());
    scoreBoard();
    playRound(humanSelection(), computerSelection());
    scoreBoard();
    playRound(humanSelection(), computerSelection());
    scoreBoard();
    playRound(humanSelection(), computerSelection());
    scoreBoard();
    playRound(humanSelection(), computerSelection());
    scoreBoard();
}

playGame();
// announce the winner
if (userScore > computerScore) {
    console.log("\n\nYou win!");
} else if(userScore < computerScore) {
    console.log("\n\nYou lose.");
} else {
    console.log("\n\nIt's a tie.")
}
// create a scoreboard
function scoreBoard() {
    console.log(`Human - ${userScore}        Computer - ${computerScore}`);
}

// THE END