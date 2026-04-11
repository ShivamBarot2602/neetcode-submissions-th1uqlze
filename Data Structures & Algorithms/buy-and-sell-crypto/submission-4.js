class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    // maxProfit(prices) {
    //     let profit = 0;
    //     let l=0;

    //     for(let r=0; r<prices.length; r++) {
    //         while(prices[r] - prices[l] < 0) {
    //             l++;
    //         }

    //         profit = Math.max(profit, prices[r]-prices[l]);
    //     }

    //     return profit
    // }

   // Two Pointers
   //  maxProfit(prices) {
   //    let l = 0;
   //    let profit = 0;

   //    for(let r=1; r<prices.length; r++) {
   //       if(prices[l] < prices[r]) {
   //          profit = Math.max(profit, prices[r] - prices[l])
   //       } else {
   //          l = r;
   //       }
   //    }

   //    return profit
   //  }
    
   // Sliding Window
   //   maxProfit(prices) {
   //    let minPrice = prices[0];
   //    let maxProfit = 0;

   //    for(let price of prices) {
   //       minPrice = Math.min(price, minPrice);
   //       let profit = price - minPrice;
   //       maxProfit = Math.max(profit, maxProfit);
   //    }

   //    return maxProfit
   //   }



   maxProfit(prices) {
      let l=0;
      let maxProfit = 0;

      for(let r=0; r<prices.length; r++) {
         while(prices[l] > prices[r]) {
            l++;
         }
         maxProfit = Math.max(maxProfit, prices[r]-prices[l]);
      }

      return maxProfit
   }
}
