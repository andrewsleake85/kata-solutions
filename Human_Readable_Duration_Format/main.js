//this script converts a given amount of seconds into a normal
//readable format


let ex1 = 6783845;
let ex2 = 5006;
let ex3 = 9598293955;

function formatDuration (seconds) {
  if(seconds === 0){return "now";};

  let plural = "s";
  let sec = "second";
  let min = "minute";
  let hour = "hour";
  let day = "day";
  let year = "year";
  let totalTime = [];
  
  let m,h,d,y;
  let yT = 31536000;
  if(seconds >= yT ){
    y = Math.floor(seconds / yT);
    seconds -= y * yT;
    if( y > 1){
     totalTime.push("" + y + " " + year + plural);
    } else {
    totalTime.push("" + y + " " + year);
    }
  }
  let dT = 86400;
  if (seconds >= dT ){
    d = Math.floor(seconds / dT);
    seconds -= d * dT;
    if( d > 1){
     totalTime.push("" + d + " " + day + plural);
    } else {
    totalTime.push("" + d + " " + day);
    }
  }
  let hT = 3600;
  if(seconds >= hT){
    h = Math.floor(seconds / hT);
    seconds -= h * hT;
    if( h > 1){
     totalTime.push("" + h + " " + hour + plural);
    } else {
    totalTime.push("" + h + " " + hour);
    }
  }
  let mT = 60;
  if(seconds >= mT){
    m = Math.floor(seconds / mT);
    seconds -= m * mT;
     if( m > 1){
     totalTime.push("" + m + " " + min + plural);
    } else {
    totalTime.push("" + m + " " + min);
    }
  }
  if(seconds > 0){
    if(seconds > 1){
       totalTime.push("" + seconds + " " + sec + plural);
    } else {
       totalTime.push("" + seconds + " " + sec);
    }
  }
  let last = totalTime.pop();
  if(totalTime.length === 0){return last;};  
  return totalTime.join(", ") + " and " + last;
}

console.log(formatDuration(ex1));
console.log(formatDuration(ex2));
console.log(formatDuration(ex3));