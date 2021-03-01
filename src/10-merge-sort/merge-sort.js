// two pointers problem-solving approach!
const merge = (a, b) => {
    let mergedArr = [],
        i = 0,
        j = 0;
    
    // ...

    return mergedArr;
};

/**
 * Merge Sort is a Divide and Conquer algorithm.
 * It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
 * The merge() function is used for merging two halves.
 * @param arr 
 */
const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));
    return merge(left, right);
};

export default mergeSort;
