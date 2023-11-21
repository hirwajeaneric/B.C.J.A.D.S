// 1. Write a function that counts the number of vowels in a string
function vowelCounter(str){
    let counter = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i<str.length; i++){
       if (str.includes(vowels[i])){
        counter += 1;
       }
    }
    return counter;
}
console.log(vowelCounter("Umukobwa"));