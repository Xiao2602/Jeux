document.addEventListener("DOMContentLoaded", function () {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  const guessInput = document.getElementById("guessInput");
  const submitGuessButton = document.getElementById("submitGuess");
  const messageElement = document.getElementById("message");

  submitGuessButton.addEventListener("click", function () {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      showMessage("Veuillez entrer un nombre valide entre 1 et 100.");
      return;
    }

    attempts++;

    if (userGuess === secretNumber) {
      showMessage(
        `Bravo ! Vous avez deviné le nombre en ${attempts} ${
          attempts === 1 ? "essai" : "essais"
        }.`,
        "success"
      );
      disableInputAndButton();
    } else {
      const hint = userGuess < secretNumber ? "Trop bas" : "Trop haut";
      showMessage(`${hint}. Essayez à nouveau.`, "error");
    }
  });

  function showMessage(text, messageType = "default") {
    messageElement.textContent = text;
    messageElement.className = messageType;
  }

  function disableInputAndButton() {
    guessInput.disabled = true;
    submitGuessButton.disabled = true;
  }
});
