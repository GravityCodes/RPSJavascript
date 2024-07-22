/*
INIT computerChoice function.
    GENERATE random number variable for choice.
    IF random number variable is less than .33 THEN
        RETURN Scissor
    ELSE IF random number variable is greater or equal to .34 AND less than .66 THEN
        RETURN Rock
    ElSE
        Return Paper
    ENDIF
*/

//Scores for players
let humanScore = 0
let computerScore = 0




//INIT computerChoice function.
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

//INIT getHumanChoice function
function getHumanChoice() {
    humanChoiceanswer = prompt("Type Rock, paper, or scissor");
    
    return humanChoiceanswer.toLowerCase()
}

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

//INIT playRound function
function playRound(humanChoicepar, computerChoicepar){

    console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}`)

    if(humanChoice === 'rock' && computerChoice === 'paper') {
        console.log("You have won this round!")
        humanScore += 1
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("The computer has won this round!")
        computerScore += 1
    }
    else if(humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You have won this round!")
        humanScore += 1
    }
    else if(humanChoice === "paper" && computerChoice === "scissor") {
        console.log("The Computer has won this round!")
        computerScore += 1
    }
    else if(humanChoice === "scissor" && computerChoice === "rock") {
        console.log("The computer has won this round")
        computerScore += 1
    }
    else if(humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You have won this round")
        humanScore += 1
    }

    console.log(`Score: You - ${humanScore} Computer - ${computerScore} `)
}



playRound(humanChoice, computerChoice)