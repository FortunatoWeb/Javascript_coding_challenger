/**
 * @param {number} num
 * @return {string}
 */
 var numberToWords = function(num) {
    //num = parseInt(num);
    num = Math.round(num);
    let objValues = {
        1:"One",
        2:"Two",
        3:"Three",
        4:"For",
        5:"Five",
        6:"Six",
        7:"Seven",
        8:"Eight",
        9:"Nine",
        10:"Ten",
        11:"Eleven",
        12:"Twelve",
        13:"Thirteen",
        14:"Forteen",
        15:"Fifteen",
        16:"Sixteen",
        17:"Seventeen",
        18:"Eighteen",
        19:"Nineteen",
        20:"Twenty",
        30:"Thirty",
        40:"Forty",
        50:"Fifty",
        60:"Sixty",
        70:"Seventy",
        80:"Eighty",
        90:"Ninety",
        100:"Hundred",
        1000:"Thousand",
        1000000:"Million",
        1000000000:"Billion",
    }
    let billions = Math.floor(num/1000000000);
    let millions = Math.floor(num/1000000);
    let thousands = Math.floor(num/1000);
    let hundreds = Math.floor(num/100);
    let dozens = Math.floor(num/10);
    let units = Math.floor(num - billions-millions-thousands-hundreds-dozens);
    return units;
};

//console.log(numberToWords("12343.654"));

console.log(numberToWords(123456789101112));