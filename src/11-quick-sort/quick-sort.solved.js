const swap = (arr, a, b) => {
    return ([arr[a], arr[b]] = [arr[b], arr[a]]);
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start],
        swapIdx = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, swapIdx, start);
    return swapIdx;
};

const quickSort = (arr, leftIdx = 0, rightIdx = arr.length - 1) => {
    if (leftIdx < rightIdx) {
        let pivotIdx = pivot(arr, leftIdx, rightIdx);
        quickSort(arr, leftIdx, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, rightIdx);
    }
    return arr;
};

export default quickSort;
