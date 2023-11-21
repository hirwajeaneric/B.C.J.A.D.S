// Write a function that sorts an array of numbers in ascending order
function ascendingSort(arr) {

    arr.sort(function(a, b) {
        return a - b;
    });
}

let myArray = [6, 3, 2, 12, 22, 11, 5];
ascendingSort(myArray);

coonsole.log("Original array:", myArray);
console.log("Sorted array:", sortedArray);