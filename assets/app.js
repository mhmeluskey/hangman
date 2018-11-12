//1. generate a random word
//get the number of letters in that word and post that amount of spaces to the doc


//2. event listener for hitting a specific key
//print that letter to the doc

//3. if that letter is in the chosen word then put it in the div with where the chosen word will be 
//if not put it to the letter guesses div

//function to generate random word 

$( document ).ready(function() {
    console.log( "ready!" );

function newWord() {
    var randomWords = [
        "dog",
        "cat",
        "trump",
        "bootcamp",
        "javascript",
        "philadelphia"
    ]
    var word = randomWords[Math.floor(Math.random() * randomWords.length)]; {
        console.log(word);
    }
   var amount = word.length;
    console.log(amount);
    
    $("#display-word").on("click", function(event) {
    $("#word").html("New Word is: " + amount + " letters long.")
})
    
//listener for letter guesses
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    $("#guesses").append(userGuess + "-");

var str = word; 
var array = str.split("");
console.log(array);

    for (var i = 0; i < array.length; i++) {
   
        console.log(array.length); 
     if (userGuess === i){
         console.log("The letter" + userGuess + "is in the word");
     } else {
        console.log("The letter" + userGuess + "is NOT in the word");
     }
    
    }

}//on key up



   





}; //newWord function 


newWord();








});