const add = function (num1, num2) {
  return num1 += num2;

};

const subtract = function (num1, num2) {
  return num1 -= num2;

};

const sum = function (array) {
  let value = 0;

  for (const iterator of array) {
    value += iterator;

  }

  return value;

};

const multiply = function (array) {
  let value = 1;

  for (const iterator of array) {
    value *= iterator;

  }

  return value;

};

const power = function (num1, num2) {
  /*let value = 1;
  for (let i = 0; i < num2; i++) {
    value *= num1
  }
  return value;*/
  
  return Math.pow(num1, num2);


};

const factorial = function (num) {
  let value = 1;
  for (let i = num; i > 0; i--) {
    value *= i;

  }

  return value;
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
