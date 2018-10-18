//given three terms in an array, figure out the missing number 

let ex1 = [2,4,8];
let ex2 = [11,33,44];

var findMissing = function (l) {
  let diff = l[2] -l[1];
  if(l[0] + diff !== l[1] - diff){
    diff = l[1]-l[0];
  }
  let count = 0;
  while(true){
    if(l[count] + diff !== l[count+1]){
      return l[count] + diff;
    }
    count++;
  }
};

console.log(findMissing(ex1));
console.log(findMissing(ex2));