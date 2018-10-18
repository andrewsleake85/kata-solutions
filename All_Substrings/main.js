//finds alll substrings of a string

let ex1 = "this is a string, dictionaries are cool";
let ex2 = "expadaliocious";
let results1 = [];
let results2 = [];

for(let i=0;i<ex1.length;i++){
    for(let j=i+1;j<=ex1.length;j++){
        results1.push(ex1.slice(i,j));        
    }
 }
 
 console.log(results1);
 
 for(let i=0;i<ex2.length;i++){
    for(let j=i+1;j<=ex2.length;j++){
        results2.push(ex2.slice(i,j));        
    }
 }
 
 console.log(results2);
 
 
 
 
