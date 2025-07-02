const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
  return x-y;
};

const sum = function(arr) {
  let sum = arr.reduce((accumulator, currentValue)=>accumulator+=currentValue, 0);
  return sum;
};

const multiply = function(arr) {
  let sum = arr.reduce((accumulator,currentValue)=>accumulator*=currentValue,1);
  return sum;
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(x) {
  let result = 1;
	for(let i = x; i>0; i--){
    result *= i;
  }
  return result;
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
