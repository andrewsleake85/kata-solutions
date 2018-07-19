//detects if two circles are touching each other or overlapping (true)
//if if they do not touch (false) give the x,y and radius of each


function collision(x1, y1, radius1, x2, y2, radius2) {
let dx = Math.abs(x1-x2);
let dy = Math.abs(y1-y2);
let distance = Math.sqrt((dx * dx)  + (dy * dy));

if (radius1 + radius2 >= distance) return true;

return false;

}