//longhand versions without using 
// parseInt or toString
function binToHex (binaryString) {
 return decToHex(binToDec(binaryString));
}

function hexToBin (hexString) {
  return decToBin(hexToDec(hexString));
}
  
function binToDec(binaryString){
  let binary = binaryString.split("").reverse().join("");
  let decimal = "";
  for(let i = 0;i<binary.length;i++){
   decimal =  +decimal + (+binary[i] * Math.pow(2,i));
  }
return decimal;
}

function hexToDec(hexString){
  let hex = hexString.split("").reverse().join("");
  let decimal = "";
  let hexTable = {
  0:"0", 1:"1", 2:"2",
  3:"3", 4:"4", 5:"5",
  6:"6", 7:"7", 8:"8",
  9:"9", a:"10",A:"10",
  b:"11",B:"11",c:"12",
  C:"12",d:"13",D:"13",
  e:"14",E:"14",f:"15",
  F:"15"
  }
  for(let i=0;i<hex.length;i++){
  decimal = +decimal + (hexTable[hex[i]] * Math.pow(16,i));
  }
  return decimal;
}

function decToHex(decimalString) {
  let letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  let returnVal = "";
  let int = +decimalString;
  if(int === 0) return "0";
  while (int !== 0) {
    let rest = int % 16;
    int = Math.floor(int / 16);
    returnVal = letters[rest] + returnVal;
  }
    return returnVal;
}

function decToBin(decimalString) {
  let num = +decimalString;
  var bin = [];
  if(num === 0) bin.unshift(num);
  while (num > 0) {
  bin.unshift(num % 2);
  num >>= 1; // basically /= 2 without remainder if any
  }
 return bin.join('');
}


//a more general implementation. Not using any of this code but uselfull info.
function decToAnyBase(int, base) {
  let letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let returnVal = "";
  if (base > 1 && base < 37) {
    while (int !== 0) {
      let rest = int % base;
      int = Math.floor(int / base);
      returnVal = letters[rest] + returnVal;
    }
  }
  return returnVal;
}




///very very shorthand versions of the same thing


function baseConvert(str, from_base, to_base) {
  var str = str.toLowerCase()
  ,   dec = 0
  ,   res = '';
  
  for (var bit of str) {
    dec *= from_base;
    dec += '0123456789abcdef'.indexOf(bit);
  }
  
  while (dec) {
    res = '0123456789abcdef'[dec % to_base] + res;
    dec = dec / to_base | 0;
  }

  return res || '0';
}
