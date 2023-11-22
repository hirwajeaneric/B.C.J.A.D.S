// Write a function that counts the number of vowels in a string
function countVowels(inputString) {

    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    var lowercaseString = inputString.toLowerCase();
  
    var vowelCount = 0;
  
    for (var i = 0; i < lowercaseString.length; i++) {
      if (vowels.includes(lowercaseString[i])) {
        vowelCount++;
      }
    }
  
    return vowelCount;
}
console.log(countVowels("anysia"));
}