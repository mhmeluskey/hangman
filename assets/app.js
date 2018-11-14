$(document).ready(function () {


  


    console.log("ready!");

    possibleGuessArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    userGuessArray = [];
    correctGuessArray = [];
    htmlGuesses = 10; 
    losses = 0;
    wins = 0;



    var randomWords = [
        "dog",
        "cat",
        "america",
        "bootcamp",
        "javascript",
        "philadelphia",
        "president",
        "accountant",
        "web",
        "designer",
        "digital",
        "html",
        "react",
        "mysql",
        "jquery",
        "winter",
        "spring",
        "computer",
        "mac",
        "windows",
        "mouse",
        "display",
        "adobe",
        "photoshop",
        "finalcut",

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
            class: lettersOfWordArray[i],
            id: "blank-box" //not right to have multiple divs with same id, unsure about how to fix this but app is still working like i want it to
        }).appendTo("#word-guessed");
    }



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
                    $("." + userGuess).append(userGuess);

                    
    
                } else {
                    $("#guesses").append(userGuess + "-");
                    console.log("You guessed the wrong letter");
                    userGuessArray.push(userGuess);
                    console.log(userGuessArray);
                    $("#losses").html("Losses: " + ++losses);
                    $("#chances").html("Guesses: " + --htmlGuesses);
                    //build man here on each
                        switch (htmlGuesses ){
                            case 9:
                            $("#floor").show();

                            break;
                          
                            case 8:
                             $("#side").show();

                             break;
                            case 7:
                             $("#top").show();

                             break;

                            case 6:
                             $("#rope").show();

                             break;

                            case 5:
                             $("#head").show();

                             break;

                            case 4:
                             $("#body").show();

                             break;

                             case 3:
                             $("#left-arm").show();

                             break;

                             case 2:
                             $("#right-arm").show();

                             break;

                             case 1:
                             $("#left-leg").show();

                             break;

                             case 0:
                             $("#right-leg").show();

                             break;

                             default:
                             console.log(htmlGuesses);
                        }

                    if (userGuessArray.length >= 10) {
                        console.log("Game Over")
                        displayModal();
                      


                    }
                }


            } else {
                confirm(userGuess + "is not a valid guess. Please enter a letter!")
            }

$("#new-game").click(function () {
    location.reload();
});


        }//end of else for userGuessArray.includes(userGuess)

    } //document on key up



    // Get the modal
var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
function displayModal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


}); //document.ready


//next step will be to assign ids for each div that cooresponds to the letter that will go there