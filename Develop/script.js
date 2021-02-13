// Assignment Code
let generateBtn = document.querySelector("#generate");

// Setting
let plength = Number(prompt ("How many characters would you like your password to be?"));
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let number = "1234567890"
let special = "~!@#$%^&*()_+"
let cap = false;
let low = false;
let num = false;
let spec = false;
let firstTime = true;
let newPlength;

// Password Intro
while (isNaN(plength) || plength < 8 || plength > 128)
  Number(prompt("Length must be 8-128 characters!"));

while (!cap && !low && !num && !spec) {
  if (!firstTime) {
    alert("You must select at least one charater type!");
  }
  if (plength >= 8 && plength <= 128) {
    newPlength = parseInt(plength);
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
// all options are selected
  // C L N S
  if (cap && low && num && spec) {
    let all = upperCase + lowerCase + number + special;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      
      return password;
      // C L N
  } else if (cap && low && num && !spec) {
    let all = upperCase + lowerCase + number;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
      // C L
  } else if (cap && low && !num && !spec) {
    let all = upperCase + lowerCase;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
      // C
  } else if (cap && !low && !num && !spec) {
    let all = upperCase;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
      // L N S
  } else if (!cap && low && num && spec) {
    let all = lowerCase + number + special;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
      // L N
  } else if (!cap && low && num && !spec) {
    let all = lowerCase + number;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
      // L
  } else if (!cap && low && !num && !spec) {
    let all = lowerCase;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
      // N S
  } else if (!cap && !low && num && spec) {
    let all = number + special;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
      // N
  } else if (!cap && !low && num && !spec) {
    let all = number;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
      // S
  } else if (!cap && !low && !num && spec) {
    let all = special;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
      // C S
  } else if (cap && !low && !num && spec) {
    let all = upperCase + special;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
    // C N
  } else if (cap && !low && num && !spec) {
    let all = upperCase +number;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
      // L S
  } else if (!cap && low && !num && spec) {
    let all = lowerCase + special;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
  } else if (cap && low && !num && spec) {
    let all = upperCase + lowerCase + special;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
  } else if (cap && !low && num && spec) {
    let all = upperCase + number + special;
    let password= "";
      for (let i = 0; i <newPlength; i++) {
        let proto = Math.floor(Math.random() * all.length);
        password += all[proto]; 
      }
      return password;
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
