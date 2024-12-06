You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

Sure, here are two TypeScript solutions for this problem:

**Solution 1: Brute Force**

```tsx
function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

```

Time Complexity: O(n^2), where n is the length of the prices array. This is because for each element, we are checking the remaining elements in the array.
Space Complexity: O(1), the algorithm only uses a constant amount of extra space.

**Solution 2: One Pass**

```tsx
function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
}

```

Time Complexity: O(n), where n is the length of the prices array. This is because we are traversing the array once.
Space Complexity: O(1), the algorithm only uses a constant amount of extra space.