
// Buy Low, Sell High -- Starter Code


// Stock Prices
var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];


// Your Biggest Profit function
var biggestProfit = function(stockArray, sharesBought) {
    if(stockArray.length > 2) {
        // do some stuff
        var minPrice = stockArray[0];
        var maxprice = stockArray[1] - stockArray[0];
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
