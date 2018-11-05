//1. generate a random word
//get the number of letters in that word and post that amount of spaces to the doc


//2. event listener for hitting a specific key
//print that letter to the doc

//3. if that letter is in the chosen word then put it in the div with where the chosen word will be 
//if not put it to the letter guesses div

//function to generate random word 


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
    


}; //newWord function 


newWord();



//listener for letter guesses
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    $("#guesses").append(userGuess + "-");
}//on key up
