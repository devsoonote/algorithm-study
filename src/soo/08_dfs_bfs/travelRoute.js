function solution(tickets) {
  const answer = []

  function dfs(tickets, start, str){
    if(!tickets.length){
      answer.push(str)
    }
    tickets.map((ticket, i) => {
      if(ticket[0] === start){
        let copiedTicket = [...tickets]
        copiedTicket.splice(i,1)
        dfs(copiedTicket, ticket[1], [...str, ticket[1]])
      }
    })
  }

  dfs(tickets,'ICN',["ICN"])
  return answer.sort()[0]
}
