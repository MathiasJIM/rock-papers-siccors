const body = document.querySelector("body");
const game_div = document.querySelector(".game");
const container = document.querySelector(".container");
const score_div = document.querySelector(".score");
const round_div = document.querySelector(".round");
const cpuImg = document.querySelector("#cpuImg");
const userImg = document.querySelector("#userImg");
const buttons = document.querySelector(".buttons");
const winner = document.querySelector(".winner");

let round = 0;
let humanScore = 0;
let cpuScore = 0;

const getComputerChoice = () => {
  const choice = Math.round(Math.random() * 100);
  if (choice <= 33) {
    console.log(`Computer selects: rock`);
    return "rock";
  } else if (choice > 33 && choice <= 66) {
    console.log(`Computer selects: paper`);
    return "paper";
  } else if (choice > 66 && choice <= 100) {
    console.log(`Computer selects: sissors`);
    return "scissors";
  }
};

const getHumanChoice = (choice) => {
  if (choice.toLowerCase() === "rock") {
    console.log(`Your choice: ${choice}`);
    return choice;
  } else if (choice.toLowerCase() === "paper") {
    console.log(`Your choice: ${choice}`);
    return choice;
  } else if (choice.toLowerCase() === "scissors") {
    console.log(`Your choice: ${choice}`);
    return choice;
  } else {
    console.log(`${choice} that choice do not exist, repeat`);
    return getHumanChoice();
  }
};

const setImg = (humanChoice, CpuChoice) => {
  if (humanChoice && CpuChoice) {
    cpuImg.src = `imgs/${CpuChoice}.png`;
    userImg.src = `imgs/${humanChoice}.png`;
  }
};

const getScoreAndRound = (round, humanScore, cpuScore) => {
  round_div.textContent = round;
  score_div.textContent = `Your Score: ${humanScore} Cpu Score: ${cpuScore}`;
};

const continuePlaying = () => {
  game_div.remove();
  newContainer = document.createElement("div");
  container.appendChild(newContainer);
  newContainer.className = "game";

  const playAgainMessage = document.createElement("h1");
  playAgainMessage.textContent = "Want to play Again?";

  playAgainButtons = document.createElement("div");
  playAgainButtons.className = "play-again-btns";

  const yesButton = document.createElement("button");
  yesButton.textContent = "Yes";
  yesButton.className = "play-again-btn";


  const noButton = document.createElement("button");
  noButton.textContent = "No";
  noButton.className = "play-again-btn";


  yesButton.addEventListener("click", () => {
    location.reload();
  });

  noButton.addEventListener("click", () => {
    container.remove();
    thanks = document.createElement("img");
    body.appendChild(thanks);
    thanks.src = "imgs/thanks_for_play.png";
    thanks.style = "margin-top:100px";
  });


  newContainer.appendChild(playAgainMessage);
  newContainer.appendChild(winner);
  newContainer.appendChild(playAgainButtons);
  playAgainButtons.appendChild(yesButton);
  playAgainButtons.appendChild(noButton);

  // if (window.confirm("Want to play Again?")) {
  //     getScoreAndRound(0, 0, 0);
  //     round = 0;
  //     humanScore = 0;
  //     cpuScore = 0;

  // } else {
  //     console.log("canceled");
  //     container.remove();
  //     thanks = document.createElement("img")
  //     body.appendChild(thanks)
  //     thanks.src = "imgs/thanks_for_play.png"
  //     thanks.style= "margin-top:100px";
  // }
};

buttons.addEventListener("click", (e) => {
  const isBtn = e.target.nodeName === "BUTTON";

  if (!isBtn) {
    return;
  }

  choice = getHumanChoice(e.target.id);
  game(choice, getComputerChoice());
});

const game = (humanChoice, CpuChoice) => {
  setImg(humanChoice, CpuChoice);
  if (humanChoice === "scissors" && CpuChoice === "rock") {
    console.log("Computer Win");
    cpuScore += 1;
  } else if (CpuChoice === "scissors" && humanChoice === "rock") {
    console.log("Human Wins");
    humanScore += 1;
  } else if (humanChoice === "paper" && CpuChoice === "scissors") {
    console.log("Computer Win");
    cpuScore += 1;
  } else if (CpuChoice === "paper" && humanChoice === "scissors") {
    console.log("Human Wins");
    humanScore += 1;
  } else if (humanChoice === "paper" && CpuChoice === "rock") {
    console.log("Human Win");
    humanScore += 1;
  } else if (CpuChoice === "paper" && humanChoice === "rock") {
    console.log("Computer Wins");
    cpuScore += 1;
  } else {
    console.log("Its a tie");
    cpuScore += 1;
    humanScore += 1;
  }

  round += 1;
  getScoreAndRound(round, humanScore, cpuScore);
  if (round > 5) {
    if (humanScore > cpuScore) {
      winner.textContent = "You Won!!";
    } else if (cpuScore > humanScore) {
      winner.textContent = "Cpu Won:(";
    } else {
      winner.textContent = "Its a tie!";
    }
    continuePlaying();
  }

  if (round === 0 && humanScore === 0 && cpuScore === 0) {
    cpuImg.src = "imgs/animation.gif";
    userImg.src = "imgs/animation.gif";
  }
};
