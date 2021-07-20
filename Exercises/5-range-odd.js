'use strict';

const rangeOdd = (start, end) => {
  const arr = new Array(0);
  if ((end - start) < 0) return arr;
  let i = start;
  for (i; i <= end; i++) {
    if (i % 2 !== 0) arr.push(i);
  }
  return arr;
};

// const rangeOdd = (start = 0, end = 0) => {
//   let min = Math.min(start, end);
//   const max = Math.max(start, end);
//   const arr = new Array();
//   for (min; min <= max; min++) {
//     if ((min > 14) && (min < 31)) {
//       if (min % 2 === 1) arr.push(min);
//     }
//   }
//   return arr;
// };

module.exports = { rangeOdd };
