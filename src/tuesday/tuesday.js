


// Write codes for the first function bellow this line
function countVowels(inputString){
  var vowel= ["a","i","o","u","e"];
  var vow = inputString . toLowerCase();
  var count = 0;
  for( let i=0; i < vow.length; i++){
    if(vowel.includes(vow[i])){
        count++;
    }
  }
  return count;
  
}
console.log(countVowels("TETA"));


// Write codes for the second function bellow this line
function sortArray(arr){
arr.sort((x,y)=>x-y);
return arr;
}
console.log(sortArray([10,5,30]));


// Write codes for the third function bellow this line
function temperatureConverter(tCelcius){
    var tFahrenheit=(tCelcius * 9/5) + 32;
    return tFahrenheit;

}
console.log(temperatureConverter(100));


module.exports = {
    vowelCounter,
    arraySorter,
    temperatureConverter
}
