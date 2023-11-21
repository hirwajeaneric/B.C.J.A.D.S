//1.Write a function that counts the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("hey?,how are you"));
// 2. Sort an Array of Numbers in Ascending Order


function sortAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
    console.log(sortAscending(4,3));
}

// 3. Convert Temperature from Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit(30));  

