package org.academiadecodigo.bootcamp8.selectionsort;

import java.lang.reflect.Array;
import java.util.Arrays;

/**
 * Created by codecadet on 08/05/17.
 */

/*
SELECTION SORTE ALGORITHM PSEUDOCODE:

The algorithm divides the input list into two parts:

1 - the sublist of items already sorted, which is built up from left to right at the front (left) of the list,
2 - and the sublist of items remaining to be sorted that occupy the rest of the list.

Initially, the sorted sublist is empty and the unsorted sublist is the entire input list.

The algorithm proceeds by finding the smallest element in the unsorted sublist,
exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order),
and moving the sublist boundaries one element to the right.


 */


public class SelectionSort {


    //Properties
   // int sorted[];
    int unsorted[];
    int size;
    int min;
    int max;
    int temp;
    int index;



    // Constructor that requires a array as argument
    public SelectionSort(int[] unsortedArray){
        size = unsortedArray.length;
        this.unsorted = unsortedArray;
       // this.sorted = new int[size];
    }


    public void printSorted(){
        min = unsorted[0];

        System.out.print("\nThe given unsorted sequence is: ");
        System.out.print(Arrays.toString(unsorted));

        System.out.println("\nThe sorted sequence is: ");

        //iterate over unsorted array
        for (int i = 0; i < size ; i++){

         //   System.out.print(" ");

            max = unsorted[i];

            if (max < min){
                swap();
            }

            System.out.print(unsorted[i]);
            System.out.print(" ");
            index++;
        }

            //check what is the smallest value in the unsorted array

            //copy smallest value to first position of empty sorted array

    }



    public void swap(){
        temp = min;
        min = max;
        max = temp;
        unsorted[index] = min;
        //unsorted[i] = max;
    }







}
