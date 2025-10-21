n = int(input())


answer =''

# 몫, 나머지를 구해야함. 
m = n//3
remain = n % 3

if remain == 0 or remain == 2:  
    if m % 2 ==0 :
        answer = 'CY'
    else:
        answer = 'SK'

else: 
    if m % 2 == 0:
        answer = 'SK'
    else:
        answer = 'CY'

print(answer)
