function solution(participant, completion) {
    var answer = '';
    
    const hashMap = new Map();
    let value;
    
    for(const person of participant ){
        hashMap.set(person,(hashMap.get(person)||0)+1);
        //해시맵 만들기
        // {이름:명 수}
    }
    
    for (const person of completion ){
        hashMap.set(person,(hashMap.get(person)-1));
    }
    
    //value가 1인거 찾기
    for(const person of participant ){
        if(hashMap.get(person)===1){
            answer = person
        }
    }
       

    return answer;
}