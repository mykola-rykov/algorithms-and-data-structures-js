// two pointers problem-solving approach!
const merge = (a, b) => {
    let mergedArr = [],
        i = 0,
        j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            mergedArr.push(a[i]);
            i++;
        } else {
            mergedArr.push(b[j]);
            j++;
        }
    }

    while (i < a.length) {
        mergedArr.push(a[i]);
        i++;
    }
    while (j < b.length) {
        mergedArr.push(b[j]);
        j++;
    }

    return mergedArr;
};

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
