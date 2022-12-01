const piPalindricNumbers = (placesNumber) => {
    const a = Math.PI.toFixed(placesNumber).toString();
    const b = a.split(".");
    const c = b.pop();
    const d = c.toString().split("");
    let array4numbers = [];
    let palindricNumbers = [];
    for(let i=0;i<d.length;i++){
        if(d[(i+3)]){
            array4numbers.push(d[i]);
            array4numbers.push(d[i+1]);
            array4numbers.push(d[i+2]);
            array4numbers.push(d[i+3]);
        }
        if(isPalindromic(array4numbers) && array4numbers.length > 0){
            palindricNumbers.push(array4numbers);
        }
        array4numbers = [];
    }
    return palindricNumbers.length > 0 ? palindricNumbers : 'Palindric Numbers not found!';
}

const isPalindromic = (array) => {
    return array.toString() == array.reverse().toString() ? true : false;
}

let palindric = piPalindricNumbers(100);
console.log(palindric);