function solution(n, s) {
    // n/2까지만
    // 11 -> [1,10] [2,9] [3,8] [4,7] [5,6]
    // 곱이 최대, 최고의 집합은 [n/2,n-n/2]
    //최고의 집합 존재하지 않는 경우?? 1
    //304 ->[101,304-101 = 203 -> 203/2,]
    


        if(s===1 || n > s){
           return [-1];
        }
        
        let answer = Array(n).fill(Math.floor(s/n));
        let remainder = s%n;
        //1
        for(let i = n - 1; i >= n - remainder ; i--){
            answer[i] += 1;
        }
    
    return answer;
}