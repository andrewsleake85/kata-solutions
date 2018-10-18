//given two string arrays, retard a sorted array in lexicographical order of the 
//strings of a1 that are substrings of strings of a2
//a1 = ["arp", "live", "strong"]
//a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//returns ["arp", "live", "strong"]

let a1 = ["arp", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];


function inArray(array1,array2){
  let allSubstrings = [];
  for(let k = 0; k< array2.length;k++){
    let str = array2[k];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length + 1; j++) {
        allSubstrings.push(str.slice(i, j));
      }
    }
  }
  let result = [];
  for(let i=0;i<array1.length;i++){
    if(allSubstrings.includes(array1[i])){
      result.push(array1[i]);
    }
  }
  return result.sort(); 
}

console.log(inArray(a1,a2));