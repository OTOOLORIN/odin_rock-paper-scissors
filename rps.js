// initialize players' score
let userScore = 0;
let ccomputerScore = 0;

function getComputerChoice () {
    const computerNumeriChoice = Math.floor(Math.random() * 4);
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

let userChoice;
function getUserChoice () {
    const buttons = document.querySelectorAll('.player-arena button')

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            userChoice = button.id;
        })
    })
}