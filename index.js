function isPalindrome(word) {
  // Write your algorithm here
for(i = 0; i < word.length / 2; i++){
// check each letter from the corresponding letter to the end
const j = word.length - 1 - i
const startingLetter = word[i]
const lastLetter = word[j]
// if any letter does not match return false
if(startingLetter !== lastLetter) return false
}
return true
}

//    racecar
//    0123456
  //  i     j

//    racecar
//    0123456
  //   i   j

  //    racecar
  //    0123456
    //    i j
  
//    racecar
  //    0123456
    //     ij
  


/* 
  Add your pseudocode here
  if the first and the last letter are the same
  return true

  and if the second letter and the second last letter are the same.
  return true

  if the first letter and the second letter are not the same.
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
console.log("Expecting: true"),
console.log("=>", isPalindrome('abba'))
console.log(ex)


}

module.exports = isPalindrome;
