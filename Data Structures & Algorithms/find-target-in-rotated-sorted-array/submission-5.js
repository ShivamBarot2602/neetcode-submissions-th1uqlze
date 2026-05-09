class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // search(nums, target) {
    //     let l=0;
    //     let r=nums.length-1;

    //     while(l <= r) {
    //         let mid = Math.trunc((l + r) / 2);
    //         if(nums[mid] === target) {
    //             return mid
    //         }

    //         if(nums[l] <= nums[mid]) {
    //             if(target > nums[mid] || target < nums[l]) {
    //                 l = mid+1
    //             } else {
    //                 r=mid-1
    //             }
    //         } else {
    //             if(target < nums[mid] || target > nums[r]) {
    //                 r = mid-1
    //             } else {
    //                 l=mid+1
    //             }
    //         }
    //     }

    //     return -1
    // }

    // search(nums, target) {
    //     let l =0, r=nums.length-1;

    //     while(l<=r) {
    //         let mid = Math.trunc((l+r) / 2);
    //         if(nums[mid] === target) {
    //             return mid
    //         }

    //         if(nums[l] <= nums[mid]) {
    //             if(target > nums[mid] || target < nums[l]) {
    //                 l=mid+1;
    //             } else {
    //                 r=mid-1
    //             }
    //         } else {
    //             if(target < nums[mid] || target > nums[r]) {
    //                 r=mid-1
    //             } else {
    //                 l=mid+1
    //             }
    //         }
    //     }

    //     return -1
    // }

    // search(nums, target) {
    //     let l=0;
    //     let r=nums.length-1;

    //     while(l<=r) {
    //         let mid = Math.trunc((l+r)/2);

    //         if(nums[mid] === target) {
    //             return mid
    //         }

    //         if(nums[l] <= nums[mid]) {
    //             if(target < nums[l] || target > nums[mid]) {
    //                 l=mid+1
    //             } else {
    //                 r=mid-1
    //             }
    //         } else {
    //             if(target < nums[mid] || target > nums[r]) {
    //                 r=mid-1
    //             } else {
    //                 l=mid+1
    //             }
    //         }
    //     }

    //     return -1
    // }

    search(nums, target) {
        let l=0;
        let r=nums.length-1;

        while(l <= r) {
            let mid = Math.trunc((l + r) / 2);

            if(nums[mid] === target) {
                return mid;
            }
            // mid in left sorted portion of array
            if(nums[l] <= nums[mid]) {
                if(target < nums[l] || target > nums[mid]) {
                    l=mid+1;
                } else {
                    r=mid-1;
                }
            } else {
                if(target > nums[r] || target < nums[mid]) {
                    r=mid-1;
                } else {
                    l=mid+1;
                }
            }
        }

        return -1;
    }
}
