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
  let rounds = 0;
  let playerScore = 0;
  let computerScore = 0;

  let btn = document.querySelectorAll("button");
  let playerElement = document.querySelector(".playerScore");
  let computerElement = document.querySelector(".computerScore");
  let results = document.querySelector(".results");
  let img = document.querySelectorAll("img");
  let round = document.querySelector(".round");

  playerElement.textContent = playerScore;
  computerElement.textContent = computerScore;
  round.textContent = rounds;

  img.forEach((img) => {
    img.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    results.textContent = " ";
    let computerSelection = getComputerChoice();

    const playerSelection = event.target.alt;

    console.log(playerSelection);
    console.log(computerSelection);

    if (playRound(playerSelection, computerSelection) === "playerWins") {
      rounds++;
      playerScore++;
      document.body.style.backgroundColor = "#b3ffb3";
      playerElement.style.backgroundColor = "white";

      setTimeout(function () {
        document.body.style.backgroundColor = "";
        playerElement.style.backgroundColor = "";
      }, 400);
    }
    if (playRound(playerSelection, computerSelection) === "computerWins") {
      rounds++;
      computerScore++;
      document.body.style.backgroundColor = "#ffcccc";
      computerElement.style.backgroundColor = "white";

      setTimeout(function () {
        document.body.style.backgroundColor = "";
        computerElement.style.backgroundColor = "";
      }, 200);
    }
    if (playRound(playerSelection, computerSelection) === "tie") {
      console.log("Tie");
    }

    playerElement.textContent = playerScore;
    computerElement.textContent = computerScore;
    round.textContent = rounds;
    console.log(`players score is ${playerScore}`);
    console.log(`computers score is ${computerScore}`);
    console.log(`ROUND: ${rounds}`);

    if (rounds >= 5) {
      result(playerScore, computerScore);
      playerScore = 0;
      computerScore = 0;
      rounds = 0;
    }
  }
}

function result(playerScore, computerScore) {
  let result = document.querySelector(".results");

  if (playerScore > computerScore) {
    result.textContent = "You won the game!";
    // result.textContent = `your score: ${playerScore}`;
    // result.textContent = `your score: ${playerScore}`;
    console.log("You won the game!");
    console.log(`your score: ${playerScore}`);
    console.log(`computers score: ${computerScore}`);
    document.body.style.backgroundColor = "#b3ffb3";
  } else if (playerScore < computerScore) {
    result.textContent = "You lost the game! Computer wins";
    // result.textContent = `your score: ${playerScore};`;
    // result.textContent = `computers score: ${computerScore}`;
    console.log("You lost the game! Computer wins");
    console.log(`your score: ${playerScore}`);
    console.log(`computers score: ${computerScore}`);
    document.body.style.backgroundColor = "#ffcccc";
  } else {
    result.textContent = "Its a draw! Play again!";
    // result.textContent = `your score: ${playerScore}`;
    // result.textContent = `computers score: ${computerScore}`;
    console.log("Its a draw! Play again!");
    console.log(`your score: ${playerScore}`);
    console.log(`computers score: ${computerScore}`);
  }
}
game();
