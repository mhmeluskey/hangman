$(document).ready(function () {
    console.log("ready!");

    possibleGuessArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    userGuessArray = [];


    var randomWords = [
        "dog",
        "cat",
        "america",
        "bootcamp",
        "javascript",
        "philadelphia"
    ]
    var word = randomWords[Math.floor(Math.random() * randomWords.length)]; {
        console.log(word);
    }
    var amount = word.length;
    console.log(amount);

    $("#display-word").on("click", function (event) {
        $("#word").html("New Word is: " + amount + " letters long.")
    })


    var str = word;
    var array = str.split("");
    console.log(array);





    for (var i = 0; i < array.length; i++) {
        jQuery('<div/>', {
            class: "blank-box"
        }).appendTo("#word-guessed");


    }
    //event listener 
    document.onkeyup = function (event) {
        var userGuess = event.key;
        console.log(userGuess);


        if (userGuessArray.includes(userGuess)) {

            confirm("You have already guessed letter " + userGuess);

        } else {
            if (possibleGuessArray.includes(userGuess)) {
                if (word.includes(userGuess)) {
                    console.log(userGuess + " is correct");
                    var correctLetter = userGuess;
                    console.log(correctLetter);
                } else {
                    $("#guesses").append(userGuess + "-");
                    console.log("You guessed the wrong letter");
                    userGuessArray.push(userGuess);
                    console.log(userGuessArray);
                }


            } else {
                confirm(userGuess + "is not a valid guess. Please enter a letter!")
            }

        } //end of else for userGuessArray.includes(userGuess)

    } //document on key up

}); //document.ready


//next step will be to assign ids for each div that cooresponds to the letter that will go there