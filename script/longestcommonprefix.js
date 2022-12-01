/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    
    var prefix = "";
    var isEqual = 1;
    
    for(let i=0; i<strs[0].length && isEqual>0; i++){
        for(let j=0; j<strs.length && isEqual>0; j++){
            if(strs[0][i] != strs[j][i]){
                isEqual *= 0;
            }
        }
        if(isEqual == 1){
            prefix += strs[0][i];
        }
    }
    
    return prefix;
    
};