/*

Implementation of Iterative Palindrome

pseudocode:



*/

var str = "osso";

function palindrome(str) {

    var len = str.length;

    if (len === 0 || len === 1) {
        return true;
    }

    if (str[0] === str[len -1]) {
        return palindrome( str.slice(1, len - 1) );
    }

    return false;
}
console.log(palindrome(str));
