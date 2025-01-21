function solution(participant, completion) {
    // 해시맵 생성
    const hashMap = new Map();

    // 참가자 배열을 해시맵에 추가 (이름별 등장 횟수 카운트)
    for (const person of participant) {
        hashMap.set(person, (hashMap.get(person) || 0) + 1);
    }

    // 완주자 배열을 순회하며 등장 횟수 감소
    for (const person of completion) {
        hashMap.set(person, hashMap.get(person) - 1);
    }

    // 해시맵에서 값이 0이 아닌 키를 반환
    for (const [key, value] of hashMap) {
        if (value > 0) {
            return key;
        }
    }

    return ''; // 모든 사람이 완주했다면 빈 문자열 반환
}
