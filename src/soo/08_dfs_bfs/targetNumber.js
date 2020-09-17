function solution(numbers, target) {
  let answer = 0;

  const dfs = (numbers, target, currentSum, idx) => {
    if (idx >= numbers.length) {
      if (currentSum === target) answer++;
      return;
    }

    dfs(numbers, target, currentSum + numbers[idx], idx + 1);
    dfs(numbers, target, currentSum - numbers[idx], idx + 1);
  }

  dfs(numbers, target, 0, 0);


  return answer;
}
