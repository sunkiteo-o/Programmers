from collections import deque

# n 입력
n = int(input())
# 2차원 배열 arr 입력
# 앞에 있는 0이 안들어감.
# 1. string으로 받는다.
arr = [list(input()) for i in range(n)]

#visited 배열 생성 False 로 초기화
visited = [[False]*n for _ in range(n)]


# 상하좌우 탐색
dest = [(0,1),(1,0),(-1,0),(0,-1)]
# k,l =dest[1]
# print(k,l)

#bfs
def bfs(y,x):
    q = deque([(y,x)])
    visited[y][x] = True
    apt = 0

    while q:
        ny,nx = q.popleft()
        apt+=1
        # print(apt)
        for cnt in dest:
            dy,dx= cnt
            dy = dy+ny
            dx = dx + nx
            if 0<=dy<n and 0<=dx<n:
                if not visited[dy][dx] and arr[dy][dx] == '1':
                    visited[dy][dx] = True
                    q.append((dy,dx))
    return apt

# 단지수
dong = 0
arrApt = []

for y in range(n):
    for x in range(n):
        if arr[y][x]=='1' and visited[y][x] == False:
            apt = bfs(y,x)
            arrApt.append(apt)
            dong+=1
            # print(visited)


print(dong)
arrApt = sorted(arrApt)
for i in arrApt:
    print(i)
