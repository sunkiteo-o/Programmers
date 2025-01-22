function solution(clothes) {
    var answer = 1;
    
    // answer = (headgear+1) * (eyewear+1) * (face+1) - 1
    // 1은 모두 안입을 경우
    
    // 해시맵 
    // { head: 수량}
    const hashMap = new Map();
    
    for (const [name,type] of clothes){
        hashMap.set(type, (hashMap.get(type)||0)+1);
    }
    
    for (const value of hashMap.values()){
        answer *= (value+1);
    }
    
    return answer-1;
}