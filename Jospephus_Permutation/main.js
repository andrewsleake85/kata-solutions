//this script tells the order of people taken out in a "circle"
//given the Josephus permuation and items being the list of people
//and k being how many people to count between taking out

let k1 = 3;
let k2 = 5;
let ex1 = [1,2,3,4,5,6,7];
let ex2 = [1,2,3];

function josephus(items,k){
  let len = items.length;
  let result = [];
  let oldI = k-1;
  if(k > items.length){
    let start = 0;
      for(let i=0;i<k-1;i++){
        start++
        if(start >= items.length){
          start = 0;
        } 
      }
      oldI = start;
    }
  while(result.length < len){
    if(items.length === 1){
      result.push(items[0]);
      break;
    }
    result.push(items[oldI]);
    items.splice(oldI,1);
    for(let i=0;i<k-1;i++){
      oldI++;
      if(oldI >= items.length){
        oldI = Math.abs(items.length - oldI);
      } 
    }
  }
  return result;
}

console.log(josephus(ex1,k1));
console.log(josephus(ex2,k2));