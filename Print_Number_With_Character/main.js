//this script prints some cool formatters numbers from 1-99999

function printNumber(number, char) {
  let newNumber = number.toString();
  //add leading zeroes;
  while (newNumber.length < 5){
    newNumber = '0' + newNumber;
  }

  let peices = {
  l1_0:' 4 ',   l2_0:'2  2', l3_0:'2  2',  l4_0:'2  2',  l5_0:'2  2',  l6_0:' 4 ',
  l1_1:'  2  ', l2_1:' 3  ', l3_1:'1 2  ', l4_1:'  2  ', l5_1:'  2  ', l6_1:'6',
  l1_2:' 4 ',   l2_2:'2  2', l3_2:'   2 ', l4_2:'  2  ', l5_2:' 2   ', l6_2:'6',
  l1_3:' 4 ',   l2_3:'2  2', l3_3:'   2 ', l4_3:'   2 ', l5_3:'2  2',   l6_3:' 4 ',
  l1_4:'2  2',  l2_4:'2  2', l3_4:'2  2',  l4_4:' 5',    l5_4:'    2', l6_4:'    2',
  l1_5:'6',     l2_5:'2    ',l3_5:'5 ',    l4_5:'    2', l5_5:'    2', l6_5:'5 ',
  l1_6:'   2 ', l2_6:'  2  ',l3_6:' 4 ',   l4_6:'2  2',  l5_6:'2  2',  l6_6:' 4 ',
  l1_7:'6',     l2_7:'2  2', l3_7:'   2 ', l4_7:'  2  ', l5_7:' 2   ', l6_7:' 2   ',
  l1_8:' 4 ',   l2_8:'2  2', l3_8:' 4 ',   l4_8:' 4 ',   l5_8:'2  2',  l6_8:' 4 ',
  l1_9:' 4 ',   l2_9:'2  2', l3_9:'2  2',  l4_9:' 4 ',   l5_9:'  2  ', l6_9:' 2   '
  }

  let line1  = char.repeat(40) + '\n';
  let line2  = char + '                                      ' + char + '\n'
  let line3  = getLine('l1_',newNumber,peices,char);
  let line4  = getLine('l2_',newNumber,peices,char);
  let line5  = getLine('l3_',newNumber,peices,char);
  let line6  = getLine('l4_',newNumber,peices,char);
  let line7  = getLine('l5_',newNumber,peices,char);
  let line8  = getLine('l6_',newNumber,peices,char);
  let line9  = char + '                                      ' + char + '\n'
  let line10 = char.repeat(40);
  
  return line1+line2+line3+line4+line5+line6+line7+line8+line9+line10;
}

function getStr(str,char){
  let result = "";
  for(let i=0;i<str.length;i++){
    if(str[i] !== ' '){
      result += char.repeat(str[i]);
    }else{
     result += str[i];
    } 
  }
  return result;
}

function getLine(line,number,peices,char){
  return char + '  ' + 
         getStr(peices[line + number[0]],char) + ' ' +
         getStr(peices[line + number[1]],char) + ' ' + 
         getStr(peices[line + number[2]],char) + ' ' + 
         getStr(peices[line + number[3]],char) + ' ' + 
         getStr(peices[line + number[4]],char) + ' ' + 
         ' ' + char + '\n';

}

console.log(printNumber(38411,'$'));
console.log(printNumber(51,'$'));