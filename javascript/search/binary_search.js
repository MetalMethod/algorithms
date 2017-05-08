/*

Implementation of  Binary Search Algorithm

pseudocode:

Requires: 
array with ordered ints
size of the array
target number (the int to be found)
left index
right index
guess position


Steps:
- get the position at the middle of the array as the guess position
- check if the guess position is the target
- if it is not, check if the guess is lower than the target
- if it is lower, go to the first half of elements(those smaller than the guess)
- if it is not lower, go to the second half after the guess position
- repeat the above steps until the target is found

*/


var elements =[];
var size = 19;

elements.length = size;

var guess;
var left = 0;
var right = size;

target = 12;

//populate the array with ordered numbers

for (var i = 0; i <= size; i++ ){
	elements[i] = i ;

} 


console.log("\nBinary Search Algorithm");

console.log(elements);

console.log("target is " + target);

// Algorithm implementation



// iteration over elements
while (left <= right){


	guess = Math.floor((left + right)/2);
	console.log("guess is " + guess );

	if (elements[guess] === target   ){
		console.log("Target found on position " + elements[guess ] );
		return;
	}


	if(guess > target ){
		right = guess - 1;
	}else if(guess < target){
		left = guess + 1;
	}

	

} 




