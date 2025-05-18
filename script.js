// console.log(Math.round(Math.random *3 ))

let select = [0, 1, 2];
function getHumanChoice(){
    let humanChoice = prompt("Enter  rock, paper or scissors").toLowerCase();
    if (humanChoice === "rock"){
        humanChoice = select[0]
    }else if (humanChoice === "paper"){
        humanChoice = select[1]

    }else if (humanChoice === "scissors"){
        humanChoice = select[2]

    }else{
        getHumanChoice(); 
    }
    
    return humanChoice
}

function getComputerChoice(){
    let randomChoice = (Math.floor(Math.random() * 3))
    return randomChoice;
}


// let humanScore = 0;
// let computerScore = 0;


// function playRound(humanChoice, randomChoice){
//     let human = getHumanChoice()
//     let comp = getComputerChoice()
//     if (human === comp){
//         console.log('draw')
//     }else if (human === 0 && comp == 1){
//         computerScore += 1
//         console.log("you loose paper beats rock")
//     }else if (human === 1 && comp == 0){
//         humanScore += 1
//         console.log("you win paper beats rock")
//     }else if (human === 0 && comp == 2){
//         humanScore += 1
//         console.log("you win rock beats scissors")
//     }else if (human === 2 && comp == 0){
//         computerScore += 1
//         console.log("you loose rock beats scissors")
//     }else if (human === 1 && comp == 2){
//         computerScore += 1
//         console.log("you loose scissors beats paper")
//     }else if (human === 2 && comp == 1){
//         humanScore += 1
//         console.log("you win scissors beats paper")
//     }

// }


function playGame(){
    let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, randomChoice){
    let human = getHumanChoice()
    let comp = getComputerChoice()
    if (human === comp){
        console.log('draw')
    }else if (human === 0 && comp == 1){
        computerScore += 1
        console.log("you loose paper beats rock")
    }else if (human === 1 && comp == 0){
        humanScore += 1
        console.log("you win paper beats rock")
    }else if (human === 0 && comp == 2){
        humanScore += 1
        console.log("you win rock beats scissors")
    }else if (human === 2 && comp == 0){
        computerScore += 1
        console.log("you loose rock beats scissors")
    }else if (human === 1 && comp == 2){
        computerScore += 1
        console.log("you loose scissors beats paper")
    }else if (human === 2 && comp == 1){
        humanScore += 1
        console.log("you win scissors beats paper")
    }

}
  
    for (let i = 1; i <= 5; i++){
        playRound();
        console.log(computerScore,humanScore)
            
    }
    function checkWinner(human, computer){
        human = humanScore
        computer = computerScore
        if (humanScore > computerScore){
            console.log(`you win with a score of ${human} and computer score ${computer}`)
        }else if (computerScore > humanScore){
            console.log(`computer wins with a score of ${computer} and you scored ${human}`)
        }else{
            console.log(`its a tie computer score ${computere} and you scored ${human}`)
        }
    }
    checkWinner()
   
}




playGame()





// playRound()
// console.log(`Your Score = ${humanScore}`)