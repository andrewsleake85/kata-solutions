//sorts an array into even and odd and counts how many swaps it takes

let ex1 = [1,54,3,5,34,6,7,3];
 
function segregateEvenOdd(a) { 

   
    /* Initialize left and right indexes */
    let count = 0;
    let left = 0;
    let right = a.length - 1; 
    while (left < right) 
    { 
        /* Increment left index while we see 0 at left */
        while (a[left]%2 === 0 && left < right) 
            left++; 

        /* Decrement right index while we see 1 at right */
        while (a[right]%2 === 1 && left < right) 
            right--; 

        if (left < right) 
        { 
            /* Swap arr[left] and arr[right]*/
            let temp = a[left]; 
            a[left] = a[right]; 
            a[right] = temp; 
            left++; 
            right--; 
            count++;
        } 
    } 
    return count;
} 

console.log(segregateEvenOdd(ex1));