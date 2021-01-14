//  1  
// Here we ask the user if they eat fish, and store the result (true/false) in a variable.
//  var eatFish= prompt("Do you eat fish?"); 
// If the user eats fish (eatFish === true) doument.write, "Fish is rich in B12".
// If the above condition isn't met (eatFish !== true), doument.write, "You must be a meateater".

var eatFish= prompt("Do you eat fish?");

if (eatFish === "yes" || "Yes") {
    document.write("Fish is rich in B12" + "<br>")
} 
else {
    document.write("You must be a meat eater!" + "<br>")
};


// 2
// Ask the user what year they were born, and store their response to a variable.

var birthYear= prompt("What year were you born?");
// If the user was born before 1997, alert "You are in Generation Z"
if (birthYear > 1997 || birthYear > 2020) {
    alert("You are in Gen Z")
// Else if the user was born after 1997, alert "You are a millennial!"
} else if (birthYear < 1997 || birthYear > 1980) {
    alert("You are a millennial")
// If neither of the previous conditions was true (birthYear === 1995) we alert "You inched by!"
} else {
    alert("you inched by")
};






// 3//

// Create an array called  animals.
var animals = ["bird", "cat", "dog", "hamster", "turtle", "fish"];
// Log the length of the  animals array to the document
document.write(animals.length + "<br>");
console.log(animals);

// Log the animal cat.
var cat = animals[1];
console.log(cat);

// Log the animal dog.
var dog = animals[2];
console.log(dog);


// Log the animal bird.
var bird = animals[0];
console.log(bird);

// Log the animal[13]. //what result do you get?
//I get undefined as there are only 6 items in the array.
var animal13 = animals[13];
console.log(animal13);


// Add an new animal to the [2] position of the array with out changing the array
animals.splice(2, 0, "Squirrel");




//4//

// Created an array named myBands.
let myBands = ["eminem", "aloe blacc", "marshmello", "ed sheeran"];

// Created a prompt to get the user's favorite band.
let favBand = prompt("Who is your favorite band?");

// Converts the user'sqwewq answer to lowercase.
var lowerCase = favBand.toLowerCase(); 

// Now we check the myBands array to see if it contains the user's answer.
// If the user's band is not in the array...
//  if (myBands.indexOf(userGuessLower) === -1) {
if (myBands.indexOf(lowerCase) === -1) {
    alert("They're alright...");
// If it is in the array...
}else {
    alert("Great Choice!");
}

//5//

// song-object
// Create a constructor function called Song. Song should take in two arguments, title and artist, 
// which should both be added as properties when the Song constructor function is used. 
//The Song function should also have a method called play on its prototype. 
//When called, the play function should console.log the name of that specific song preceded by the word 'Playing:'.
function Song(title, artist) {
    this.title= title;
    this.artist= artist;
}

Song.prototype.play = function() {
    document.write("Playing: " + this.title + this.artist)
}

var song1 = new Song('Aloe Blacc, ', 'Wake Me Up' + '<br>');
var song2 = new Song('Eminem, ', 'Rap God' + '<br>');
var song3 = new Song('Ed Sheeran, ', 'Lego House' + '<br>');
var song4 = new Song('Marshmello, ', 'Alone' + '<br>');

song1.play();
song2.play();
song3.play();
song4.play();



// // The constructor function
// function Movie(title, year, genre, cast) {
//     this.title= title;
//     this.year= year;
//     this.genre= genre;
//     this.cast=[cast]; 
//   }
//   // A method on the object //function in an object 
//   Movie.prototype.read= function() {
//     document.write("Title " + this.title + "Year " + this.year + "Genre " + this.genre + "Actors: " + this.cast)
//   }
//   // // Instantiating a new object
//   var movie1= new Movie ("The Color Purple", 1982, "Drama", ["whoopi", "oprah"]);
//   movie1.read(); 
//   var movie2= new Movie ("The Color Purple", 1982, "Drama", ["whoopi", "oprah"]);
//   movie2.read(); 
//   var movie3= new Movie ("The Color Purple", 1982, "Drama", ["whoopi", "oprah"]);
//   movie3.read();



/*6//
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them.

// // Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)


NOTE: always look at the test results to see further details about what the test is expecting.
For example, the tests require that to complete this challenge, your function must return
0 if the input is empty. Please see the README file for an explanation of how to expand the test
results on the index page in the browser.
*/
var x = sum(1, 2, 3);
console.log(x);

function sum(a, b, c) {
    return a + b + c;
}







//7/*
// ----------------------------------------
// CHALLENGE
// ----------------------------------------

// Write function named doubleLetters that will take a string and double every letter in the string 
// Example: if you pass it "abc" then it should return "aabbcc"
var doubles = "abcdef";

function doubleLetters(doubles) {

    var output = "";

    for (var i = 0; i < doubles.length; i++) {
        output += doubles[i] + doubles[i];
    }
    return output;

}

console.log(doubleLetters(doubles));

// Taking a string "gfg"
// Repeating the string multiple times 
var multipleString = "gfg"
console.log(multipleString.repeat(5)); 







/*8//
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

// Example: if you pass it [1,2,3] then it should return [2,4,6]
*/


let numbers = [1, 2, 3];

// .map method creates a new array populated with the results
// of calling a provided function on every element in the calling array.


function doubleNumbers(numbers) {
    return numbers.map(x => x * 2); 
}

console.log(doubleNumbers(numbers));


// ʘ‿ʘ



