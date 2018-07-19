// this program counts the land perimeter around the Xs
// for example two XX is only a perimeters of 2 on top, 2 on bottom, and 1 on each side


var sample = ["XOOOX","OOXOO","XOOXO"];  //should be 20
var sample_2 = ["OXXXOO","XOXOOO","OXXOOX","OOXOXX","XOXOXO"]; //should be 36




function landPerimeter(arr) {
var count = 0;
const x = 'X';
const o = 'O';
var vertStr = [];
var tempStr = "";

//get horizontal perimeters
for(let i = 0; i<arr.length;i++)
  {
    var ok = arr[i].split(o);
    
      for (let k=0; k < ok.length; k++)
        {
          if (ok[k].length >0) count += 2;
            }
  }
  
//get vertical strings
for(let i = 0; i < arr[0].length;i++)
  {
    for(let j = 0; j < arr.length;j++)
      {
        //console.log("j is : " + j+ " and i is : " + i );
        //console.log(arr[j].charAt(i));
        tempStr = tempStr + arr[j].charAt(i);
        
      }
      vertStr.push(tempStr);
      tempStr = "";
  }
  
//count vertical perims

for(let i = 0; i<vertStr.length;i++)
  {
    var pok = vertStr[i].split(o);
    
      for (let k=0; k < pok.length; k++)
        {
          if (pok[k].length >0) count += 2;
            }
  }

return 'Total land perimeter: ' + count;
}


console.log(landPerimeter(sample));
console.log(landPerimeter(sample_2));