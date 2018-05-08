/*--------Global Variables -------*/
var countWins = 0;
var countGuesses = 0;
var countLetters=0;
var isLetter= 0; //Declaring variable to see if letter is in array (initializing the value to 0)
var limitGuesses=5; //Maximum number of guesses for the user
var arrMovies = ["die hard", "the transporter", "the dark knight", "a beautiful mind", "white chicks", "the shining", "paranormal activity", "american beauty"];
var arrGuesses = []; //stores letters guessed by the user into an array
var arrLetters= []; //stores the letters of the movie into an array
var arrLines = []; //stores the "_" into an array
var arrIndex =[]; //stores the letters entered into an array

/*--------Objects & Functions -------*/

// Function that selects a random movie from an array
    function selectMovie (arrRndMovie) {
        var elementInMovie = Math.floor(Math.random() * arrRndMovie.length);
        return (arrRndMovie[elementInMovie]);
    }

//Function that 1. splits strings into characters and returns them into an array. 2. Returns an array with the length into "_"
    function splitWords (wordString, arrWordCharts, arrLines) {
        //var numCharacters= wordString.length;
        for (i=0; i <wordString.length; i++) {
            arrWordCharts[i] = wordString.charAt(i);
            if (arrWordCharts[i] ===" ") {
                arrLines[i] = " - ";
            }
            else if (arrWordCharts[i]!==(arrWordCharts[arrWordCharts.length])) {
                arrLines[i] = " _ ";
            }
        }
        return arrWordCharts + arrLines;
    }
//Function that prints the name of the movie with "_" 
    function printLines (arrPrint) {
        for (i=0; i <arrPrint.length; i++) {
        document.write(arrPrint[i]);
        }
        return arrPrint;
    }
//function that verifies if letter is in array and returns how many times and index of elements
    function findLetter (arrFind, letter, arrIndexOfGuessedLetters) {
                    
        for (i=0; i <arrFind.length; i++) {
            if (letter.toLowerCase()===arrFind[i]) {
                countLetters+=1;
                arrIndexOfGuessedLetters [i]= i;
                var isLetter =1;
            }
            else {
                var isLetter=0;
                
            }
           
        }
        console.log (countLetters);
        return arrIndexOfGuessedLetters;
    }


/*--------Calls -------*/		

//start
var varSelectMovie= selectMovie (arrMovies);
console.log(varSelectMovie);
splitWords (varSelectMovie, arrLetters, arrLines);
console.log(arrLetters);
console.log(arrLines);

var newP= document.getElementById ("instructions");
var newText = document.createTextNode("Instructions: Press a letter, you have 5 opportunities to guess the name of the movie");
newP.appendChild(newText);


//Display initial lines for the selected movie
var displayLines="<p><strong>";
for (var j=0; j <arrLines.length; j++) {
    displayLines+= arrLines[j];          
}
displayLines+="</strong></p>";
document.getElementById("displayLines").innerHTML=displayLines;

//Display initial text for game record "Letters already guessed: "
var pressedLetter = document.getElementById("pressed_key");
pressedLetter.textContent= "Letters already guessed: ";
console.log (pressedLetter);
var element = document.getElementById("container");
element.appendChild(pressedLetter);
console.log (element);

//Display initial text for game record "Wins: "
var winsText = document.getElementById("wins");
winsText.textContent= "Wins: ";
console.log (winsText);
var element2 = document.getElementById("container");
element.appendChild(winsText);
console.log (element);

//Display initial text for game record "# of Guesses Remaining "
var guessNumText = document.getElementById("guess");
guessNumText.textContent= "# Guesses remaining: ";
console.log (guessNumText );
var element3 = document.getElementById("container");
element.appendChild(guessNumText );
console.log (element);

 for (var l=0; l<=limitGuesses; l++) {
    countGuesses+=1;
    document.onkeyup = function (event) {
        var newLetter = event.key.toLowerCase();
        findLetter (arrLetters, newLetter, arrIndex);
        console.log(arrLetters+ " new Letter "+ newLetter+ " Num of Letters"+  countLetters+ " Index: "+  arrIndex);
        pressedLetter += newLetter;
        console.log(pressedLetter);
        //element.appendChild(pressedLetter);

        //trying to replace the letter with arrIndex which contains the index where the letter appears
        displayLines="<p><strong>";
         for (var m=0; m <arrLines.length; m++) {
            
        }
         displayLines+="</strong></p>";
        //document.getElementById("displayLines").innerHTML=displayLines;

        //Append countGuesses to #Guesses reamining text in HTML


        //
    }
}