const btns = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    var ran = ['Rock','Paper','Scissors'],
        ran1 = ran[Math.floor(Math.random() * ran.length)];
    return ran1;
};

function disableBtn(){
    btns.forEach(btn => {
        btn.disabled = true;
    });
};


function gamePlay(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
    playerSelection == 'Scissors' && computerSelection === 'Paper'||
    playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerScore += 1;
        result = ('You beaten ' + computerSelection + ' by choosing ' + playerSelection
                    + '<br>player Score: ' + playerScore + '<br>computer Score: ' + computerScore);
        if(playerScore == 5) {
            result += '<br><br>You Win The Game';
            disableBtn();
        };
    } else if (playerSelection == computerSelection){
        result = ('you both choose ' + playerSelection
                + '<br>player Score: ' + playerScore + '<br>computer Score: ' + computerScore);
    } else {
        computerScore += 1;
        result = ('You have been beaten by ' + computerSelection + ' by choosing ' + playerSelection
                    + '<br>player Score: ' + playerScore + '<br>computer Score: ' + computerScore);
        if(computerScore == 5){
            result += '<br><br>The Computer Win the game ';
            disableBtn();
        };
    };
    return document.getElementById('result').innerHTML = result;
};


btns.forEach(button => {
    button.addEventListener('click', () =>{
        let playerChoice = button.getAttribute('id');
        gamePlay(playerChoice, computerPlay());
    });
});




//This was for the game to be played on the console 


//function gamePlay(){
//    if (playerScore == computerScore) {
//        return "It's a Draw";
//    } else if (computerScore > playerScore) {
//        return "Computer Wins";
//    } else {
//        return "You Win the game player";
//    };
//};-


//    for (let i = 0; i < 5; i++){
//        let plays =  prompt("What's your play? (rock, paper, scissor)", "");
//        let plays1 = plays.toLowerCase();
//        let playerSelection = plays1;
//        let computerSelection = computerPlay();
//        console.log(gameChoices(playerSelection, computerSelection));
//    };