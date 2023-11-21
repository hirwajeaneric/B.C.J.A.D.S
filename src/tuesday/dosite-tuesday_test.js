// Write codes for the first function bellow this line
/*a function that counts the number of vowels in a string*/
function numberOfVowels(str,position,char){
    if (position < 0 || position >= str.length){
        return str;
    }
   
return str.substr (0 ,position) +char +str .substr(position + 2);   
}
console.log(numberOfVowels("code",2,'e'))


// Write codes for the second function bellow this line
/*a function that sorts an array of numbers in ascending order */
function arraySorter(arr){
 var sortedarray=arr.sort((a,b)=>a-b);
 return sortedarray;
}
console.log(arraySorter([10,30,5,6,7,8]));


// Write codes for the third function bellow this line
function fahrenheit(celsius){
    return (celsius * 9/5) + 32;
}
var celcius=40;
console.log(fahrenheit(celcius));


