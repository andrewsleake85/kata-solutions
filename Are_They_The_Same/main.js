//checks if an array contains all the elements of another array but squared and in any order

let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

function comp(array1, array2){
  if( !array1 || !array2){
    return false;
  }
  let sort = function(a,b){return a-b};
  array1 = array1.sort(sort);
  array2 = array2.sort(sort);
  for(let i=0;i<array1.length;i++){
    if (!(array2[i] ===  Math.pow(array1[i],2))){
    return false; 
    }
  }
    return true;
}

console.log(comp(a,b));



