// Write a function that counts the number of vowels in a string
function vowels(string){
    let vowels = "aeiouAEIOU";
    let word = 0;
    for(i=0;i<vowels.length;i++)
    if (vowels.includes(string[i])){
        word ++;
    }
    return word;
}
console.log(vowels("lili"))

// Write a function that sorts an array of numbers in ascending order
function ascendingOrder(arr){
    return arr.sort((a,b) => a-b)
}
console.log(ascendingOrder([9,7,4,8,2]))
// Write a function that converts a temperature from Celsius to Fahrenheit
function temperatureConverter(tCelcius){
    const tFahrenheit = (tCelcius * 9/5) + 32;
    return tFahrenheit;
}
//using example tCelcius = 8;
console.log(`the temperature is ${temperatureConverter(8)}`)