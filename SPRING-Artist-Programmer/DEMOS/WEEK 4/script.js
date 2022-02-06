
let firstName = "Justin";
let lastName = "Elm";

console.log("What is first name?", firstName)
console.log("What is last name?",lastName)

console.log( typeof( firstName ) )

let num = 55;
console.log(typeof(num))

//
// Declare our variables
let age = 33;
let minAgeToVote = 18;

// If statement
// if age is greater than min age to vote, return true
// Anything in the curly brackets will run, if true
// true = boolean

if ( 33 > 18 ) {
  console.log("Justin Elm can vote!");
}

if ( age > minAgeToVote ) {
  console.log(firstName, lastName, "can vote!");
}

if( true ) {
  console.log("this is always true");
}

// for loop does the same thing over and over again
// until the control structure is no longer true
// for( this is my control structure  ) {
//
// }

// ++ means increment by 1
// for( var count = 0; count < 50; count++ ) {
//   console.log(count)
// }

// user and password are paramters
// This function, expects us to give it these parameters whenever we call it
function checkPassword(user, password) {
  // console.log(user)
  // console.log(password)

  if(password === "very-cool-password") {
    console.log("Welcome", user)
  }

}

// This invokes our function
// user=jelm ; password=very-cool-password
checkPassword("jelm", "very-cool-password");
