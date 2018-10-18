//finds alll sub arrays of an arary


let ex1 = [5,3,65,2,6,57,27,28,1];
let results = [];

for(let i=0;i<ex1.length;i++){
    for(let j=i+1;j<=ex1.length;j++){
        results.push(ex1.slice(i,j));        
    }
 }
 
 console.log(results);