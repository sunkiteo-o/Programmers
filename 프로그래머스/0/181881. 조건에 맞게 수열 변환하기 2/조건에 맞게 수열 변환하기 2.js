function solution(arr) {
    let x = 0; // 반복 횟수
    
    while (true) {
        // 현재 상태 저장
        const prevArr = [...arr]; 
        
        // 변환 작업
        arr = arr.map(value => {
            if (value >= 50 && value % 2 === 0) {
                return value / 2;
            } else if (value < 50 && value % 2 === 1) {
                return value * 2 + 1;
            }
            return value; // 변환 조건에 해당하지 않으면 그대로 유지
        });

        // 배열이 더 이상 변하지 않으면 종료
        if (JSON.stringify(prevArr) === JSON.stringify(arr)) {
            return x;
        }
        x++;
    }
}
