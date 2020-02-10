// Assignment Code
var generateBtn = document.querySelector("#generate");

// my variables
var lowerCase =  "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacter = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
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

  var password = generatePassword(lowerCase, upperCase, numbers, specialCharacter);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  
if (lowerCase) {
  password += lowerCase;
}
if (upperCase) {
  password += upperCase;
}
if (numbers) {
  password += numbers;
}
if (specialCharacter) {
  password += specialCharacter;
}
//passwordLength = Number(passwordText.value);
for (var i = 0; i < password.length; i++) {
  password += password;
  
}

}
// for (let i = 0; i < password.length; i++) {
//   password += passwordCharSet;
  
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);












//copied from internet
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
//delete the closing curly bracket
}
