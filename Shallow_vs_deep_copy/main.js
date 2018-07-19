
//shallow copy vs deep copy

var arr = [[1,2,3],[1,2,3]];
console.log(arr);
var arr_2 = arr;
//shallow copy...modifying arr will affect arr_2 as they point to same memory

//deep copy into a clone with new memory allocated
var cloned = arr.map(x => x.slice());
console.log(cloned);

//changes to arr dont affect cloned
arr.push("hello there");
console.log(arr);
console.log(cloned);

//changes to cloned dont affect arr

cloned.push("dont you seeeeee");
console.log(arr);
console.log(cloned);






