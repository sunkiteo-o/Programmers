n, m = map(int,input().split())
poketmons = [input().strip() for _ in range(n)]
quests = [input().strip() for _ in range(m)]

poketmons_dict = {}

num =1
for i in poketmons:
    poketmons_dict[i] = num
    num+=1

answers = []
for quest in quests:

    if quest.isdigit():
        p = poketmons[int(quest)-1]
        answers.append(p)
    else: 
        answers.append(poketmons_dict[quest])


for a in answers:
    print(a)

    
    



