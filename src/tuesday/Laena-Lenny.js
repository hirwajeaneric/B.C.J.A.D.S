// Write codes for the first function bellow this line

function vowelCounter(vowel){
    var vow = ['a','e','u','o','i'];

    var lcase = vowel.toLowerCase();

    var vowl = 0;
    for(var i=0; i < lcase.length; i++){
        if(vow.includes(lcase[i])){
            vowl++;
        }
    }

    return vowl;
}

console.log(vowelCounter("Laena"));

// Write codes for the second function bellow this line
function arraySorter(arr){
    var arraySorter= arr.sort((a,b) => a-b);

    return arraySorter;
}

    console.log(arraySorter([10,50,6,9,35]));

// Write codes for the third function bellow this line

function temperatureConverter(tFahrenheit){
    tFahrenheit = (tCelcius * 9/5) + 32;
    return tFahrenheit;
}
console.log(tFahrenheit(50));

module.exports = {
    vowelCounter,
    arraySorter,
    temperatureConverter
}