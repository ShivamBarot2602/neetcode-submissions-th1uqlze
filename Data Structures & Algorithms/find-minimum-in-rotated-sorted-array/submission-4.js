class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // findMin(nums) {
    //     let left = 0;
    //     let right = nums.length-1;
    //     let res = nums[0];

    //     while(left <= right) {
    //         if(nums[left] < nums[right]) {
    //             res = Math.min(res, nums[left]);
    //             break;
    //         }

    //         let mid = Math.trunc((left+right) / 2);
    //         res = Math.min(res, nums[mid]);

    //         if(nums[mid] >= nums[left]) {
    //             left = mid+1;
    //         } else {
    //             right = mid-1;
    //         }
    //     }

    //     return res
    // }

    // findMin(nums) {
    //     let l=0;
    //     let r=nums.length-1;
    //     let res=nums[0];

    //     while(l<=r) {
    //         if(nums[l] < nums[r]) {
    //             res = Math.min(res, nums[l]);
    //         }

    //         let mid = Math.trunc((l+r) / 2);
    //         res = Math.min(res, nums[mid]);

    //         if(nums[mid] >= nums[l]) {
    //             l = mid+1
    //         } else {
    //             r = mid-1
    //         }
    //     }

    //     return res
    // }




















// findMin(nums) {
//     let l=0, r=nums.length-1;
//     let res = Number.POSITIVE_INFINITY;

//     while(l <= r) {
//         if(nums[l] <= nums[r]) {
//             res = Math.min(res, nums[l]);
//             break
//         }

//         let mid = Math.trunc((l+r)/2);
//         console.log("Mid ",mid)
//         res = Math.min(res, nums[mid]);

//         console.log("Res ",res)

//         if(nums[l] <= nums[mid]) {
//             l=mid+1
//         } else {
//             r=mid-1
//         }
//     }
//     return res
// }

findMin(nums) {
    let l=0;
    let r=nums.length-1;
    let res=Infinity;

    while(l <= r) {
        if(nums[l] < nums[r]) {
            return Math.min(res, nums[l]);
        }

        let mid = Math.trunc((l + r) / 2);
        res=Math.min(res, nums[mid]);
        // mid is in left sorted portion of array
        if(nums[mid] >= nums[l]) {
            l=mid+1;
        } else {
            r=mid-1;
        }
    }

    return res
}

}
