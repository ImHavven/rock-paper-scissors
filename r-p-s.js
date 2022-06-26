function computerPlay() {
    var ran = ['Rock','Paper','Scissors'],
        ran1 = ran[Math.floor(Math.random() * ran.length)];
    return ran1;
}

function gamePlay(playerSelection,computerSelection) {
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
}

function game() {
    
}
