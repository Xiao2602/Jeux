function playGame(playerChoice) {
  var choices = ["rock", "paper", "scissors"];
  var computerChoice = choices[Math.floor(Math.random() * 3)];

  var result = "";

  if (playerChoice === computerChoice) {
    result = "C'est une égalité !";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Vous avez gagné !";
  } else {
    result = "Vous avez perdu !";
  }

  document.getElementById("result").innerText =
    "Choix de l'ordinateur : " + computerChoice + ". " + result;
}
