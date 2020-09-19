export const travelRoute = (tickets) => {
  //도시별 도착지 정리
  let cities = tickets.reduce((a, c) => {
    a[c[0]] ? a[c[0]].push(c[1]) : (a[c[0]] = [c[1]]);
    return a;
  }, {});

  //이름순 정렬
  Object.values(cities).forEach((city) => {
    city.sort();
  });

  return dfs("ICN", [], cities, tickets.length + 1);
};

const dfs = (to, route, cities, max, from, i) => {
  //지나쳐온 곳 삭제
  if (from) {
    cities[from] = [...cities[from].slice(0, i), ...cities[from].slice(i + 1)];
  }

  //루트에 추가
  route.push(to);
  if (route.length === max) {
    return route;
  }

  //다음 루트가 있으면 dfs
  if (cities[to] && cities[to].length !== 0) {
    let length = cities[to].length;
    for (let i = 0; i < length; i++) {
      let answer = dfs(cities[to][i], [...route], { ...cities }, max, to, i);
      if (answer) {
        return answer;
      }
    }

    //없으면 false
  } else return false;
};
