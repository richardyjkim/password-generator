// Assignment Code
let generateBtn = document.querySelector("#generate");
// Setting
let plength = Number(prompt ("How many characters would you like your password to be?"));
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let number = "1234567890"
let special = "~!@#$%^&*()_+"
let password = "";
let pSelction = "";
let cap = false;
let low = false;
let num = false;
let spec = false;
let firstTime = true;

while (isNaN(plength) || plength < 8 || plength > 128) plength = 
  Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

while (!cap && !low && !num && !spec) {
  if (!firstTime) {
    alert("You must select at least one charater type!");
  }
  cap = confirm("Would you like to use uppercase letters?");
  low = confirm("Would you like to use lowercase letters?");
  num = confirm("Would you like to use numbers?");
  spec = confirm("Would you like to use special characters?");
  firstTime = false;
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generate password
function generatePassword() {
  for ( let i = 0; i <= plength; i ++){
    password= password + pSelction.charAt(Math.floor(Math.random() * Math.floor(pSelction.length -1)));
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
