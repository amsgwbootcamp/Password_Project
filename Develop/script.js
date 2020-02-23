// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordNotValid = true;
var newPassword = "";
var passwordLength = 0;
var includeNumbers = false;
var includeLowercase = false;
var includeUppercase = false;
var includeSpecChars = false;
var allNumbers = "0123456789";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var masterArray = "";
var randomArray = "";

function askForLowercase() {
  // Ask if they want lowercase letters in their password. 
  var includeLowercase = confirm("Do you want lowercase letters in your password?" + "\n" + "Click Ok for yes and Cancel for no.");
  alert("You entered the following for Lowercase: " + includeLowercase); 
  return includeLowercase;
}

function askForUppercase() {
  // Ask if they want uppercase letters in their password. 
  
  var includeUppercase = confirm("Do you want uppercase letters in your password?" + "\n" + "Click Ok for yes and Cancel for no.");
  alert("You have entered the following for Uppercase: " + includeUppercase); 
  return includeUppercase;
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
  return includeSpecChars;
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
  return passwordLength;
}   /* end of function getPasswordLength  */

function generatePassword() {
  // Generate password and create master array from choices.  

    alert("includeNumbers is set to: " + includeNumbers);
    if (includeNumbers ==  true) {
        var num1 = Math.floor(Math.random() * 10);
        newPassword = newPassword.concat(allNumbers.charAt(num1));
        masterArray = masterArray.concat(allNumbers);
        alert("New Password is: " + newPassword);
        alert("MasterArray now contains: " + masterArray);
    }

    alert("includeLowercase is set to: " + includeLowercase);
    if (includeLowercase == true) {
        var num2 = Math.floor(Math.random() * 26);
        newPassword = newPassword.concat(lowercaseLetters.charAt(num2));
        masterArray = masterArray.concat(lowercaseLetters);
        alert("New Password is: " + newPassword);
        alert("MasterArray now contains: " + masterArray);
    }

    alert("includeUppercase is set to: " + includeUppercase);
    if (includeUppercase == true) {
        var num3 = Math.floor(Math.random() * 26);
        newPassword = newPassword.concat(uppercaseLetters.charAt(num3));
        masterArray = masterArray.concat(uppercaseLetters);
        alert("New Password is: " + newPassword);
        alert("MasterArray now contains: " + masterArray);
    }

    alert("includeSpecChars is set to: " + includeSpecChars);
    if (includeSpecChars == true) {
        var num4 = Math.floor(Math.random() * 32);
        newPassword = newPassword.concat(specialCharacters.charAt(num4));
        masterArray = masterArray.concat(specialCharacters);
        alert("New Password is: " + newPassword);
        alert("MasterArray now contains: " + masterArray);
    }
    randomArray = masterArray.split("");
    alert("Random Array has: " + randomArray);

} /* end of generate Password function */

// Write password to the #password input
function writePassword() {
    
    passwordLength = getPasswordLength();
    includeLowercase = askForLowercase();
    includeUppercase = askForUppercase();
    includeNumbers = askForNumbers();
    includeSpecChars = askForSpecChars();
    generatePassword();
     
    alert("Back in writePassword");
    /* var password = generatePassword();  */
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);