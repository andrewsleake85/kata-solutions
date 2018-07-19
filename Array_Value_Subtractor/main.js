//this program subtracts one array or list from another
//it removes all values found in the one list from the other
// to do actual subtraction just use .map

var sample_0_arr_0 = [1,2,3,4,5,6,7,8,9,10];
var sample_0_arr_1 = [2]; //second array must be 1 input - to do more than one loop on each 

function array_diff(a, b) {
 var correct = [];
 
 if (b.length == 0) return a;
 
 for(let i=0;i< a.length;i++)
   {
     for(let j=0; j<b.length;j++)
       {
         
         if(a[i] != b[j])
          {correct.push(a[i])}
       }     
    }    
  return correct;
}


console.log(array_diff(sample_0_arr_0,sample_0_arr_1));   //the 2 is now gone