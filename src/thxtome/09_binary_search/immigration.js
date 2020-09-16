export const immigration = (n, times) => {
  let min = 0;
  let max =
    times.reduce((a, c) => {
      return a > c ? a : c;
    }) * n;
  return recursion(min, max, n, times);
};

const recursion = (min, max, n, times) => {
  let expected_time = Math.floor((min + max) / 2);

  let people = times.reduce((a, c) => {
    return (a += Math.floor(expected_time / c));
  }, 0);

  if (people >= n) {
    max = expected_time - 1;
  } else {
    min = expected_time + 1;
  }

  if (min > max) {
    return min;
  }

  return recursion(min, max, n, times);
};
