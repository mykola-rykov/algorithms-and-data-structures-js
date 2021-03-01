import { assert } from "chai";
import quickSort from './quick-sort';

describe('quickSort', () => {
    it('should sort a given array using Quick Sort algo', () => {
        let arr = [18, 3, 5, 81, 1],
            sortedArr = [1, 3, 5, 18, 81];
        assert.sameOrderedMembers(quickSort(arr), sortedArr);

        arr = [1, 5, 1, 10, 9, 17, 99, 2, 1, 0, 12, 5, 9, 71];
        sortedArr = [0, 1, 1, 1, 2, 5, 5, 9, 9, 10, 12, 17, 71, 99];
        assert.sameOrderedMembers(quickSort(arr), sortedArr);
    });
});
