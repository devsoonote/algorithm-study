function solution(n, times) {
  let start = 0;
  let end = Math.max(...times) * n;
  let mid;
  while(start <= end){
      mid = parseInt((start + end) / 2);
      const people = times.reduce((a, v) => a + parseInt(mid / v), 0);
      people >= n ? end = mid - 1 : start = mid + 1;
  }
  return start;
}

export default solution;