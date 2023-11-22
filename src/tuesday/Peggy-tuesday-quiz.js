// Write codes for the first function bellow this line
function vowelCounter(str){
    var n=0;
    var arr=str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==='a'||arr[i]==='e'||arr[i]==='i'||arr[i]==='o'||arr[i]==='u'){
            n++;
        }
        
    }
    return n;
}
console.log(vowelCounter("counting a vowels"));

// Write codes for the second function bellow this line
function arraySorter( arr ){
    var sortedArr=arr.sort((a,b)=>a-b);
   return sortedArr;
}
console.log(arraySorter( [45,66,74,2,42,7,1,7]));

// Write codes for the third function bellow this line
function temperatureConverter(celcius) {
    var fahreneit=(celcius*9/5) + 32;
    return fahreneit;
}
console.log(temperatureConverter(-30));

module.exports = {
    vowelCounter,
    arraySorter,
    temperatureConverter
}