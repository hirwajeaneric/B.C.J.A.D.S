// Write codes for the first function bellow this line
function countVowels(vowel){
    let count = 0;
    var vowels =["a","i","u","o","e"];
    var lowercase = vowel.toLowerCase();
    for(i=0; i<=vowel.length; i++){
        if(vowels.includes(lowercase[i])){
            count++;
        }
    }

    return count;

}console.log(countVowels("Kigali"));


// Write codes for the second function bellow this line


function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortArrayAscending([3, 4, 8, 2, 1, 2, 2, 6, 3, 4]));



// Write codes for the third function bellow this line
function temperatureConverter(celcius) {
    var fahreneit=(celcius*9/5) + 32;
    return fahreneit;
}
console.log(temperatureConverter(-20));

module.exports = {
    vowelCounter,
    arraySorter,
    temperatureConverter
}

