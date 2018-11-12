//this script adds huge numbers that are given as strings and returns a string

function takeOffZeros(str){
  if(str[0] === '0'){
    return takeOffZeros(str.slice(1));
  }
  return str;
}

function add(a, b) {
let result = "";
let leftover;
  while (a || b){
    if(a.length === 0){
    return  takeOffZeros(b + result);
    break;
    } else if ( b.length === 0 ){
    return  takeOffZeros(a + result);
    break;
    }
    let ones = Number(a[a.length-1]) + Number(b[b.length-1]);
    if( ones > 9 ){
      leftover = ones.toString()[0];
      ones = ones.toString()[1];
    }  else {
      leftover = 0;
    }
    result = ones + result;
    a = add(a.slice(0,-1),leftover.toString());
    b = b.slice(0,-1);
  }
  return takeOffZeros(result);
}

console.log(add("9814334552532523536","43434252362636236362"));