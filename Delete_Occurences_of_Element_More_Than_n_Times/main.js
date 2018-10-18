//this scripts delets occurences of an element in an array if that element exists more than n times
// and returns the corrected array

let ex1 =[20,37,20,21];


function deleteNth(arr,n){
  let answer = [];
  for(let i=0;i<arr.length;i++){
    let dupeCount = {};
    answer.forEach(function(x) { dupeCount[x] = (dupeCount[x] || 0)+1});
      if (!dupeCount[arr[i]]){  
        answer.push(arr[i])
      } else if (dupeCount[arr[i]] < n){
        answer.push(arr[i]);
      }
    }
  return answer;
}
console.log(deleteNth(ex1,1));
