// DESCRIPTION:
// For an example list of 1, 3, 5, 7

//1. Add all of the numbers

//1+3+5+7 = 16
//2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

//16/4 = 4
//3. The mean (or average) of this list is 4


// SOLUTION:
var findAverage = nums => nums.reduce ((prev,curr) => prev + curr) / nums.length