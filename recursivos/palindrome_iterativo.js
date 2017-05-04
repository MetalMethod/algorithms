/*

Implementation of Iterative Palindrome

pseudocode:



*/

var str = "anana";

function palindrome(str) {

 var len = str.length;

 for (var i = 0; i < Math.floor((len/2) + 1); i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
console.log(palindrome(str));
