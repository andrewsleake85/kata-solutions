//this script checks to see if duplicate arguements have been pased into 
// a function that accepts variable amount of arguements



var sample_0 = "ok";
var sample_1 = "ok";
var sample_2 = "not ok";


function duplicateCheck(...names){
 // return true if this method is called with duplicate argument values 
 
    for (let i=0; i<names.length; i++) 
      {
        var curr = i;
        
        for(let j=0;j<names.length;j++)
          {
              if( names[curr] === names[j] && curr !== j)
                {  
                  return true;
                }
          }
    }
    
  return false;
  }
  
  
console.log(duplicateCheck(sample_0,sample_1));  // true as both  have same values
console.log(duplicateCheck(sample_0,sample_2));  //false as different values 