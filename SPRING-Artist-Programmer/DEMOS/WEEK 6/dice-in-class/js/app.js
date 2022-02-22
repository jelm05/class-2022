// Creating a page where every time the user hits the "Roll Dice" button,
// the screen randomly updates the two dice. Use the HTML & CSS included in the starter code
// folder to get started. Do NOT modify the HTML or CSS.

// 1) Write the following program:
// * Generate a random number between 1 - 6 inclusive and store to a variable, randomOne
//     * Hint: Look at the Math.random() documentation on MDN for a function that does this
// * Generate a random number between 1 - 6 inclusive and store to a variable, randomTwo

function diceRoll() {

    // Generate a random number inclusively between min and max params
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Store our random numbers in a variable
    let firstRandom = getRandomInt(1, 6);
    let secondRandom = getRandomInt(1, 6);

    // Create new classes by concatenating strings
    let firstDie = "dice-" + firstRandom;
    let secondDie = "dice-" + secondRandom;

    // Find our HTML elements, and update their classes
    document.getElementById('first-die').className = firstDie;
    document.getElementById('second-die').className = secondDie;

    // console.log("first die class", document.getElementById('first-die').className)


}

// Find the button on our document, attach a click event to invoke diveRoll function
let button = document.getElementById('roll-dice');
button.addEventListener("click", diceRoll);




// console.log("firstRandom", firstRandom)
// console.log("secondRandom", secondRandom)
// console.log("firstDie", firstDie)
// console.log("secondDie", secondDie)


// * Combine 'dice-' and randomOne to form the random class for the first die, `firstDie`
//     * Hint: Take a look at the class set, in index.html, on the elements for the dice
//     * Hint: Take a look at the CSS rules that have .dice-1, .dice-2, etc as their selector
// * Combine 'dice-' and randomTwo to form the random class for the second die, `secondDie`
// * Get the first die by id and update its class to `firstDie`
//     * Hint: document.getElementById to get the die by id
//     * Hint: Use the className property once you have the die, and set it equal to `firstDie`
// * Get the second die by id and update its class to `secondDie`

// 2) Listen for clicks on the `Roll the Dice` button. On click, run the code to
// update the dice on the page using the code from the first part.
//     * Hint: You'll want to wrap the code from the first part in a function.
//     * Hint: What method can you use to select the `Roll the Dice` button based on its id?
//     * Hint: You'll need to use onclick to listen for clicks on the button
