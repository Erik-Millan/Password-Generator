// Input variables
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var Special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function criteria() {
  // User is presented with conditional statements to create a criteria
  var ask = false;
  // "do- while" creates a loop statement that reads every single line at least once or until proven false
  do {
    var length = prompt("Password length must between 8 and 128 characters!");
    var askLower = confirm("Would you like to include lower case letters?")
    var askUpper = confirm("Would you like to include upper case letters?")
    var askNumber = confirm("Would you like to include numbers?")
    var askSpecial =confirm("Would you like to include special characters?")
    var respond = {
      length: length,
      askLower: askLower,
      askUpper: askUpper,
      askNumber: askNumber,
      askSpecial: askSpecial
    }
    if(length < 8) {
      alert("Choose a number between 8 and 128");
    } else if (length > 128) {
      alert("Choose a number between 8 and 128");
    }

    else if ((!askLower)&&(!askUpper)&&(!askNumber)&&(!askSpecial))
    alert("You must choose at least one type.");

    else
    ask = true

  } while(!criteria);
  return respond;
}
// Adds all selected criteria options from before and creates a randomized password.
function generatePassword() {
  var generator = criteria();
  var options = [];
  var final = "";
  // Use the push function to add new variables in the array
  if(generator.askLower) {
    for(var i of Upper)
    options.push(i);
  }
  
  if(generator.askUpper) {
    for(var i of Lower)
    options.push(i);
  }
  
  if(generator.askNumber) {
    for(var i of number)
    options.push(i);
  }
  
  if(generator.askSpecial) {
    for(var i of Special)
    options.push(i);
  }
  // Generate random characters *Credit to https://www.generacodice.com/en/articolo/411905/Generate-random-stringcharacters-in-JavaScript*
  for(var i = 0; i < generator.length; i++) {
    final += options[Math.floor(Math.random() * options.length)];
  }
  return final;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);