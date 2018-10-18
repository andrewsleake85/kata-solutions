//finds the max sum of a contiuous sequence of numbers in an array


let ex1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSequence = function(arr){
  
  let maxSum = 0;
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<=arr.length;j++){
      let subArrayTotal = arr.slice(i,j).reduce(function(sum, value) {
        return sum + value;
      }, 0);
      
      if ( subArrayTotal > maxSum ){
        maxSum = subArrayTotal;
      }
    }
  }
  return maxSum;
};

console.log(maxSequence(ex1));