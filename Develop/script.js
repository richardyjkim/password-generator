// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// generate password
function generatePassword() {
  // Setting
  let pLength = Number(prompt ("How many characters would you like your password to be?"));
  let lowerCase = "abcdefghijklmnopqrstuvwxyz"
  let upperCase = lowerCase.toUpperCase();
  let number = "1234567890"
  let special = "~!@#$%^&*()_+"
  let cap = false;
  let low = false;
  let num = false;
  let spec = false;
  let firstTime = true;

  // Password Intro
  while (isNaN(pLength) ||pLength < 8 || pLength > 128)
    pLength = Number(prompt("Length must be 8-128 characters!"));

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
  let letters = [];
  for (let i = 0; i < 4 ; i++) {
    if (cap && !letters.includes(upperCase)) {
      letters.push(upperCase); 
      continue;
    } 
    if (low && !letters.includes(lowerCase)) {
      letters.push(lowerCase); 
      continue;
    }
    if (num && !letters.includes(number)) {
      letters.push(number); 
      continue;
    }
    if (spec && !letters.includes(special)) {
      letters.push(special); 
      continue;
    }
  } 
  let password = "";
  for (let i = 0 ; i < pLength ; i++) {
    let current = letters[i%(letters.length)];
    password += current[Math.floor(Math.random() * current.length)];
  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
