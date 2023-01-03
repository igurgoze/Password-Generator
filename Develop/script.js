// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 // Arrays
const lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbArr = ['1','2','3','4','5','6','7','8','9','0',];
const specialArr = ['!','@','#','$','%','^','&','*'];


function generatePassword() {
  let userArr = [];
  let resultArr = [];
  let passLength = prompt("How long is your password? (8 - 128 characters please)");
  let lowercase = confirm("Do you want lowercase in your password?");
  let uppercase = confirm("Do you want uppercase in your password?");
  let numbers = confirm("Do you want numbers in your password?")
  let special = confirm("Do you want special characters in your password?")
// adds preferences to password based on what user chooses
  if (numbers){
    resultArr = resultArr.concat(numbArr);
  
  }
  
  if (lowercase){
    resultArr = resultArr.concat(lowerArr);
    
  }
  if (uppercase){
    resultArr = resultArr.concat(upperArr);
    
  }

  if (special){
    resultArr = resultArr.concat(specialArr);
  }
  console.log(resultArr);

  for (let i = 0; i < passLength; i++) {
      userArr.push (resultArr[Math.floor(Math.random() * resultArr.length)]);
    }

    return userArr.join("") ;


  // psuedo code
  // 1. prompt user for password criteria
  //     a. pass length between 8 - 128
  //     b. lowercase, uppercase, numbers, special chars
  // validate the input
  // generate password based on preferences
  // display password on page
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
