var intToRoman = function(num) {

    num = num.toString();
    var kilo, hecto, deca, unit;
    var Rkilo, Rhecto, Rdeca, Runit;
    let arrNum = Array.from(num);
    
    if(arrNum.length >= 4){
        kilo = arrNum.slice(-4,-3);
        Rkilo = "M".repeat(kilo);
    }else{
        Rkilo = "";
    }
    if(arrNum.length >= 3){
        hecto = arrNum.slice(-3,-2);
        hecto = parseInt(hecto.shift());
        if(hecto == 0){
            Rhecto = "";
        }else if(hecto < 4){
            Rhecto = "C".repeat(hecto);
        }else if(hecto == 4){
            Rhecto = "CD";
        }else if(hecto == 5){
            Rhecto = "D";
        }else if(hecto == 9){
            Rhecto = "CM";
        }else{
            Rhecto = "D"+("C".repeat(hecto-5));
        }
    }else{
        Rhecto = "";
    }
    if(arrNum.length >= 2){
        deca = arrNum.slice(-2,-1);
        deca = parseInt(deca.shift());
        if(deca == 0){
            Rdeca = "";
        }else if(deca < 4){
            Rdeca = "X".repeat(deca)
        }else if(deca == 4){
            Rdeca = "XL";
        }else if(deca == 5){
            Rdeca = "L";
        }else if(deca == 9){
            Rdeca = "XC";
        }else{
            Rdeca = "L"+"X".repeat(deca-5);
        }
    }else{
        Rdeca = "";
    }
    if(arrNum.length >= 1){
        unit = arrNum[arrNum.length-1];
        Runit = "I".repeat(unit);
        if(unit == 0){
            Runit = "";
        }else if(unit < 4){
            Runit = "I".repeat(unit);
        }else if(unit == 4){
            Runit = "IV";
        }else if(unit == 5){
            Runit = "V"
        }else if(unit == 9){
            Runit = "IX";
        }else{
            Runit = "V"+"I".repeat(unit-5);
        }
    }else{
        Runit = "";
    }

    return Rkilo+Rhecto+Rdeca+Runit;
    
};

console.log(intToRoman(40));
