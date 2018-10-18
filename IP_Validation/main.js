//this script checks if a IP address given as a string is valid or not

let ex1 = "255.255.255.255";
let ex2 = "256.1.0.34";

function isValidIP(str) {
  let numbers = str.split(".");
  let regex = new RegExp('^([0-9]|[1-9][0-9]|1[0-9][0-9]|25[0-5]|2[0-5][0-9])$');
  if(numbers.length !== 4){ return false};
  for(let i=0;i<numbers.length;i++){
    let current = numbers[i];
    if(!current.match(regex) || +current > 255 || current < 0){
      return false;
    }    
  } 
  return true;
}

console.log(isValidIP(ex1));
console.log(isValidIP(ex2));