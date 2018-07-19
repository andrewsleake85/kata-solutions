//this script generates a fibonacci sequence and checks if a valid product was given 
//if so it returns the numbers that made it, if not the numbers that should but dont


// productFib(4895)   ==  [55, 89, true])
// productFib(5895) ==[89, 144, false])
// productFib(74049690) == [6765, 10946, true])
// productFib(84049690) == [10946, 17711, false])
// productFib(193864606) ==  [10946, 17711, true])
// productFib(447577) == [610, 987, false])
// productFib(602070) == [610, 987, true])




function productFib(prod){

//start fibonacci sequence 
 var fibArr=[0,1];
 var result;
 

 //upper bound of N doesn't matter because our exit conditions return long before
 
 for(let i=2;i< prod;i++)
   {
   
    //generate new fibArr  given upper bound of n
     fibArr[i] = fibArr[i-1] + fibArr[i-2];
     
     //check after each addition if it satifies the conditions to save time
     if(fibArr[i-1] * fibArr[i] === prod )
        {result = [fibArr[i-1],fibArr[i], true];
        break;}
     
     //if not, check if we are over the product in which case its not a valid product
     else if (fibArr[i-1] * fibArr[i] > prod) 
         {result = [fibArr[i-1], fibArr[i], false];
          break;}    
    }
   
  //try to have only 1 return statement 
  return result;

}

console.log(productFib(602070));
