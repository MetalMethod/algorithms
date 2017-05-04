/*

Implementation of Iterative Factorial

pseudocode:

n = n * (n-1)

*/


var n = 4;
var resultado;

function fatorial(n) {
    if(n === 0 || n === 1) {
        return 1
    } else {
        resultado = 1;
        for(i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

console.log(fatorial(n));
