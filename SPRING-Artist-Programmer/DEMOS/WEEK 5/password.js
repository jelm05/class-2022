
function generatePassword() {

  // Where we store our generated password:
  let password = [];

  // Length of password
  let passwordLength = 10;

  // Characters to choose from to generate our password
  let characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12356789!@#$%^&";

  // We need to choose a random character, from our characterSet, and
  // save that charaacter in our password array, 10 times

  // ++ increments a number by 1
  for(let count = 0; count < passwordLength; count++ ) {
    let randomNumber = Math.floor(Math.random() * characterSet.length)
    // console.log( characterSet[randomNumber] )
    password.push( characterSet[randomNumber] )
  }
  // console.log("password array", password)
  // console.log("password joined", password.join('') )

  document.getElementById("password-holder").innerHTML = password.join('')

}

// invoke generatePassword when the user clicks the button
// document holds all the HTML
// onclick is an event handler
document.getElementById("password-generator").onclick = generatePassword;
