import sys

n = int(input())

S = set()

def check(x):
    if x in S:
        print(int(1))
    else: 
        print(int(0))

def remove(x):
    S.discard(x)

def toggle(x):
    if x in S:
        remove(x)
    else: 
        S.add(x)

def all():
    global S
    S=set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])

def empty():
    global S
    S=set()


for _ in range(n):
    m = sys.stdin.readline().split()
    
    if m[0] =="all":
        all()
        continue
    elif m[0] =="empty":
        empty()
        continue

    x = int(m[1])
    if m[0] == "add": S.add(x)
    elif m[0] == "check": check(x)
    elif m[0] == "remove": remove(x)       
    elif m[0] == "toggle": toggle(x)




