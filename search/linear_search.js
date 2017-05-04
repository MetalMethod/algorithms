/*

Implementation of Linear Search Algorithm

pseudocode:

Requires: 
array with random ints
size of the array
target number (the int to be found)

Steps:
- For all elements in a array, starting from the first
- Check if it is equal to target
- If it is, return its index(element position)
- Else continue to next element

*/


var elements =[];
var size = 19;

elements.length = size;

//populate the array with numbers from 0 to 9;
for (var i = 0; i <= size; i++ ){
	elements[i] = Math.floor((Math.random() * 9) + 1);

} 


target = 7;

console.log("\nLinear Search Algorithm"
+ "\nThe elements array" );


console.log(elements);

for (var i = 0; i <= size; i++){
	
	if (elements[i] == target){
		console.log("The target was found on position " + i +"\n");
	}

} 



