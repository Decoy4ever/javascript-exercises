// Objective
// function takes arr argument print an array that is empty with n elements
// if the arr[4] = [0,1,1,3];
// Now we know fib seq: 1,1,3,5,8,13
// require a sum that takes empty array
// loop through the arr
// print out the result of sum[i] = sum[i-1] + sum[i-2]
// print the array and store into a new array

// 1. recursion these are the base case
// 0
// 1

// 2. create a var sum takes initial value of 0
// add num to the sum
// print each value
// 0 + 1 = 1
// (0 + 1) + 1 = 2
// (0 + 1 + 2) + 2 = 5
// (0 + 1 + 2 + 3) + 5 = 8


const fibonacci = function(num) {

    if(num === 0)
    {
        return 0;
    }
    else if(num === 1)
    {
        return 1;
    }
    else if(num < 0 )
    {
        return "OOPS";
    }
    else if(num === "1")
    {
        return 1;
    }
    else
    {
        return fibonacci(num - 1 ) + fibonacci(num - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
