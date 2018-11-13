$(document).ready(function () {
    console.log("ready!");

    possibleGuessArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    userGuessArray = [];
    correctGuessArray = [];



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
    var lettersOfWordArray = str.split("");
    console.log(lettersOfWordArray);


    for (var i = 0; i < lettersOfWordArray.length; i++) {
        jQuery('<div/>', {
            class: "blank-box",
            value: i,
            id: lettersOfWordArray[i]
        }).appendTo("#word-guessed");
    }

    var ids = [];
    $(".blank-box").each(function () { ids.push(this.id); });
    console.log("ids: " + ids);

    //if the letter guessed equals the id of the div, append the user guess to that div


    //event listener 
    document.onkeyup = function (event) {
        var userGuess = event.key;
        


        if (userGuessArray.includes(userGuess) || correctGuessArray.includes(userGuess)) {

            confirm("You have already guessed letter " + userGuess);

        } else {

            if (possibleGuessArray.includes(userGuess)) {
                if (word.includes(userGuess)) {

                   
                    console.log(userGuess + " is correct");
                    correctGuessArray.push(userGuess);
                    $("#" + userGuess).append(userGuess);
                    
                

                } else {
                    $("#guesses").append(userGuess + "-");
                    console.log("You guessed the wrong letter");
                    userGuessArray.push(userGuess);
                    console.log(userGuessArray);
                }


            } else {
                confirm(userGuess + "is not a valid guess. Please enter a letter!")
            }




        }//end of else for userGuessArray.includes(userGuess)

    } //document on key up

}); //document.ready


//next step will be to assign ids for each div that cooresponds to the letter that will go there