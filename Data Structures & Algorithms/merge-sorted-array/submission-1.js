class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let l=m-1, r=n-1;

        for(let i=nums1.length-1; i>=0; i--) {
            if(r >= 0) {
                if(l >= 0 && nums1[l] >= nums2[r]) {
                    nums1[i] = nums1[l];
                    nums1[l] = 0;
                    l--;
                } else {
                    nums1[i] = nums2[r];
                    r--;
                }
            }
        }

    }
}
