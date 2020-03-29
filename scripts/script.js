// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var resetBtn = document.querySelector("#reset");
var passwordNotValid = true;
var passwordIsGood = true;
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

function askForLowercase() {
  /* Ask if they want lowercase letters in their password.    */ 
  var includeLowercase = confirm("Do you want lowercase letters in your password?" + "\n" + "Click Ok for yes and Cancel for no.");
  return includeLowercase;
}

function askForUppercase() {
  /* Ask if they want uppercase letters in their password.  */ 
  var includeUppercase = confirm("Do you want uppercase letters in your password?" + "\n" + "Click Ok for yes and Cancel for no.");
  return includeUppercase;
}

function askForNumbers() {
  /*  Ask if they want numbers in their password.   */
  var includeNumbers = confirm("Do you want numbers in your password?" + "\n" + "Click Ok for yes and Cancel for no.");
  return includeNumbers;
  
} 

function askForSpecChars() {
  /* Ask if they want special characters in their password.    */
  var includeSpecChars = confirm("Do you want special characters in your password?" + "\n" + "Click Ok for yes and Cancel for no.");
  return includeSpecChars;
}

function getPasswordLength() 
{
  /*  Prompt for length of password      
   Check the value to be greater than 8 and less than or equal to 128  */
  while (passwordNotValid) 
  { 
    passwordLength = prompt("Please enter a value between 8 and 128.");
    if ((passwordLength.length != 0) && (passwordLength != null) && (!isNaN(passwordLength)))
    {
        if (passwordLength < 8) 
        {  
          alert("Password length must be greater than 8.");   
        } 
        else if (passwordLength > 128) 
        {
            alert("Password length must be less than 128.");
        } 
        else 
        {
          passwordNotValid = false;
          passwordIsGood = true;
        }   
    }
    else  
    { 
        passwordNotValid = false;
        passwordIsGood = false;  
    }
  }
  return passwordLength;
}   

function generatePassword() {
  /* Generate password and create master array from choices.  */ 
    
    if (includeNumbers ==  true) {
        var num1 = Math.floor(Math.random() * 10);
        newPassword = newPassword.concat(allNumbers.charAt(num1));
        masterArray = masterArray.concat(allNumbers);
    }

    if (includeLowercase == true) {
        var num2 = Math.floor(Math.random() * 26);
        newPassword = newPassword.concat(lowercaseLetters.charAt(num2));
        masterArray = masterArray.concat(lowercaseLetters);
    }

    if (includeUppercase == true) {
        var num3 = Math.floor(Math.random() * 26);
        newPassword = newPassword.concat(uppercaseLetters.charAt(num3));
        masterArray = masterArray.concat(uppercaseLetters);
    }

    if (includeSpecChars == true) {
        var num4 = Math.floor(Math.random() * 32);
        newPassword = newPassword.concat(specialCharacters.charAt(num4));
        masterArray = masterArray.concat(specialCharacters);
    }
    
    for (;newPassword.length < passwordLength;) {
        var num5 = Math.floor(Math.random() * masterArray.length-1);
        newPassword = newPassword.concat(masterArray.charAt(num5));
    }
    return newPassword;

} 

function resetScreen() {
  passwordNotValid = true;
  passwordIsGood = true;
  newPassword = "";
  passwordLength = 0;
  includeNumbers = false;
  includeLowercase = false;
  includeUppercase = false;
  includeSpecChars = false;
  passwordText.value = "Your Secure Password";
}

function writePassword() {
    /*  Master Driver for creating the password */
    passwordLength = getPasswordLength();

    if (passwordIsGood) {
      counter = 0;
      includeLowercase = askForLowercase();
      includeUppercase = askForUppercase();
      includeNumbers = askForNumbers();
      includeSpecChars = askForSpecChars();
      if (includeLowercase == true || includeUppercase == true 
          || includeNumbers == true || includeSpecChars == true) {
            password = generatePassword();
      }
    } 
      
    if (password.length > 7) {  
        passwordText.value = password;
    } else {
        passwordText.value = "No Password Could Be Generated";
    }
}

/* Add event listener to generate button   */
generateBtn.addEventListener("click", writePassword);

/* Add event listener to reset button   */
resetBtn.addEventListener("click", resetScreen);