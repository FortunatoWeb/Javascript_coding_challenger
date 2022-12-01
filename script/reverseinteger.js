/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x < -(2 ** 31) || x > 2 ** 31 -1){return 0;} 
    
    var strX = x.toString();
    var strReversed = '';

    for(let i=strX.length - 1; i>=0;i--){
        strReversed += strX[i];
    }

    Math.sign(x) == 1 ? strReversed = parseInt(strReversed) : strReversed = parseInt(strReversed)*(-1);

    if(strReversed < -(2 ** 31) || strReversed > 2 ** 31 -1){return 0;} 
    
    return strReversed;
};

console.log(reverse(-2147483648));