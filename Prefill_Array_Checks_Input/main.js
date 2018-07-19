//this program prefills an array of size n with v
//it verifies that the size n is not a boolean, is not inifinite, is an actual integer , and is not less than 0
//and throws a type error if n is any of those bad inputs



function prefill(n, v) {

if( n === 0 || n=== '0') return [];


if (typeof n === 'boolean' || !isFinite(n) || !Number.isInteger(Number(n)) || Number(n) < 0)
 {
    throw new TypeError(`${n} is invalid`)
 }

var arr = new Array(n);
arr.fill(v);
return arr;
}


console.log(prefill(100,"hi"));    //100 "hi" s , valid n
console.log(prefill(Infinity,67)); //throws type error, not finite
console.log(prefill(-5,"hi"));     //throws type error, negative n
console.log(prefill(true,"hi"));   //throws type error, boolean
console.log(prefill(53.67,"hi"));   //throws type error, not int

