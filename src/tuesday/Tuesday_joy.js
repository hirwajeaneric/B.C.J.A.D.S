// // Write codes for the first function bellow this line

function vowel_Count(str) {

    return str.replace(/[^aeiou]/g, "").length;
  }
  
  
  console.log(vowel_Count("Python"));
  console.log(vowel_Count("w3resource.com")); 


// Write codes for the second function bellow this line
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  const numbers = [10, 2, 8, 3, 1];
  console.log(sortArray(numbers)); // Output: [1, 2, 3, 5, 10]





// Write codes for the third function bellow this line

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);