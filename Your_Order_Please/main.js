//this script finds words that have numbers in them and puts them in the correct order

let ex = "is2 Thi1s T4est 3a";

function order(str){
  if(str.length === 0) { return str;};
  let words = str.split(" ");
  let count = (words.length || 0);
  let len = words.length;
  let ordered = [];
  while(count > 0){
    for(let i = 0; i<len;i++){  
      if(words[i].includes("" + count)){       
        ordered.push(words[i]); 
        count--;
      } 
    }
  } 
  return ordered.reverse().join(" ");
}

console.log(order(ex));