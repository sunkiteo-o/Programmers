function solution(storey) {
    let answer = 0;

    function button(storey) {
        if (storey < 10) {
            answer += (Math.min(storey,10-storey+1));
            return;
        }

        let quotient = Math.floor(storey / 10);
        let remain = storey % 10;
        
        
        //5 일때는 다음 자리 보고 올릴지 내릴지 결정하기
        if (remain > 5 || (remain === 5 && quotient % 10 >= 5)) {
            answer += (10 - remain);
            quotient += 1;  
            
        } else {
            answer += remain;
        }

        button(quotient);
    }

    button(storey);
    
    return answer;
}
