$(document).ready(function () {
    console.log("ready!");

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
        $("#word-guessed").append("<div>hello</div>")
    }

    //event listener 
    document.onkeyup = function (event) {
        var userGuess = event.key;


        console.log(userGuess);
        $("#guesses").append(userGuess + "-");


        for (var i = 0; i < array.length; i++) {
          

            // console.log(array.length);
            if (userGuess === array[i]) {
                console.log(userGuess + " is correct");
            } else {
               
                
                console.log("You guessed the wrong letter")}

        }














    }//on key up



}); //doc.ready function