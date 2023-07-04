


k = 16
arr =  [2, 5, 3, 6, 7, 0, 0, 23, 11]

output = [
    [2,5,3,6]
    [3,6,7]
    [3,6,7,0]
    [3,6,7,0,0]
]





// function consecutiveSum(arr, k) {
//     let result = 0;
//     let temp_sum = 0;
//     // veriable where we collects results
//     for (var i = 0; i < arr.length - 1; i++) {
       
//         // result
//         temp_sum += arr[i];
//         for (var i = k - 1; i < arr.length; i++) {
//             // the second loop but this time we start from position where we had finished
//             temp_sum += arr[i];
//         }
//         // condiition statement which overwrites
//         if (temp_sum > result) {
//             result = temp_sum;
//         }
//         // How should i analyze this line of code. Could you simplify it for me? We have a veriable, from which we will remove, what to be specific? Another question is why we have to use "1" in this operation? 
//         temp_sum -= arr[i - k + 1];
//     }
//     return result;
//   }
        
//   console.log(consecutiveSum([2, 5, 3, 6, 7, 0, 0, 23, 11], 16))