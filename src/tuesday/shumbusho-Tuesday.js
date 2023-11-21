// Write codes for the first function bellow this line
function numberOfVowels(string){
  var vowels=["a","e","o","u","i"];
  var lowercase=string.lowercase;
  var a=0;
  for (let i=0; i<string.length; i++){
    if (lowercase.include(vowels)){

    }
  }
 
  return number;
}
const string="mignonne";
console.log("the number of vowels in",string, "are",numberOfVowels(string));
// Write codes for the second function bellow this line
function sorting(array){
    var sortedArray=array.sort((a, b) => a - b);
    return sortedArray;
}
const array=[2,4,5,2,3,2,1,3,7,9];
console.log("the sorted array is: ", sorting(array));

// Write codes for the third function bellow this line
function temperatureConverter(tCelcius){
   var tFahrenheit = (tCelcius * 9/5) + 32;
   return tFahrenheit;
}
const tCelcius=30;
console.log(tCelcius,"degree celsius to Fahrenheit is: ",temperatureConverter(tCelcius));


module.exports = {
    vowelCounter,
    arraySorter,
    temperatureConverter
}