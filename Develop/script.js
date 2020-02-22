// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordNotValid = true;

function askForLowercase() 
{
  // Ask if they want lowercase letters in their password. 
  
  var includeLowercase = prompt("Do you want lowercase letters in your password?" + "\n" + "Enter a 'Y' for yes and 'N' for no.");
  alert("You entered the following for Lowercase: " + includeLowercase);
  
}

function getPasswordLength() 
{  /*  function getPasswordLength()      */
  // Prompt for length of password
  // Check the value to be greater than 8 and less than or equal to 128
  while (passwordNotValid) 
  { /* while loop */
    passwordLength = prompt("Please enter a value between 8 and 128.");
    if (passwordLength.length != 0 || passwordLength != null) 
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
    }  /* end of if check */
  }  /* end of while */
}   /* end of function getPasswordLength  */



// Write password to the #password input
function writePassword() 
{
  getPasswordLength();
  askForLowercase();
  alert("Back in writePassword");
  /* var password = generatePassword();  */
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
