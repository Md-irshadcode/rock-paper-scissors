function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    const userInput = prompt("Enter rock, paper, scissors: ");
    return userInput;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("It's a tie, play again.");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    // round 1
    playRound(getHumanChoice(), getComputerChoice());
     // round 2
    playRound(getHumanChoice(), getComputerChoice());
     // round 3
    playRound(getHumanChoice(), getComputerChoice());
     // round 4
    playRound(getHumanChoice(), getComputerChoice());
     // round 5
    playRound(getHumanChoice(), getComputerChoice());

    console.log(`Final score - You: ${humanScore} | Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie!")
    }

}

playGame();

