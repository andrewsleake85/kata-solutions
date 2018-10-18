//this script finds the cross product of 2 vectors


let v1 = [3,4,5];
let v2 = [5,6,7];

function crossProduct (vector1, vector2) {
  if(!Array.isArray(vector1) && !Array.isArray(vector2)){ 
  throw "Arguments are not 3D vectors!";
  };  
  if(Array.isArray(vector1) && Array.isArray(vector2) && vector1.length === 3 && vector2.length === 3){
    let u = vector1;
    let v = vector2;
    return [((u[1]*v[2])-(u[2]*v[1])),((u[2]*v[0])-(u[0]*v[2])),((u[0]*v[1])-(u[1]*v[0]))];
  } else if (Array.isArray(vector1) && Array.isArray(vector2)){
    throw "Arguments are not 3D vectors!";
  } 
}


console.log(crossProduct(v1,v2));