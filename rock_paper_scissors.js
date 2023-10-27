function getComputerChoice() {
  const choices = ["rock", "PAPER", "scissors"];

  let randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "playerWins";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "computerWins";
  } else {
    return "tie";
  }
}

function game() {
  let rounds = 5;
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < rounds; i++) {
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();

    while (
      (playerSelection !== "rock") ^
      (playerSelection !== "paper") ^
      (playerSelection !== "scissors")
    ) {
      console.log("Invalid Entry");
      playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    }

    let computerSelection = getComputerChoice();

    console.log(`computer choice: ${computerSelection}`);
    console.log(`your choice: ${playerSelection}`);

    if (playRound(playerSelection, computerSelection) === "playerWins") {
      playerScore++;
      console.log("you win! computer loses.");
    } else if (
      playRound(playerSelection, computerSelection) === "computerWins"
    ) {
      computerScore++;
      console.log("you lose! computer wins.");
    } else {
      console.log("TIE!");
    }
    console.log("---------------------------------");
  }
  console.log("-----------------------------------");
  result(playerScore, computerScore);
}

function result(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log("You won the game!");
    console.log(`your score: ${playerScore}`);
    console.log(`computers score: ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log("You lost the game! Computer wins");
    console.log(`your score: ${playerScore}`);
    console.log(`computers score: ${computerScore}`);
  } else {
    console.log("Its a draw! Play again!");
    console.log(`your score: ${playerScore}`);
    console.log(`computers score: ${computerScore}`);
  }
}

game();
