
n = int(input())

arr = [input().split() for _ in range (n)]

dict = {}

for i in arr:
    dict[i[0]] =i[1] 

answer = []

for j in dict:
    if dict[j] == 'enter':
        answer.append(j)

answer.sort(reverse = True)

for a in answer:
    print(a)
