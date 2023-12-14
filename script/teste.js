/**
 * Testes e estudos
 */

/* import { dateTimeNow } from "./datetime.js"; */
/* import "./romans.js"; */
/* import "./twosum.js"; */
/* import "./intertoromans.js"; */
/* import "./integertowords.js"; */
/* import "./arrayduplicates.js"; */
/* import "./longestcommonprefix.js"; */
/* import "./reverseinteger.js"; */
/* import { calcEven } from "./evenorodd.js"; */




// Ranking de vencedores
// Imprimir os três primeiros colocados (1°, 2° e 3°)

let jogadores = [
    "Gregory",          // 0
    "Gertrudes",        // 1
    "Florisvaldo",      // 2
    "Washington",       // 3
    "Valdecialino"      // 4
]

//console.log("1° colocado: " + jogadores[0]);
//console.log("2° colocado: " + jogadores[1]);
//console.log("3° colocado: " + jogadores[2]);




// Somar lista de compras

let precos = [
    3.59,
    5.87,
    3.64,
    10.21,
    2.5,
]

let precos_2 = [
    1, // 0
    2, // 1
    3,
    1,
    3
]

// laços de repetição (looping)
// for ou
// while




function somaArray(array){
    var resultado = 0;
    for(let i = 0; i < array.length; i++){
        resultado = resultado + array[i];
    }
    return resultado
}

let result1 = somaArray(precos);
let result2 = somaArray(precos_2);

console.log(result1);
console.log(result2);

console.log(result1 + result2);

