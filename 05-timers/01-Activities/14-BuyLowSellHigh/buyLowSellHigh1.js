var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1]; //7600



biggestProfit = function(stockArray, sharesBought){

    if(stockArray.length > 2) {
        // do something
        console.log("We have more than 2 prices!");
        var minPrice = stockArray[0];
        var maxPrice = stockArray[1] - stockArray[0];

        for(var i = 1; i < stockArray.length; i++){
            var currentPrice = stockArray[i];

            var potentialProfit = currentPrice - minPrice;

            if(maxPrice < potentialProfit) {
                maxPrice = potentialProfit;
            }
            if(minPrice > currentPrice) {
                minPrice = currentPrice;
            }
        }
        return maxPrice * sharesBought;

    }
 else {
     console.log("Error, you need at least 2 prices!");
 }
}


biggestProfit(stockPrices, 1000);