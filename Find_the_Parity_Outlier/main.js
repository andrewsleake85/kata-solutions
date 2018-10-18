//this script finds the outlier, be it even or odd, given an array

let ex1 = [2, 4, 0, 100, 4, 11, 2602, 36];
let ex2 = [160, 3, 1719, 19, 11, 13, -21];


function findOutlier(integers){
  if(isEven(integers[0]) && isEven(integers[1])){
    return findOdd(integers);  
  } else if (isEven(integers[0]) && isEven(integers[2])) {
     return findOdd(integers);  
  } else if (isEven(integers[1]) && isEven(integers[2])){
    return findOdd(integers); 
  } else if (!isEven(integers[0]) && !isEven(integers[1])){
    return findEven(integers);  
  } else if (!isEven(integers[0]) && !isEven(integers[2])) {
    return findEven(integers);   
  } else if (!isEven(integers[1]) && !isEven(integers[2])){
      return findEven(integers);
  }
}

function isEven(num){
  return (num % 2 === 0 ? true:false);
}

function findOdd(integers){
  for(let i=0;i<integers.length;i++){
    if(integers[i] % 2 !== 0){
      return integers[i];
    }
  }
}

function findEven(integers){
  for(let i=0;i<integers.length;i++){
    if(integers[i] % 2 === 0){
      return integers[i];
    }
  }
}

console.log(findOutlier(ex1));
console.log(findOutlier(ex2));
