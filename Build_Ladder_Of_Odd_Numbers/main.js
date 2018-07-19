//builds a string array of odd numbers


function pattern(n){

let output ="";
//handle negative or 0 case
if (n <= 0) output = "";

for (let i = 1;i <=n; i+=2)
{
  
  for(let j = 0; j<i;j++)
    {
    
    output += i.toString();
  
   } 
   //add new line after each inner loop
  output += "\n";
}


  //remove the last new line since output doesnt want it !
output = output.substring(0, output.length - 1);





 return output;
}

console.log(pattern(10));