/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0;
    let largest = prices[prices.length - 1];
    for(let i = prices.length - 2;i >= 0;i--) {
        if(largest < prices[i]) {
            largest = prices[i];
        }
        if(largest - prices[i] > profit) {
            profit = largest - prices[i];
        }
    }
    return profit;
};