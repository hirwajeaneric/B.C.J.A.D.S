// Write codes for the first function bellow this line
//1. Write a function that counts the number of vowels in a string
function vowelCounter(str){
    let counter = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i<str.length; i++){
       if (vowels.icludes(str[i].toLowerCase())){
        counter += 1;
       }
    }
    return counter;
}
console.log(vowelCounter("Umukobwa"));


// Write codes for the second function bellow this line
// 2. Write a function that sorts an array of numbers in ascending order
function sorterOfArray(arr){
    return arr.sort()
}
const arr1 = [4,5,90,6,7,3,4]
console.log(sorterOfArray(arr1));

// Write codes for the third function bellow this line
// Write a function that converts a temperature from Celsius to Fahrenheit
function tempConverter(tCelcius){
    let  tFahrenheit = (tCelcius * 9/5) + 32;
    return tFahrenheit;
}

console.log(tempConverter(28));