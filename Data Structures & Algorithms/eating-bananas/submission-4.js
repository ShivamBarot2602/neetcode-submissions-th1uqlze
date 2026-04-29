class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    // minEatingSpeed(piles, h) {
    //     let left = 0;
    //     let right = Math.max(...piles);
    //     let res = Number.POSITIVE_INFINITY;

    //     while(left <= right) {
    //         let k = Math.trunc((left+right) / 2);
    //         let sum = 0;

    //         for(let i=0; i<piles.length; i++) {
    //             sum += Math.ceil(piles[i] / k);
    //         }

    //         if(sum <= h) {
    //             right = k - 1;
    //             res = Math.min(res, k);
    //         } else {
    //             left = k+1
    //         }
    //     }
        
    //     return res
    // }

    // minEatingSpeed(piles, h) {
    //     let l=1;
    //     let r=Math.max(...piles);
    //     let res = Number.POSITIVE_INFINITY;

    //     while(l<=r) {
    //         let k=Math.trunc((l+r)/2);
    //         let sum=0;

    //         for(let i=0; i<piles.length; i++) {
    //             sum+=Math.ceil(piles[i]/k)
    //         }

    //         if(sum <= h) {
    //             r=k-1;
    //             res=Math.min(k, res)
    //         } else {
    //             l=k+1;
    //         }
    //     }
    //     console.log("Res ",res)
    //     return res
    // }
















minEatingSpeed(piles, h) {
  let l=1;
  let r=Math.max(...piles);
  let res=+Infinity;

  while(l <= r) {
    let k = Math.trunc((l+r)/2);
    let hours = 0;

    for(let i=0; i<piles.length; i++) {
        hours += Math.ceil(piles[i]/k);
    }

    if(hours > h) {
        l=k+1;
    } else {
        r=k-1;
        res = Math.min(res, k)
    }
  }  

return res
}




}
