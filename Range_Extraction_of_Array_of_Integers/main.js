//this script extracts ranges of numbers from an intger array
// so [1,2,3,5,6] becomes [1-3,5,6]

let ex1 = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];


function solution(list){
  let result = [];
  let tempHolder = [];
  for(let i=0;i<list.length;i++){
    let cur = list[i];
    let next = list[i+1];
    if(isNextClose(cur,next)){
      if( tempHolder.indexOf(cur)  === -1) tempHolder.push(cur);
      if( tempHolder.indexOf(next) === -1) tempHolder.push(next);
    }
    else {
      if(tempHolder.length < 3  && tempHolder.length > 0){
        tempHolder.forEach(function(x){result.push("" + x)});
        tempHolder = [];
      } else if (tempHolder.length > 2){
        result.push("" + tempHolder[0] + "-" + tempHolder[tempHolder.length-1]);
        tempHolder = []; 
      }
      if(!isNextClose(list[i-1],list[i])){
        result.push(""+list[i]);
      }
    } 
  }
  return result.join(",");
}

function isNextClose(a,b){
  if(a+1 === b){
    return true;
  }
  return false;
}

console.log(solution(ex1));