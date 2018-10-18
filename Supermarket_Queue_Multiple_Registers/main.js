//this script finds the amount of time for all customers
//in the line to check out, where each integer is a length of time
//it takes to check out the customer and n is how many registers are 
//open

let line1 = [1,2,3,4];
let n1 = 1;

let line2 = [4,3,5,6,14,3,11];
let n2 = 3;

function queueTime(customers, n) {
  let count  = 1;
  let tills = {};
  for(let i = count; i<=n;i++){
    let str1 = "Line"+i;
    tills[str1] = 0;
  } 
 let time = 0;
 while(checkIfAnyLineIsOccupied(tills) || customers.length > 0){
   for(var key in tills){
     if (tills[key] === 0){
       if(customers[0]){
         tills[key] = customers.shift();  
       }
     } 
   }
   for(var key in tills){
     if(tills[key]  > 0){
       tills[key] = tills[key] -1;
     }
   }
  time++;
  }
 return time;
}
 
function checkIfAnyLineIsOccupied(lines){
  for(var key in lines){
     if(lines[key] > 0){
       return true;
     }
   }
   return false;
}


//expects 10
console.log(queueTime(line1, n1));
//expects 19
console.log(queueTime(line2, n2));