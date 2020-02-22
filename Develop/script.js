// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordNotValid = true;

function askForLowercase() {
  // Ask if they want lowercase letters in their password. 
  var includeLowercase = prompt("Do you want lowercase letters in your password?" + "\n" + "Enter a 'Y' for yes and 'N' for no.");
  /* alert("You entered the following for Lowercase: " + includeLowercase);  */
}

function askForUppercase() {
  // Ask if they want uppercase letters in their password. 
  
  var includeUppercase = prompt("Do you want uppercase letters in your password?" + "\n" + "Enter a 'Y' for yes and 'N' for no.");
  /* alert("You have entered the following for Uppercase: " + includeUppercase);  */
  
}

function askForNumbers() {
  // Ask if they want numbers in their password. 
  
  var includeNumbers = prompt("Do you want numbers in your password?" + "\n" + "Enter a 'Y' for yes and 'N' for no.");
  /* alert("You have entered the following for numbers: " + includeNumbers);    */
  
}
function getPasswordLength() {  /*  function getPasswordLength()      */
  // Prompt for length of password
  // Check the value to be greater than 8 and less than or equal to 128
  while (passwordNotValid) 
  { /* while loop */
    passwordLength = prompt("Please enter a value between 8 and 128.");
    if (passwordLength.length != 0 && passwordLength != null) 
    {   /* if not 0 or null */
        if (passwordLength < 8) 
        {  /* if < 8  */
          alert("Password length must be greater than 8.");   
        }  /* end of if < 8  */
        else if (passwordLength > 128) 
        {   /* else if > 128  */
          alert("Password length must be less than 128.");
        }  /* end of else if */
        else 
        {    /* else */
          alert("Password length has passed.");
          passwordNotValid = false;
        }  /* end of else */
    } else /* end of if check */ 
      alert("Goodbye!!!!!");
      passwordNotValid = false;
  }  /* end of while */
}   /* end of function getPasswordLength  */

// Write password to the #password input
function writePassword() {
  getPasswordLength();
  askForLowercase();
  askForUppercase();
  askForNumbers();
  alert("Back in writePassword");
  /* var password = generatePassword();  */
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);