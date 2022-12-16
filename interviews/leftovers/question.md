When a candle finishes burning it leaves a leftover. k leftovers can be combined to make a new candle, which, when burning down, will in turn leave another leftover. You have n candles in your possession. Write a function to calculate the total number of candles you can burn.
Example
For n = 5 and k = 2, the output should be burn (n, k) = 9.
Here is what you can do to burn 9 candles:
⦁	burn 5 candles, obtain 5 leftovers;
⦁	create 2 more candles, using 4 leftovers (1 leftover remains);
⦁	burn 2 candles, end up with 3 leftovers;
⦁	create another candle using 2 leftovers (1 leftover remains);
⦁	burn the created candle, which gives another leftover (2 leftovers in total);
⦁	create a candle from the remaining leftovers;
burn the last candle.
