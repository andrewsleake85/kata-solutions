//this program takes any valid number with decimals
//and formats it into a non-rounded exact price
//very basic input validation

var sample_0 = 47829483.28374;   
var sample_1 = "true";   //returns NaN
var sample_2 = 26.1;


var numberToPrice = function(number) {
  if(!Number(number)) return 'NaN';
  
  var set = number.toString().split(".");
  var front = set[0].replace(/[^0-9-]+/g, '');
  var back = set[1];  
  if (!back) back = '00';
  back = Number( "." + back)
  back = ( Math.floor(100 * back) / 100).toFixed(2);
  back = back.toString().slice(1);
  
  for (let i = front.length; i >=0; i-=3)
    {
      front = front.slice(0,i) + "," + front.slice(i);
    }
  if (front[front.length-1] == ",")
    {  
      front = front.slice(0,front.length -1);
    }
  if (front[1] == "," && front[0] == "-")
   {
     front = front.slice(0,1) + front.slice(2);
    }
  if (front[0] == ",")
    {
      front = front.slice(1);
    }
  
  
 
 
 

  return front + back ;
}
  
  

console.log(numberToPrice(sample_0));
console.log(numberToPrice(sample_1));
console.log(numberToPrice(sample_2));