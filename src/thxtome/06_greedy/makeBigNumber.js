export const makeBigNumber = (number, k) => {
  number = String(number);
  
  //정답 배열
  let answer = [];

  //반복 커서
  let index = 0

  //제거할 게 있으면서 number.length까지 반복
  while(k > 0 && index < number.length){
    let cEl = number[index];

    //제거할 게 있으면서 정답 배열에 수가 현재의 수보다 작을 떄 제거
    while (k > 0 && answer[answer.length - 1] < cEl) {
      answer.pop();
      k--;
    }

    answer.push(cEl);
    
    index++;
  }

  if(k > 0){
    // 제거할 게 있으면 뒤에서부터 제거
    number = number.substr(0, number.length - k);
  } else {
    // 제거할 게 없으면 정답 배열 + 반복 커서만큼 앞에서 짜른 number를 더함
    number = answer.join("") + number.substr(index);
  }

  return number;

}