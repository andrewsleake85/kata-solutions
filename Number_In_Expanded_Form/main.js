//this script returns numbers in expanded form:
// expandedForm(70304); // Should return '70000 + 300 + 4'


let ex1 = 70304;
let ex2 = 348413405;

function expandedForm(num) {
  let parts = [];
  let len = num.toString().length;
  for(let i = Math.pow(10,len-1);i>=1;i =  i/ 10){
    let quant = Math.floor(num / i);
    if( quant > 0 ){ parts.push(quant * i)};
    num -= quant * i;  
   }
   return parts.join(" + ");
}

console.log(expandedForm(ex1));
console.log(expandedForm(ex2));