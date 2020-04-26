
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


            // Temp hold the current price in a variable
            var currentPrice = stockArray[i];

            // Potential profit is the current price minus the minPrice
            var potentialProfit = currentPrice - minPrice;

            // If maxProfit is less than the current potential profit, update the maxProfit
            if(maxprofit < potentialProfit) {
                maxprofit = potentialProfit;
            }

            // If minPrice is more than the currentPrice, update the minPrice
            if(minPrice > currentPrice) {
                minPrice = currentPrice;
                console.log(minPrice);
            }
        }

        // Multiply the maxProfit by the number of shares to get the total
        return maxprofit * sharesBought;
    } else {

        // Error if the array has 2 or less prices in it
        console.log("You need a least 2 prices to continue!");
    }

};

// A Call to your Biggest Profit function.
biggestProfit(stockPrices, 10000);

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.
