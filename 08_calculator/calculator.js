const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
    return num1 - num2
};

const sum = function(arr) {
    return arr.reduce((sum,current) => sum + current, 0);
};

const multiply = function(arr) {
    return arr.reduce((sum,current) => sum * current, 1);
};

const power = function(num1,num2) {
    // const result = arr.reduce((num1,num2) => Math.pow(num1,num2));
    // console.log(result);
    return Math.pow(num1,num2);
};

const factorial = function(num) {
    if(num === 0 || num === 1){
        return 1;
    }
    return num*factorial((num-1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
