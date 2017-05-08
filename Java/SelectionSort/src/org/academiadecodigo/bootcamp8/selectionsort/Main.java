package org.academiadecodigo.bootcamp8.selectionsort;

/**
 * Created by codecadet on 08/05/17.
 */
public class Main {

    public static void main(String[] args) {


        int unsorted[] = {64, 25, 12, 22, 11, 33};

        SelectionSort sort = new SelectionSort(unsorted);

        sort.printSorted();

    }


}
