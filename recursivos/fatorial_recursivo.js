/*

Implementation of Recursive Factorial

pseudocode:

n = n * (n-1)

*/


var n = 4;
var resultado;

function fatorial(n) {
    if(n === 0 || n === 1) {
        return 1
    } else {
        return n * fatorial(n -1);
    }
}

console.log(fatorial(n));
