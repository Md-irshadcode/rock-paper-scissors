function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    const userInput = prompt("Enter rock, paper, scissors: ");
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    const resultDiv = document.querySelector("#result");
    const scoreDiv = document.querySelector("#score");
    const winnerDiv = document.querySelector("#winner");

    if (humanChoice === computerChoice) {
        resultDiv.textContent = `It's a tie! You both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock"     && computerChoice === "scissors") ||
        (humanChoice === "paper"    && computerChoice === "rock")     ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultDiv.textContent = `You lose ${computerChoice} beats ${humanChoice}`;
    }

    scoreDiv.textContent = `You: ${humanChoice} | Computer: ${computerChoice}`;

    if (humanScore === 5) {
        winnerDiv.textContent = "🎉 You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        winnerDiv.textContent = "💀 Computer won the game!"
        disableButtons();
    }
}

function disableButtons() {
    document.querySelector("#rock").disabled
    document.querySelector("#paper").disabled
    document.querySelector("#scissors").disabled
}

document.querySelector("#rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

document.querySelector("#paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

document.querySelector("#scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
