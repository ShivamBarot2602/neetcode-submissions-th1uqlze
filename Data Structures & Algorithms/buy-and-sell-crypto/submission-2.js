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

     maxProfit(prices) {
      let minPrice = prices[0];
      let maxProfit = 0;

      for(let price of prices) {
         minPrice = Math.min(price, minPrice);
         let profit = price - minPrice;
         maxProfit = Math.max(profit, maxProfit);
      }

      return maxProfit
     }
}
