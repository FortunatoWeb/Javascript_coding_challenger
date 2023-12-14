/**
 * @param {string[]} words
 * @return {string[]}
 */

const words = ["Hello","Alaska","Dad","Peace"]

var findWords = function(words) {
    var result = []
    var firstRow = ['q','w','e','r','t','y','u','i','o','p']
    var seconRow = ['a','s','d','f','g','h','j','k','l']
    var thirtRow = ['z','x','c','v','b','n','m']

    let test = words[1].split('')
    let count = 0
    var result = []
    
        for(let i=0; i<test.length; i++){
            var match = seconRow.some(letter => letter.toUpperCase() == test[i]);
            if(match){
                count += 1
            }
        }

        if (count == test.length){
            result.push(test)
        }

    console.log(match,count, words[0], words[1], words[2], words[3])

    return result
    
};

function checkRow(text, arr){
    text = text.split('')
    text.map(arr.every(letter => letter == text))
    return text
}

console.log(findWords(words))