//this script finds the special vending machine which vends higher
//weight candy bar in less than 10 weighs
//by measuring half of them anbd further reducing the pool
//until the right one is found
// no samples unfortunately but the code is good


//vms would be the vending machine. 






function findSpecialIdx(vms) {



 function breakDown(begin, mid,  end, count) {

 
   if(mid === end){
   console.log("the answer is index " + begin);
   return begin;}
  
  let s1 = [begin, mid ,end ]; 
  console.log (" ");
  console.log(s1);
  
  
  //vend half of the machines  
  for (let i = begin; i< mid;i++)
    {
      vms[i].vend();
    }
  
  //get weight
  let weight = vms.weigh();
  let weightRem = weight % 100;
  console.log("weight after vending the first half is " + weight );
  console.log("current count is " + count);
  
  //see if the special is in that set
  if ( weightRem === count )
    { 
      
      console.log(weightRem + " is the mod value and it was in first half"); 
      return breakDown( begin, Math.ceil((mid-begin) /2)+begin, mid, count+1)
  
  
    }
  
  
  //if it wasn't in that set its in the other
  else
    {
     console.log(weightRem + " is the mod value and it was in second half"); 
     return breakDown(mid, Math.ceil((end-mid) /2)+mid , end, count)

    }
  
   
 
  }


return breakDown(0,50,99,1);




 
}