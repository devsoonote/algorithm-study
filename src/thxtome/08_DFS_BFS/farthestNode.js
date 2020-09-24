export const farthestNode = (n, edge) =>{
    //bfs 큐 담을 변수
    let queue = [];

    //가중치 담을 변수
    let weight = [];

    //노드를 연결
    let nodes = edge.reduce((a,v)=>{
        a[v[0]] ? a[v[0]].push(v[1]) : a[v[0]] = [v[1]]; 
        a[v[1]] ? a[v[1]].push(v[0]) : a[v[1]] = [v[0]];
        return a; 
    },[])
    //큐 시작
    queue.push(1);
    weight[1] = 0;

    //가중치가 없으면  가중치를 넣고 큐에 담음
    while (queue.length > 0) {
        let target = queue.shift()
        nodes[target].forEach(node => {
                if(weight[node] === undefined){
                    weight[node] = weight[target] +1
                    queue.push(node)
                }
        });
    }
    //없는 자리 제거
    weight.shift();

    //최대값 개수 리턴
    let max = Math.max(...weight);
    return weight.filter((v)=>{
        return v === max;
    }).length;
}