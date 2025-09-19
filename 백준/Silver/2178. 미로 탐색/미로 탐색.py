from collections import deque

# bfs
def bfs(sy,sx,ey,ex):
#0,0,3,5
    # Q 생성 및 초기화
    q = deque()
    q.append((sy, sx))

    # V 생성
    v =  [[0]* m for _ in range(n)]

    v[sy][sx] = 1

    dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]


    while q:
        cy, cx = q.popleft()

        if cy==ey and cx==ex:
            return v[cy][cx]

        # 상하좌우 탐색
        for dy, dx in dirs:
            ny = cy + dy
            nx = cx + dx
            if 0 <= ny < n and 0 <= nx < m:
                if v[ny][nx] == 0 and arr[ny][nx] == 1:
                    v[ny][nx] = v[cy][cx] + 1
                    q.append((ny, nx))

    return -1


# input n,m 받기  2 ≤ N, M ≤ 100
n,m = map(int, input().split())

# N*M 배열에 값 받기
arr = [list(map(int, input().strip())) for _ in range(n)]

ans = bfs(0,0,n-1,m-1)
print(ans)


