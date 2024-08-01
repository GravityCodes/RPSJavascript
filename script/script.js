//INIT computerChoicePar function.
function getComputerChoice() {
    //GENERATE random number variable for choice.
    const randomNumber = Math.random();
    //Choose between scissor, rock and paper
    if (randomNumber <= .33){
        return "scissor";
    }
    else if(randomNumber >= .34 && randomNumber <= .66) {
        return "rock"
    }
    else {
        return "paper"
    }

}


const buttons = document.querySelectorAll('button');
const resultsP = document.querySelector("p");
const resultsDiv = document.querySelector("#results")
const computerChoiceImg = document.createElement("img");

resultsP.setAttribute('style', 'white-space: pre;');

function playGame() {
    //Scores for players
    let humanScore = 0
    let computerScore = 0


    //INIT playRound function
    function playRound(humanChoicepar, computerChoicePar){

        resultsP.textContent = `You chose ${humanChoicepar} and the computer chose ${computerChoicePar}`

        if(humanChoicepar === 'rock' && computerChoicePar === 'paper') {
            resultsP.textContent += "\r\n You have won this round! "
            humanScore += 1
        }
        else if(humanChoicepar === 'paper' && computerChoicePar === 'rock') {
            resultsP.textContent += "\r\n You have won this round! "
            humanScore += 1
        }
        else if(humanChoicepar === "scissor" && computerChoicePar === "paper") {
            resultsP.textContent += "\r\n You have won this round! "
            humanScore += 1
        }
        else if(humanChoicepar === "paper" && computerChoicePar === "scissor") {
            resultsP.textContent += "\r\n The Computer has won this round! "
            computerScore += 1
        }
        else if(humanChoicepar === "scissor" && computerChoicePar === "rock") {
            resultsP.textContent +=  "\r\n The computer has won this round "
            computerScore += 1
        }
        else if(humanChoicepar === "rock" && computerChoicePar === "scissor") {
            resultsP.textContent += "\r\n You have won this round "
            humanScore += 1
        }
        else if(humanChoicepar === computerChoicePar) {
            resultsP.textContent += "\r\n It's a tie! "
        }

        resultsP.textContent += `\r\n Score: You - ${humanScore} Computer - ${computerScore} `
        computerChoiceImg.src = `./img/${computerChoicePar}.png`
        resultsDiv.appendChild(computerChoiceImg)
    }
    

    buttons.forEach((button) => {
        button.addEventListener('click', () => playRound(button.id, getComputerChoice()));
    });
    
}


playGame()