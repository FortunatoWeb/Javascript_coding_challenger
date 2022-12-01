
function readRomans(s){
    let sum = 0;
    let objRomans = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }

    for(let i=0;i<s.length;i++){
        if(objRomans[s[i]]<objRomans[s[i+1]]){
            sum += (objRomans[s[i+1]]-objRomans[s[i]]);
            i = i+1;
        }else{
            sum += objRomans[s[i]];
        }
    }
    return sum;
}

console.log(readRomans('MCMXCIV')); //1994