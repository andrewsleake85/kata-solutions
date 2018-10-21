//finds the minimum difference between array elements, then stores or prints all 
//pairs that match that minimum difference



function closetPairs (arr) {
    var result = []; 
	var minDiff = Number.MAX_VALUE;
    
    // sort the given array
    var sortedArr = arr.sort(function(a, b) {
    	return a - b;
    });
    
    // find the lowest difference for a pair of elements in the sorted array
    for (var i = 0; i < sortedArr.length - 1; i++) {
        var currDiff = sortedArr[i + 1] - sortedArr[i];
        if (currDiff < minDiff) {
        	minDiff = currDiff;2, 5, 11, 19
        }
    }
    
    // find all the pairs with lowest differnece
    for (var j = 0; j < sortedArr.length - 1; j++) {
    	var sortedEleDiff = sortedArr[j + 1] - sortedArr[j];
        if (minDiff === sortedEleDiff) {
            result.push(sortedArr[j + 1], sortedArr[j]);
            //console.log(sortedArr[j] + " " + sortedArr[j+1]);
        }
    }
    
    var sortedResult = result.sort(function (a, b) { 
        return a - b;
    });
	
    return sortedResult;
}

var inputArr = [-20, -3910, -357, -3620, 7374, -7330, 30, 6246, -646, 266, -510, -460 ];

console.log(closetPairs(inputArr)); // [-510, -460, -20, 30]