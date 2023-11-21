// Write a function that converts a temperature from Celsius to Fahrenheit
function tempConverter(tCelcius){
    let  tFahrenheit = (tCelcius * 9/5) + 32;
    return tFahrenheit;
}

console.log(tempConverter(28));