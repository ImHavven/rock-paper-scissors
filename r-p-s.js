function computerPlay() {
    var ran = ['Rock','Paper','Scissors'],
        ran1 = ran[Math.floor(Math.random() * ran.length)];
    return ran1;
};

function gameChoices(playerSelection,computerSelection) {
    if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
    playerSelection == 'Scissors' && computerSelection === 'Paper'||
    playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'You win Player';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock'||
    playerSelection == 'Paper' && computerSelection == 'Scissors'||
    playerSelection == 'Rock' && computerSelection == 'Paper'){
        return 'Computer Wins';
    } else {
        return 'Draw'
    }
};

let playerScore = 0;
let computerScore = 0;

function gamePlay(){
    for (let i = 0; i < 5; i++){
        let plays =  prompt("What's your play? (rock, paper, scissor)", "");
        let plays1 = plays.toLowerCase();
        let playerSelection = plays1;
        let computerSelection = computerPlay();
        console.log(gameChoices(playerSelection, computerSelection));
    };
    if (playerScore == computerScore) {
        return "It's a Draw";
    } else if (computerScore > playerScore) {
        return "Computer Wins";
    } else {
        return "You Win the game player";
    };
};
