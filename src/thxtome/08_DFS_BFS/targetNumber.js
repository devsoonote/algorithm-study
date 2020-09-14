export const targetNumber = (numbers, target) => {
  return dfs(0, 0, numbers, target, 0);
};

const dfs = (sum, index, numbers, target, answer) => {
  if (index === numbers.length) {
    return sum === target ? 1 : 0;
  }

  return (
    dfs(sum + numbers[index], index + 1, numbers, target) +
    dfs(sum - numbers[index], index + 1, numbers, target)
  );
};
