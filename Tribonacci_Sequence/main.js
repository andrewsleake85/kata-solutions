//the fibonacci sequence, except with the last 3 digits instead of 2
//given the signature, and n


let ex1 = [0,0,1];
let ex2 = [0,1,1];

function tribonacci(signature,n){
  
  if(n < 3){
  return signature.slice(0,n);
  } else {
  var sequence = signature;
    for(let i = 3; i<(n);i++){
    sequence.push(sequence[i-1]+sequence[i-2]+sequence[i-3]);
    }
    return sequence; 
  }
}
console.log(tribonacci(ex1,12));
console.log(tribonacci(ex2,15));
