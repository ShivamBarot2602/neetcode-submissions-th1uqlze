class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // search(arr, target) {
    //     let left = 0;
    //     let right = arr.length-1;

    //     while(left<=right) {
    //         let mid = Math.trunc((left+right) / 2);

    //         if(arr[mid] < target) {
    //             left=mid+1;
    //         } else if(arr[mid] > target) {
    //             right=mid-1;
    //         } else {
    //             console.log("Left ",left, " right ",right, "arr ",arr[left], arr[right])
    //             return true
    //         }
    //     }
    //     return false
    // }

    // searchMatrix(matrix, target) {
    //     let left = 0;
    //     let right = matrix.length-1;

    //     while(left <= right) {
    //         let mid = Math.trunc((left+right)/2);

    //         if(matrix[mid][0] > target) {
    //             right = mid-1
    //         } else if(matrix[mid][matrix[mid].length-1] < target) {
    //             left = mid+1
    //         } else {
    //             return this.search(matrix[mid], target)
    //         }
    //     }
    //     return false
    // }

    search(arr, target) {
        let l=0;
        let r=arr.length-1;

        while(l<=r) {
            let mid=Math.trunc((l+r)/2);

            if(arr[mid] > target) {
                r=mid-1
            } else if(arr[mid] < target) {
                l=mid+1
            } else {
                return true
            }
        }

        return false
    }

    searchMatrix(matrix, target) {
        let l=0;
        let r=matrix.length-1;

        while(l<=r) {
            let mid = Math.trunc((l+r)/2);

            if(target < matrix[mid][0]) {
                r=mid-1
            } else if(target > matrix[mid][matrix[mid].length-1]) {
                l=mid+1
            } else {
                return this.search(matrix[mid], target)
            }
        }

        return false
    }
}
