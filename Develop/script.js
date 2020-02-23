// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordNotValid = true;
var newPassword = "";
var includeNumbers = false;
var allNumbers = "0123456789";
var masterArray = "";

function askForLowercase() {
  // Ask if they want lowercase letters in their password. 
  var includeLowercase = confirm("Do you want lowercase letters in your password?" + "\n" + "Click Ok for yes and Cancel for no.");
  alert("You entered the following for Lowercase: " + includeLowercase); 
  
}

function askForUppercase() {
  // Ask if they want uppercase letters in their password. 
  
  var includeUppercase = confirm("Do you want uppercase letters in your password?" + "\n" + "Click Ok for yes and Cancel for no.");
  alert("You have entered the following for Uppercase: " + includeUppercase); 
  
}

function askForNumbers() {
  // Ask if they want numbers in their password. 
  
  var includeNumbers = confirm("Do you want numbers in your password?" + "\n" + "Click Ok for yes and Cancel for no.");
  alert("You have entered the following for numbers: " + includeNumbers);    
  return includeNumbers;
  
} 

function askForSpecChars() {
  // Ask if they want special characters in their password.

  var includeSpecChars = confirm("Do you want special characters in your password?" + "\n" + "Click Ok for yes and Cancel for no.");
  alert("You have entered the following for special characters: " + includeSpecChars);

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

function generatePassword() {
  // Generate password and create master array from choices.  

    alert("includeNumbers is set to: " + includeNumbers);
    if (includeNumbers ==  true) {
            var num1 = Math.floor(Math.random() * 10);
            newPassword = newPassword.concat(allNumbers.charAt(num1));
            masterArray = allNumbers.split("");
            alert(newPassword);
            alert(masterArray);
    }

} /* end of generate Password function */

// Write password to the #password input
function writePassword() {
    
    getPasswordLength();
    askForLowercase();
    askForUppercase();
    includeNumbers = askForNumbers();
    askForSpecChars();
    generatePassword();
     
    alert("Back in writePassword");
    /* var password = generatePassword();  */
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);