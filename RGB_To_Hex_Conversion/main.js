//this script converts 0-255 RGB values into hex values..does input validation
//in that it will adjust out of scope values



function rgb(r, g, b){
  r = adjust(r);
  g = adjust(g);
  b = adjust(b);
  return makeTwo(r.toString(16)).toUpperCase() +
         makeTwo(g.toString(16)).toUpperCase() + 
         makeTwo(b.toString(16)).toUpperCase();
  
}

function adjust(value){
 if(value > 255){
    return 255;
  } else if (value <= 0){
    return 0;
  } else {
    return value;
  }
}

function makeTwo(str){
  if(str.length === 1){
    return '0'+str;
  } else {
    return str;
  }
}

console.log(rgb(223,12,85));
console.log(rgb(300,300,-5));