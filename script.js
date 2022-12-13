// Assignment Code
var generateBtn = document.querySelector("#generate");
length = prompt("How many characters?(between 8-128)");
  if (length < 8 || length > 128){
    alert ("Does not meet Character length criteria. Try Again!");
    
var Special = confirm("Special Characters?");
var Uppercase = confirm ("Uppercase?");
var Lowercase = confirm ("Lowercase?");
var Numbers = confirm ("Numbers?");
function generatePassword(){

}
  const numbers = ["1","2","3","4","5","6","7","8","9","0"];
  const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",'Y',"Z"];
  const special = ["!","@","#","$","%","^","&","*","(",")","-","=","+","/","?","<",">"];
  

  const answer1 =[];
  const answer2 = [];
  const answer3 =[];
  const answer4 = [];
  if (Special===true){
   Special = answer1.concat(specials);
  }
  if (Uppercase === true){
    Uppercase = answer2.concat(uppercase);
  }
  if (Lowercase === true){
    Lowercase = answer3.concat(lowercase);
  }
  if (Numbers === true){
    Numbers = answer4.concat(numbers);
  }
  const generator = (answer1.concat, answer2.concat, answer3.concat, answer4.concat);
  password = generatePassword();
  document.getElementById("display").value = password;
 
// Step 1: Prompt the User for the password criteria 
// a: password length between 8-128
// b: Uppercase, Lowercase, numbers , special characters 
// Step 2: Validate the imput 
// Step 3: Generate password
// Step 4: Display generated Password on page 
let passwordText = generatePassword

//   return "Generated Password";
// }
// Write password to the #password input
function writePassword() {
  
  // var password = "";
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;

}
// document.getElementById("password").ariaPlaceholder = password;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
