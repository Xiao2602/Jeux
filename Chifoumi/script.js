function playGame(playerChoice) {
  var choices = ["Pierre", "Feuille", "Ciseaux"];
  var computerChoice = choices[Math.floor(Math.random() * 3)];

  var result = "";

  if (playerChoice === computerChoice) {
    result = "C'est une égalité !";
  } else if (
    (playerChoice === "Pierre" && computerChoice === "Ciseaux") ||
    (playerChoice === "Feuille" && computerChoice === "Pierre") ||
    (playerChoice === "Ciseaux" && computerChoice === "Feuille")
  ) {
    result = "Vous avez gagné !";
  } else {
    result = "Vous avez perdu !";
  }

  document.getElementById("result").innerText =
    "Choix de l'ordinateur : " + computerChoice + ". " + result;
}
