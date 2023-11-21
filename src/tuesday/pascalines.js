// Write codes for the first function bellow this line
function countVowels(str) {
    // Convert the string to lowercase 
    const lowerStr = str.toLowerCase();

    //  vowels (a, e, i, o, u)
    const vowelMatches = lowerStr.match(/[aeiou]/g);

    // Return the count of vowel matches (null if no matches found)
    return vowelMatches ? vowelMatches.length : 0;
}
const inputStr = "we are here to learn";
const vowelCount = countVowels(inputStr);

console.log(`Original String: ${inputStr}`);
console.log(`Number of vowels: ${vowelCount}`);


// Write codes for the second function bellow this line
function sortArrayAscending(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
var sortedArray = sortArrayAscending(someNumbers);

console.log(sortedArray);


// Write codes for the third function bellow this line
function  fahrnheit(tcelcius){
    return tFahrenheit = (tCelcius°C × 9/5) + 32;
}
var input = 27;
console.log(fahrneit(input));
module.exports = {
    vowelCounter,
    arraySorter,
    temperatureConverter
}