function registerName() {
    console.log("Asking for name and give greeting");
    let person = prompt("Type your name", "name");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hey " + person + "! Welcome to The Number Game.";
    }
}

function startGuessing() {
    console.log("Asking for a number");
    let enterNumber = prompt("Enter a number betrween 9 and 25 to start guessing...", "0-25");
    let chosenNumber = parseInt(enterNumber);
    if (chosenNumber >= 1 && chosenNumber <= 25) {
        getRandomNumber();
        window.location.href = "generatedNumber.html";
    }
    window.location.href = "validNumber.html";
}

function getRandomNumber() {

    let generatedNumber = Math.floor((Math.random() * 26) + 1);
    alert("The right number was....");
    alert(generatedNumber);


    if (generatedNumber === chosenNumber) {
        window.location.href = "youWon.html"
    }

    window.location.href = "tryagain.html";
}
