
// this script takes an array of increasing letters and returns the missing one

let ex1 = ['a','b','c','d','f'];
let ex2 = ['O','Q','R','S'];

function findMissingLetter(array)
{ let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowers = "abcdefghijklmnopqrstuvwxyz";
  let startIndex = uppers.indexOf(array[0].toUpperCase());
  for(let i = 0;i<array.length;i++){
    if(array[i].toUpperCase() !== uppers[startIndex+i]){
      if(array[i-1] === uppers[startIndex + i-1]){
        return uppers[startIndex+i];
        } else if ( array[i-1] === lowers[startIndex+i-1] ){
        return lowers[startIndex+i];
      }
    }
  }
}

console.log(findMissingLetter(ex1));
console.log(findMissingLetter(ex2));