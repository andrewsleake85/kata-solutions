/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    
    //put caps in also so we dont waste time or memory using toLowerCase();
    let topRow = "qwertyuiopQWERTYUIOP";
    let midRow = "asdfghjklASDFGHJKL";
    let botRow = "zxcvbnmZXCVBNM";
    
    //array to store results
    let singleRowWords = [];
    //count how many letters of each word is in the row and compare to length of word
    for(let i = 0;i<words.length;i++){
        let wordLength = words[i].length;
        let topRowCount = 0;
        let midRowCount = 0;
        let botRowCount = 0;
        for(let j = 0;j<words[i].length;j++){
            if(topRow.includes(words[i].charAt(j))){
                topRowCount++;
            } else if (midRow.includes(words[i].charAt(j))){
                midRowCount++;
            } else if (botRow.includes(words[i].charAt(j))){
                botRowCount++;
            }
            
        }
        //add the word to results if its row count matches its length
        if(topRowCount === wordLength || midRowCount === wordLength || botRowCount === wordLength){
            singleRowWords.push(words[i])
        }          
    }  
    return singleRowWords;  
};