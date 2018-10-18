//this script simulates a clerk taking only 25,5o, or 100 dollar bills
//and needs to know if they can make change based on what bills the people 
//have in line given each ticket cost exactly 25 dollars

let ex1 = [25,25,50];        //he gets 2  25 dollar bills, and can make change for the 50
let ex2 = [25,25,50,50,100]; // he will not have a 50 and 25 available to make change for the 100

function tickets(peopleInLine){
  console.log(peopleInLine);
  let count25s = 0;
  let count50s = 0;
  for(let i=0;i<peopleInLine.length;i++){
    console.log( "25s: " + count25s + " 50s: " + count50s);
    switch(peopleInLine[i]){
      case 25:  count25s++;
                break;
      case 50:  count50s++;
                count25s--;
                break;
      case 100: if(count25s > 0 && count50s > 0){
                  count25s--;
                  count50s--;
                } else if (count25s> 2){
                  count25s = count25s-3;
                } else {
                  return "NO";
                };
                break;
                
    }
    if(count25s <0 || count50s<0){
      return "NO";
    } 
  }
  return "YES";
}

console.log(tickets(ex1));
console.log(tickets(ex2));