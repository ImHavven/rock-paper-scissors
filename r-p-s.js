const btns = document.querySelectorAll('.play');

// The Score Between The Player & Computer..
let playerScore = 0;
let computerScore = 0;

// This Func Will Get Computer A Random Choices.. 
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)]
};

// This Will Disable The Buttons..
function disableBtn(){
    btns.forEach((btn) => {
        btn.disabled = true;
    })
};

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    let selectionLowerCase = playerSelection.toLowerCase(); // This Will Make The playerSelection Case Insensitive..
    let result = '';

    //First if() Statement For The Choices
    if( playerSelection == computerSelection){
        result = `<br><br>Draw
        <br><br> Score: Player ${playerScore} - ${computerScore} Computer`;
    } else if(selectionLowerCase == 'rock' && computerSelection == 'scissors' ||
    selectionLowerCase == 'paper' && computerSelection == 'rock' ||
    selectionLowerCase == 'scissors' && computerSelection == 'paper'){
        playerScore += 1; 
        result = `<br><br>Your Play(${playerSelection}) Beats Computer Play(${computerSelection}) 
        <br><br> Score: Player ${playerScore} - ${computerScore} Computer`;
    } else {
        computerScore += 1;
        result = `<br><br>Computer Play(${computerSelection}) Beats Your Play(${playerSelection})
        <br><br> Score: Player ${playerScore} - ${computerScore} Computer`;
    };

    //Second if() Statement For The Finale Result
    if(playerScore == 5 && computerScore == 5){
        result = `<br><br>It\'s a Draw With Score ${playerScore} - ${computerScore}`
        disableBtn();
     } else if(playerScore == 5){
        result = `<br><br>You Win The Match With Score ${playerScore} - ${computerScore}`;
        disableBtn();
    } else if(computerScore == 5){
        result = `<br><br>Computer Wins The Match With Score ${computerScore} - ${playerScore}`;
        disableBtn();
    }; 
    return document.getElementById('result').innerHTML = result; // Here Will Be Displayed The Result Of The Game
};


//This Will Call playRound() Whenever You Hit The Buttons In The HTML Page To Play The Game...
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let Computer = getComputerChoice();
        let plyrChoice = btn.getAttribute('id');
        return playRound(plyrChoice, Computer);
    });
});




//This Func Was Used Before To play The Game In The Console

//function game(){
//    if(playerScore == computerScore){
//        return div2.innerHTML = `It\'s a Draw With ${playerScore} - ${computerScore}`
//    } else if (playerScore > computerScore){
//        return div2.innerHTML = `You Win The Match With ${playerScore} - ${computerScore}`;
//    } else {
//        return div2.innerHTML = `Computer Wins The Match With ${computerScore} - ${playerScore}`;
//    };
//};








