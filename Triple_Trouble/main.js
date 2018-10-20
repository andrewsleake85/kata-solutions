//finds if the number has a triple of the same digit in it and a double in the other number of the same digit

let ex1 = 2585373444;
let ex2 = 4356443126;

function tripledouble(num1, num2) {
  let codes = {
    0:"000",1:"111",2:"222",
    3:"333",4:"444",5:"555",
    6:"666",7:"777",8:"888",
    9:"999"};
  let nums = {};

  for(let i=0;i<10;i++){
    if(num1.toString().includes(codes[i])){
      nums[i] = 1;
    }
  }
  for(let i=0;i<10;i++){
    if(num2.toString().includes(codes[i].slice(1))){
      if(nums[i]){
        return 1;
      }
    }
  }
  return 0;
}
 
console.log(tripledouble(ex1,ex2));
console.log(tripledouble(ex2,ex1));