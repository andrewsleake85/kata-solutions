//this script sorts only the odd numbers in an array, the evens cannot move


let ex1 = [1,3,4,5,6,66,4,2,41,75,3,4,1];

function sortArray(array) {
    let evensWithPlaces = {};
    array.forEach(function(x,i) { if( x % 2 === 0) {evensWithPlaces[i] = x }})
    let onlyOdds = [];
    for(let i=0;i<array.length;i++){
        if(array[i] % 2 === 1){
         onlyOdds.push(array[i]);
        }
    }
    onlyOdds.sort(function(a,b) { return a-b});
    let result = [];
    for(let i=0; i<array.length;i++){
        if(evensWithPlaces[i] !== undefined){
          result.push(evensWithPlaces[i]);
        } else {
          result.push(onlyOdds.shift());
        }
    }
    return result; 
}

console.log(sortArray(ex1));