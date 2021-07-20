'use strict';

const range = (start, end) => {
  const arr = [];
  if ((end - start) < 0) return arr;
  for (start; start <= end; start++) {
    arr.push(start);
  }
  return arr;
};
//возвращает диапазон от 15 до 30 даже если первое число больше второго
// const range = (start, end) => {
//   let min = Math.min(start, end);
//   const max = Math.max(start, end);
//   const arr = [];
//   for (min; min <= max; min++) {
//     if ((min > 14) && (min < 31)) {
//       arr.push(min);
//     }
//   }
//   return arr;
// };

module.exports = { range };
