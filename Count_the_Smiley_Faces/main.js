//this script counts the number of smiley faces in an array


let ex1 = [':)', ';(', ';}', ':-D'];
let ex2 = [';D', ':-(', ':-)', ';~)'];

function countSmileys(arr) {
  let count = 0;
  for(let i = 0;i<arr.length;i++){
    if(arr[i][0] === ':' || arr[i][0] === ';'){
      if(arr[i][1] === ')' || arr[i][1] === 'D'){
        count++;
      } else if (arr[i][1] === '-' || arr[i][1] === '~'){
          if(arr[i][2] === ')' || arr[i][2] === 'D'){
            count++;
          }      
      } 
    }  
  }
  return count;
}

console.log(countSmileys(ex1));
console.log(countSmileys(ex2));