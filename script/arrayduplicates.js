/**
 * Question applied on coding challenge by turing in 26/08/2022.
 * Find the winner number (bigger) among a group of array like [[1,2,3,4,4,5],[8,8,9,9,10,10]] without repetition
 */

const findDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index);

function deleteDuplicates(arr, duplicates){
    let newArr = arr;
    for(let i=0;i<duplicates.length;i++){
        newArr = newArr.filter(a => a !== duplicates[i]);
    }
    return newArr;
}

function mergeArray(arr){
    let arrFinal = [];
    for(let i=0;i<arr.length;i++){
        let arrWithoutRepetition = deleteDuplicates(arr[i], findDuplicates(arr[i]));
        arrFinal = arrFinal.concat(arrWithoutRepetition);
    }
    return arrFinal;
}

function winner(array){
    return mergeArray(array).reduce((a,b) => a>b ? a : b);
}

let array = [[1,2,3,4,4,5],[8,8,9,9,10,10]];

console.log(winner(array));
