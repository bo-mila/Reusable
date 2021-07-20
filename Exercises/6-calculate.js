'use strict';

const square = a => a * a;
// const square = a => Math.pow(a, 2);

const cube = a => a ** 3;
// const cube = a => Math.pow(a, 3);

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    const res = average(square(i), cube(i));
    arr.push(res);
  }
  return arr;
};

module.exports = { square, cube, average, calculate };
