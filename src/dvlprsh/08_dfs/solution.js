function solution(numbers, target) {
  let answer = 0;
  function dfs(numbers, sum){
      if (numbers.length === 0){
          return sum === target && answer++;
      }
      const number = numbers.shift();
      dfs([...numbers], sum + number);
      dfs([...numbers], sum - number);
  }
  dfs(numbers, 0);
  return answer;
}

export default solution;