//this script cuts a string into chunks of size sz  and finds out if
//the chunk is it sum of the cubes of its digits added up and divided by 2
//and reverses it if it is, or it rotates the digits left if its not

let ex1 = "123456987654";
let sz1 = 6;

function revrot(str, sz) {
  if(sz > str.length || sz <= 0 || str.length < 1){
    return '';
  }
  let moddedChunks = [];
  for(let i=0;i<str.length;i+=sz){
    let current = str.substring(i,i+sz);
    if(current.length === sz){
      if(isCubedAndDiv2(current)){
      moddedChunks.push(current.split("").reverse().join(""));
      } else {
      moddedChunks.push(current.slice(1) + current[0]);
      }       
    }     
  }  
  return moddedChunks.join("");    
}

function isCubedAndDiv2(num){
  let result = 0;
  for(let i=0;i<num.length;i++){
      result += Math.pow(+num[i],3);
    }
  return (result % 2 === 0 ? true:false);
}

//123456  -> 234561  and 987654 -> 876549 - both rotated
console.log(revrot(ex1, sz1));