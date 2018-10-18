//this script takes a list of people who "like" something 
//and displays who likes the thing in facebook style

let ex1 = [];
let ex2 = ["Peter"];
let ex3 = ["Jacob", "Alex"];
let ex4 = ["Max", "John", "Mark"];
let ex5 = ["Alex", "Jacob", "Mark", "Max"];

function likes(names) {
  let responses = ['no one likes this',' likes this',' like this', ' others like this'];
  let answer = "";
  let numNames = names.length;
  let others = numNames - 2;
  numNames = (numNames > 3 ? -1: numNames);
  
  switch(numNames){
    case 0: 
      answer = responses[0]; 
      break;
    case 1:
      answer = names[0] + responses[1];
      break;
    case 2:
      answer = names[0] + " and " + names[1] + responses[2];
      break;
    case 3:
      answer = names[0] + ", " + names[1] + " and " + names[2] + responses[2];
      break;
    case -1:
      answer = names[0] + ", " + names[1] + " and " + others + responses[3];
      break;
    }
  return answer;
}

console.log(likes(ex1));
console.log(likes(ex2));
console.log(likes(ex3));
console.log(likes(ex4));
console.log(likes(ex5));
