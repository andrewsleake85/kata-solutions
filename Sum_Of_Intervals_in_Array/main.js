//this script sums intervals without overlapping the intervals
/* eg  [
   [1,4],
   [7, 10],
   [3, 5]
]
 is really 1-5 and 7-10 because 1,4  and 3,5 overlap
*/

let ex1 = [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
   ];

function sumIntervals(intervals){
  let subArrays = [];
  for(let i=0;i<intervals.length;i++){
    if(subArrays.length === 0){
      subArrays.push(intervals[i]);
    } else { 
      for(let j=0;j<subArrays.length;j++){
        if(valuesAreBetween(intervals[i],subArrays[j])){
          let temp = subArrays[j].concat(intervals[i]);
          let zed = [Math.min(...temp),Math.max(...temp)]
          subArrays[j] = zed;
          break;
        } else {
          subArrays.push(intervals[i]);
          break;
        }               
      }
    }
  }
  let sum = 0;
  for(let i=0;i<subArrays.length;i++){
  sum += subArrays[i][1] - subArrays[i][0]; 
  }
  return sum;
}

 
function valuesAreBetween(fresh,done){
  if((fresh[0] <= done[1] && fresh[0] >= done[0] ) || (fresh[1] >= done[0] && fresh[1] <= done[1] )){
  return true;
  } else {
  return false;
  }
}

console.log(sumIntervals(ex1));