from collections import deque
 
    
def bfs (graph, visited, start, answer):

    q = deque([start])
    visited[start-1] = True
    
    while q:
        n= q.popleft()
        for i in graph[n]:
            if not visited[i-1]:
                q.append(i)
                visited[i-1] = True 
        
    return answer + 1
    
    
def solution(n, computers):
    answer = 0
    
    # graph 만들기 
    graph = [[] for i in range(n+1)]
    
    for y in range(n):
        for x in range(n):
            if  y!= x and computers[y][x] == 1:
                graph[y+1].append(x+1)
    
    # visited 만들기 
    visited = [False for i in range(n)]
    
    answer = bfs (graph, visited, 1, answer)

    for k in range(len(visited)):
        if not visited[k]:
            answer = bfs(graph, visited, k+1, answer)

    return answer