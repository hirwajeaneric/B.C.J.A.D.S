// Write codes for the first function bellow this line
 function countVowels(vowel){
    var vowel = ["i","u","o","a","e"];
    var counts = 0;
    var lowercase = vowel.toLowerCase()
for(i=0; i<vowel.length; i++){
    if(vowel.includes(lowercase[i])){
        counts++;    }
}
return counts
}

console.log(countVowels('mukundente'));


// Write codes for the second function bellow this line

function sortArrayAscendingly(arr) {
    return arr.sort((a, b) => a - b);
}

var numbers = [3, 10, 18, 12, 10, 22, 2, 6, 13, 4];

console.log(sortArrayAscendingly(numbers));



// Write codes for the third function bellow this line
function temperatureConverting(temp){
 
}


// module.exports = {
//     vowelCounter,
//     arraySorter,
//     temperatureConverter
// }






function countVowels(vowel){
    var vowels = ["i","u","o","a","e"];
    var counts = 0;
    var lowercase = vowel.toLowerCase()
for(i=0; i<vowel.length; i++){
    if(vowels.includes(lowercase[i])){
        counts++;    }
}
return counts
}

console.log(countVowels('mukundente'));

