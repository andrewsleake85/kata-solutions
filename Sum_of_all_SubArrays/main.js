//finds the sum of all subarrays in O(n) time and uses O91) space

let ex1 = [1,2,3];
;
function subarraySum(arr) {

let result = 0;

for (let i = 0; i < arr.length; i++) {

result += arr[i] * (i + 1) * (arr.length - i);


}

return result;

}

console.log(subarraySum(ex1));