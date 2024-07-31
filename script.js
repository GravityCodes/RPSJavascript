//INIT computerChoicepar function.
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
    humanChoiceAnswer = prompt("Type Rock, paper, or scissor");
    
    return humanChoiceAnswer.toLowerCase()
}

function playGame() {
    //Scores for players
    let humanScore = 0
    let computerScore = 0

    let rounds = 0

    //INIT playRound function
    function playRound(humanChoicepar, computerChoicepar){

        console.log(`You chose ${humanChoicepar} and the computer chose ${computerChoicepar}`)

        if(humanChoicepar === 'rock' && computerChoicepar === 'paper') {
            console.log("You have won this round!")
            humanScore += 1
        }
        else if(humanChoicepar === 'paper' && computerChoicepar === 'rock') {
            console.log("You have won this round!")
            humanScore += 1
        }
        else if(humanChoicepar === "scissor" && computerChoicepar === "paper") {
            console.log("You have won this round!")
            humanScore += 1
        }
        else if(humanChoicepar === "paper" && computerChoicepar === "scissor") {
            console.log("The Computer has won this round!")
            computerScore += 1
        }
        else if(humanChoicepar === "scissor" && computerChoicepar === "rock") {
            console.log("The computer has won this round")
            computerScore += 1
        }
        else if(humanChoicepar === "rock" && computerChoicepar === "scissor") {
            console.log("You have won this round")
            humanScore += 1
        }
        else if(humanChoicepar === computerChoicepar) {
            console.log("It's a tie!")
        }

        console.log(`Score: You - ${humanScore} Computer - ${computerScore} `)
    }

    while (rounds < 5) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)

        rounds += 1;
    }

    
}

playGame()