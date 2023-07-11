function isPalindrome(word) {
  // Write your algorithm here

  let variable ='';
  
  for(let i =word.length-1; i>=0; i--){
    variable+=word[i]
  }
if (variable===word) {
  return true;
  
}
else{
  return false
}
}

/* 
  Add your pseudocode here
  // isPalindrome  takes in a string and reverse is
  for loop and reverse the string 
  // if the reversed value is the same return true else return false

*/

/*
  Add written explanation of your solution here

  this function takes in a string and reverses it 
  using the for loop method , i loop all the characters of the string for the last 
  index to the first index

  if the value of the reversed string is the same as the input string then the function 
  returns true else returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("june"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eye"));

  console.log("");


  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("home"));
  


  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
