let winCount = 0;
let roundsPlayed = 0;

function computerPlay() {
  let hands = ["グー", "チョキ", "パー"];
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();

  let computerHandImage;
  if (computerSelection === "グー") {
    computerHandImage = "../img/gu.png";
  } else if (computerSelection === "チョキ") {
    computerHandImage = "../img/choki.png";
  } else {
    computerHandImage = "../img/pa.png";
  }

  let resultMessage;
  if (playerSelection === computerSelection) {
    resultMessage = "引き分け！";
  } else if (
    (playerSelection === "グー" && computerSelection === "チョキ") ||
    (playerSelection === "チョキ" && computerSelection === "パー") ||
    (playerSelection === "パー" && computerSelection === "グー")
  ) {
    winCount++;
    roundsPlayed++;
    resultMessage = `勝ち！${playerSelection}は${computerSelection}に勝ちました。`;
  } else {
    roundsPlayed++;
    resultMessage = `負け！${computerSelection}に${playerSelection}は負けました。`;
  }

  let computerHandElement = document.querySelector("#computer-hand");
  computerHandElement.src = computerHandImage;
  document.querySelector("#round-result").textContent = resultMessage;
  document.querySelector(
    "#total-wins"
  ).textContent = `累計${winCount}勝 / ${roundsPlayed}試合`;

  if (winCount >= 5) {
    document.querySelector("#total-wins").style.color = "green";
    document.querySelector("#total-wins").textContent +=
      "あなたはじゃんけんが強いです！";

    document.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  }
}

document.querySelector("#rock").addEventListener("click", () => {
  playRound("グー");
});

document.querySelector("#scissors").addEventListener("click", () => {
  playRound("チョキ");
});

document.querySelector("#paper").addEventListener("click", () => {
  playRound("パー");
});
