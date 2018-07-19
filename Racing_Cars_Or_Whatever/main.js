//this script finds how long and object going v2  takes to overtake  v1 that also had a starting distance of g


var v1 = 100;  // 100 feet/hour
var v2 = 200;  // 200 feet/hour
var g = 1000;  // 1000ft head start

function race(v1, v2, g) {

    if (v1 > v2) return null;
   //convert speeds to feet per  10th of a second for greater accuracy
   v1 = v1 / 36000;
   v2 = v2 / 36000;
   var v1Dist;
   var v2Dist;
   var t = 0; //time in tenths of seconds
   
   while((v1 * t) + g > v2 * t)  //while turtle 1 total distance greate than turtles 2
     {
        t++;
        
     }
     
   
   console.log(t);
var red_hours = Math.floor( t / 36000);
var red_mins = Math.floor((t % 36000) / 600);
var red_seconds = Math.floor((t % 600) *.1);
     
return [red_hours, red_mins, red_seconds];
}


console.log(race(v1,v2,g)); //takes 10 hours to catch up
console.log(race(v1,v2,g+25)); //takes 10 hours and 15 minutes to catch up
console.log(race(v1,v2,g+2)); //takes 10 hours , 1 minute, 12 seconds to catch up
