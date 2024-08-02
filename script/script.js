const userChoices = document.querySelectorAll('.userChoices');
const computerChoices = document.querySelectorAll('.computerChoices');

const computerRock = document.querySelector('#computerRock');
const computerPaper = document.querySelector('#computerPaper');
const computerScissor = document.querySelector('#computerScissor');
//custom event to simulate computer click
const computerClick = new Event('computerClick');

const resultsP = document.querySelector("#resultsP");
const resultsDiv = document.querySelector("#results");
const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");

//resultsP.setAttribute('style', 'white-space: pre;');

//Highlight player choice
userChoices.forEach((choice) => {
    choice.addEventListener('click', () => {
        userChoices.forEach((choice) => choice.style.backgroundColor = "");
        choice.style.backgroundColor = "rgba(66, 39, 245, 0.37)";
    });
});


//Highlight computer choice
computerChoices.forEach((choice) => {
    choice.addEventListener('computerClick', () => {
        computerChoices.forEach((choice) => choice.style.backgroundColor = "");
        choice.style.backgroundColor = "rgba(224, 0, 0, 0.37)";
    });
});

//INIT computerChoicePar function.
function getComputerChoice() {
    //GENERATE random number variable for choice.
    const randomNumber = Math.random();
    //Choose between scissor, rock and paper
    if (randomNumber <= .33){
        computerScissor.dispatchEvent(computerClick);
        return "scissor";
        
        
    }
    else if(randomNumber >= .34 && randomNumber <= .66) {
        computerRock.dispatchEvent(computerClick);
        return "rock"
    }
    else {
        computerPaper.dispatchEvent(computerClick);
        return "paper"
    };

};



function playGame() {
    //Scores for players
    let humanScore = 0
    let computerScore = 0


    //INIT playRound function
    function playRound(humanChoicepar, computerChoicePar){

        if(humanChoicepar === 'rock' && computerChoicePar === 'paper') {
            resultsP.textContent = "\r\n You have lost this round! "
            computerScore += 1
        }
        else if(humanChoicepar === 'paper' && computerChoicePar === 'rock') {
            resultsP.textContent = "\r\n You have won this round! "
            humanScore += 1
        }
        else if(humanChoicepar === "scissor" && computerChoicePar === "paper") {
            resultsP.textContent = "\r\n You have won this round! "
            humanScore += 1
        }
        else if(humanChoicepar === "paper" && computerChoicePar === "scissor") {
            resultsP.textContent = "\r\n The Computer has won this round! "
            computerScore += 1
        }
        else if(humanChoicepar === "scissor" && computerChoicePar === "rock") {
            resultsP.textContent =  "\r\n The computer has won this round "
            computerScore += 1
        }
        else if(humanChoicepar === "rock" && computerChoicePar === "scissor") {
            resultsP.textContent = "\r\n You have won this round "
            humanScore += 1
        }
        else if(humanChoicepar === computerChoicePar) {
            resultsP.textContent = "\r\n It's a tie! "
        }

        //resultsP.textContent += `\r\n Score: You - ${humanScore} Computer - ${computerScore} `

        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;

    }
    

    userChoices.forEach((choice) => {
        choice.addEventListener('click', () => playRound(choice.id, getComputerChoice()));
    });



    
}


playGame()