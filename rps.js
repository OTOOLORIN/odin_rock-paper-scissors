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
