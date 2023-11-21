// Write codes for the first function bellow this line
function vowelCounter(string){
    vowels = "aeiouAEIOU";
    count = 0;
    for (let i=0; i<string.length; i++){
        if (vowels.indexOf(string[i]) !== -1){
            count++;
        }
    }
   return (count);
}
console.log(vowelCounter("carine umbereye"));


// Write codes for the second function bellow this line


function arraySorter(arr){
   let sortedArray= arr.sort((a,b) => a-b);
   return sortedArray;
  }
  console.log(arraySorter([81,93,1,4,5]));

// Write codes for the third function bellow this line

function temperatureConverter(fahrenheit,celsius) {
    return fahrenheit = (celsius * 9/5) + 32;
    
}

console.log(temperatureConverter(120,38));

// module.exports = {
//     vowelCounter,
//     arraySorter,
//     temperatureConverter
// }