function solution(n, edge) {
  const nodes = {};
  const distances = Array.from({ length: n+1 }, () => 0);
  const visited = [];
  const queue = [1];

  edge.forEach(v => {
      nodes.hasOwnProperty(v[0]) ? nodes[v[0]].push(v[1]) : nodes[v[0]] = [v[1]];
      nodes.hasOwnProperty(v[1]) ? nodes[v[1]].push(v[0]) : nodes[v[1]] = [v[0]];
  });
  
  while (queue.length > 0) {
      const current = queue.shift();
      visited.push(current);
      nodes[current].forEach(v => {
          if(!(visited.includes(v) || queue.includes(v))){
              queue.push(v);
              distances[v] = distances[current] + 1;
          }
      });
  }
  
  const maxDistance = Math.max(...distances);
  return distances.filter(v => v === maxDistance).length;
}

export default solution;