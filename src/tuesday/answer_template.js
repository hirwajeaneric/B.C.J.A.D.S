// Write codes for the first function bellow this line
function countVowels(str){
    var vowels = ["a","e","i","u","o"];
    var lowercase = str.toLowerCase();
    var vowelcount = 0;
    for(var i = 0; i<lowercase.length; i++){
        if(vowels.includes(lowercase[i])){
            vowelcount ++;
        }
    }
    return vowelcount;
}
console.log(countVowels("elyse"));

// Write codes for the second function bellow this line

function arrangeAsc(arr){
    var sortedArray=arr.sort((a, b) => a - b);
    return sortedArray;
}
let numbers = [3,4,8,2,1,2,2,6,3,4];
let sortedArray = arrangeAsc(numbers);
console.log(sortedArray);

// Write codes for the third function bellow this line

function convertTemp(tcelcius){
    tfahreneit = (tcelcius * 9/5) + 32;
    return tfahreneit;

}celcius_temp = 28;
fahreneit_temp = convertTemp(celcius_temp);
console.log(fahreneit_temp);



module.exports = {
    vowelCounter,
    arraySorter,
    temperatureConverter
}