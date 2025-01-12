function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        if (i % 2 === 0) {
            // i가 짝수일 때, query[i] 인덱스 이전의 부분만 유지
            arr = arr.slice(0, query[i] + 1);
        } else {
            // i가 홀수일 때, query[i] 인덱스 이후의 부분만 유지
            arr = arr.slice(query[i]);
        }
    }
    return arr;
}
