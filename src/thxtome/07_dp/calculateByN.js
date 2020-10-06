export const calculateByN = (N, number) => {
  //중복 제거 위해 set 사용
  let sets = new Array(8).fill(0).map(() => new Set());
  
  //1번 사용했을 때 처리
  sets[0].add(N);
  if (sets[0].has(number)) {
    return 1;
  }

  //8 이하에서 반복
  for (let i = 1; i < 8; i++) {
    //숫자 붙여서 add
    sets[i].add(nn(N, i + 1));
    //n번 사용 집합 = (n-1번 사칙연산 1번) U (n-2번 사칙연산 2번)...
    for (let j = 0; j < Math.floor(i / 2) + 1; j++) {
      for (let num1 of sets[j]) {
        for (let num2 of sets[i - j - 1]) {
          sets[i].add(num1 + num2);
          sets[i].add(num1 * num2);
          sets[i].add(num1 - num2);
          sets[i].add(num1 / num2);

          //교환법칙 성립 안하는 빼기와 나누기 add
          sets[i].add(num2 - num1);
          sets[i].add(num2 / num1);
        }
      }
    }
    if (sets[i].has(number)) {
      return i + 1;
    }
  }
  return -1;
};

const nn = (N, cnt) => {
  let s = "";
  for (let i = 0; i < cnt; i++) {
    s += String(N);
  }
  return Number(s);
};
