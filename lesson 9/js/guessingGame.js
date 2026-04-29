var computer = new Number;
var tries = new Number(0);

document.getElementById("getNumber").addEventListener("click", function () {
    tries = 0;
    document.getElementById("guess").value = "";
    document.getElementById("tries").value = tries;
    computer = Math.floor((Math.random() * 100) + 1);

    console.info("New game started. Computer number generated.");

    document.getElementById("comments").value =
        "I have a number and I am waiting for you to guess it";
});

document.getElementById("checkGuess").addEventListener("click", function () {
    try {
        var guessInput = document.getElementById("guess").value;
        var guess = Number(guessInput);

        console.info("User's guess: " + guessInput);
        console.count("Guess attempts");

        if (guessInput.trim() === "") {
            throw "You must enter a number!";
        }

        if (isNaN(guess)) {
            throw "That is not a valid number!";
        }

        if (guess < 1 || guess > 100) {
            throw "Your guess must be between 1 and 100!";
        }

        tries++;
        document.getElementById("tries").value = tries;

        if (computer == guess) {
            document.getElementById("comments").value =
                "You guessed correctly - congratulations! It only took " + tries + " tries!";
        } else if (computer < guess) {
            document.getElementById("comments").value =
                "Your guess is too high, try again!";
        } else {
            document.getElementById("comments").value =
                "Your guess is too low, try again!";
        }

    } catch (error) {
        tries++;
        document.getElementById("tries").value = tries;

        document.getElementById("comments").value = error;
        document.getElementById("guess").value = "";

        console.error("Input error: " + error);
    }
});