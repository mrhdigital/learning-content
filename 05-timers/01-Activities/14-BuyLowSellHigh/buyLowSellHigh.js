
// Buy Low, Sell High -- Starter Code


// Stock Prices
var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1]; //7600
var loss = [135, 34, 25, 22, 21, 4, 1]; // 10000


// Your Biggest Profit function
var biggestProfit = function(stockArray, sharesBought) {
    
    // Check to make sure that array is greater than 2
    if(stockArray.length > 2) {
        // do some stuff

        //Set the Initial minPrice, you can buy nay earlier than the first value
        var minPrice = stockArray[0];

        // Set initial max profit, your first opportunity to sell is the second number
        var maxprofit = stockArray[1] - stockArray[0];

        // Loops over the array, skipping the first value, since it's already
        // the minPrice and we can't sell when we buy - i starts with 1 instead of 0
        for(var i = 1; i < stockArray.length; i++) {
            var currentPrice = stockArray[i];
            var potentialProfit = currentPrice - minPrice;

            if(maxprofit < potentialProfit) {
                maxprofit = potentialProfit;
            }
            if(minPrice > currentPrice) {
                minPrice = currentPrice;
            }
        }
        return maxprofit * sharesBought;
    } else {
        console.log("You need a least 2 prices to continue!");
    }

};

// A Call to your Biggest Profit function.
biggestProfit(stockPrices, 10000);

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.
