const swap = (arr, a, b) => {
    return ([arr[a], arr[b]] = [arr[b], arr[a]]);
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
    // ...
};

/**
 * QuickSort is a Divide and Conquer algorithm.
 * It picks an element as a pivot and partitions the given array around the picked pivot. 
 * @param {*} arr 
 * @param {*} leftIdx 
 * @param {*} rightIdx 
 */
const quickSort = (arr, leftIdx = 0, rightIdx = arr.length - 1) => {
    //...
    return arr;
};

export default quickSort;
