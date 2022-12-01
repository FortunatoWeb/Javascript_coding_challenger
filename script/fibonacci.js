function fibo (a, b){
    var x; 
    for(i=0;i<=10;i++){
        x = a+b;
        a = b;
        b = x;
        console.log(x);
    }
}

function rFibo(a, b){
    console.log(b);
    if(b<=100){
        rFibo(b, a+b)
    }
}

function fibonacci(num){
    if(num<=1) return 1;
    return fibonacci(num-1)+fibonacci(num-2);
}

function listarFibonacci(c){
    let numbers = [];

    for(let i=1;i<=c;i++){
        let num = fibonacci(i);
        numbers.push(num);
    }
    //console.table(numbers);
    return numbers;
}

function printFibonacci(){
    var num = document.getElementById('num').value;
    var tableFibonacci = document.getElementById('tableFibonacci');
    var list = listarFibonacci(num);
    tableFibonacci.innerHTML = '';
    if(list.length>1){
        for(let n of list){
            tableFibonacci.innerHTML += '<tr><td>' + (list.indexOf(n)+1) + '</td><td>' + n + '</td></tr>';
        }
    }else{
        tableFibonacci.innerHTML = "<tr><td colspan='2'><div class='alert alert-warning'>O valor informado deve ser um número maior que 0.</div></td></tr>";
    }
    console.log(num, list);
}

function deleteFibonacci()
{
    let table = document.getElementById('tableFibonacci');
    table.innerHTML = '';
}

//export { printFibonacci };
