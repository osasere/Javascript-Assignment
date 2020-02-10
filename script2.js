var generateBtn = document.querySelector("#generate");

// my variables
// var lowerCase =  "abcdefghijklmnopqrstuvwxyz";
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numbers = "0123456789";
// var specialCharacter = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var passwordMin = 8;
var passwordMax = 120;
var userPassword;
var passwordLength;
var passwordCharSet;
var pass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";





// Write password to the #password input
function writePassword() {
  //var passwordLength = "";
  var passwordCharSet = "";
  var userPassword = "";

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  for ( i = 0; i < pass.length; i++) {
      //const element = array[index];
      passwordCharSet += pass.charAt(Math.random()*pass.length)
      return passwordCharSet
  }
}