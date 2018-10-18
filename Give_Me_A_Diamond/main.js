//this script draws a diamond of N size as long as n is odd

let n1 = 10;
let n2 = 5;
let n3 = 15;


function diamond(n){
  if(n < 0 || n % 2 === 0){return null;}; 
  let result = "";
  var width = n;
  var spaces;
  var platforms;
  const floor = "*";
  const spacer = " ";

  for (let i = 1; i<(n/2)+1;i++)
    {      
      spaces = (width  - ((i * 2 ) - 1)) * .5;
      platforms = (i * 2) - 1;              
      for (let sL = 0; sL < spaces; sL++)
        {result += spacer;}     
      for (let pL = 0; pL < platforms; pL++)
        {result += floor;}
      result += '\n';     
   }
  for(let i = (n/2); i>1;i--){
      spaces = (width  - ((i * 2 ) - 1)) * .5;
      platforms = (i * 2) - 2;                
      for (let sL = 0; sL < spaces; sL++)
        {result += spacer;}     
      for (let pL = 0; pL < platforms; pL++)
        {result += floor;}  
      result += '\n';  
  }  
  return result;
}

console.log(diamond(n1));
console.log(diamond(n2));
console.log(diamond(n3));