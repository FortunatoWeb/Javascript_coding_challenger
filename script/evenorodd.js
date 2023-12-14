function calcEven(){
    let num1 = document.getElementById("numberGamer1").value;
    let num2 = document.getElementById("numberGamer2").value;
    let nameGamer1 = document.getElementById("nameGamer1").value;
    let nameGamer2 = document.getElementById("nameGamer2").value;
    let chosedGamer1 = document.getElementById("chosedGamer1").value;
    let chosedGamer2 = document.getElementById("chosedGamer2").value;

    if(num1 == "" || num2 == ""){
        showDanger("Informe os valores para os jogadores 1 e 2!");
        return;
    }

    if(chosedGamer1 == "" || chosedGamer2 == ""){
        showDanger("Escolha (par ou ímpar) para ambos jogadores!");
        return;
    }

    if(nameGamer1 == "" || nameGamer2 == ""){
        showDanger("Informe os nomes para ambos jogadores!");
        return;
    }

    let sum = parseInt(num1) + parseInt(num2);

    console.log("\n");
    console.log(nameGamer1 + " = " + num1);
    console.log(nameGamer2 + " = " + num2);
    console.log("Soma = " + sum);

    if(isEven(sum) == chosedGamer1){
        console.log("Resultado = par");
        showSuccess("Vencedor(a):\n " + nameGamer1);
        console.log("Vencedor(a): " + nameGamer1)
        return;
    }
    console.log("Resultado = impar");
    showSuccess("Vencedor(a):\n " + nameGamer2);
    console.log("Vencedor(a): " + nameGamer2)
    return;
}

function isEven(number){
    return number % 2 === 0;
}

function showDanger(text){
    document.getElementById("box-result").classList.remove("alert-primary");
    document.getElementById("box-result").classList.add("alert-danger");
    document.getElementById("value-result").innerHTML = text;
    document.getElementById("box-result").classList.remove("d-none");
}

function showSuccess(text){
    document.getElementById("box-result").classList.remove("alert-danger");
    document.getElementById("box-result").classList.add("alert-primary");
    let box = document.getElementById("box-result");
    let valueResult = document.getElementById("value-result");
    box.classList.remove("d-none");
    valueResult.innerHTML = text;
}

function changeSelectChosed(){
    window.addEventListener("DOMContentLoaded", function() {
        var chosedGamer1 = document.getElementById("chosedGamer1");
        var chosedGamer2 = document.getElementById("chosedGamer2");
        chosedGamer1.addEventListener("change", function(){
            chosedGamer2.value = Number(!Number(chosedGamer1.value));
        });
        chosedGamer2.addEventListener("change", function(){
            chosedGamer1.value = Number(!Number(chosedGamer2.value));
        });
    });
}

function evenOdd(){
    calcEven();
}

changeSelectChosed();