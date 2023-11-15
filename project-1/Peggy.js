function greatestValue(arr){
    // var sortedArray=arr.sort((a,b)=>b-a);
    // return sortedArray[0];
    // var greatest=arr[0];
    // for(let i=1;i<arr.length;i++){
    //     if(arr[i]>greatest){
    //         greatest=arr[i];
    //     }

    // }
    // return greatest;
    var max=Math.max(...arr);
    return max;
}
const test=[12,5,67,47,5,8,3,678,98];
console.log(greatestValue(test));