
stc = input()

dict ={}

for char in stc:
    new_char = char.upper()
    if new_char in dict:
        dict[new_char] +=1
    else: 
        dict[new_char] = 1

# print(dict)

# for 돌리면서 max 랑 같은 값 있으면 ? 출력하기 . 아니면 max 출력하기 
# 딕셔너리는 대소문자를 구분한다..! 
# 따라서 모든 키를 upper() 혹은 lower() 로 바꿔서 통일해서 저장하면 된다. 

# value 에서 가장 큰 값 찾기 
ans = max(dict, key = dict.get)

for d in dict: 
    if d!=ans and dict[d] == dict[ans]:
        ans = '?'
        break
    
print(ans)
