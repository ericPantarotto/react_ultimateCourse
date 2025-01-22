export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
