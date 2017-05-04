/*
Bubble Sorting Algorithm

pseudocode:

Compare the first item to the second item.
If the first item should be after the second item, swap them.
Compare the second item to the third item.
If the second item should be after the third item, swap them.
Continue until the end of the data set is reached.

*/

var elements = [3, 2, 4, 5, 1];
console.log("unsorted array: " + elements);

// swap itens if needed
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

//Bubble sort algorith
function bubbleSort(items){

    var len = items.length,
        i, j, stop;

    for (i=0; i < len; i++){
        //console.log("pass " + (i+1))

        for (j=0, stop=len-i; j < stop; j++){
            //console.log("compare " + (j+1))

            if (items[j] > items[j+1]){
                swap(items, j, j+1);
            }
        }
    }

    return items;
}

console.log("Bubble sorted: " + bubbleSort(elements));
