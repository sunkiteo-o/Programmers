function solution(price, money, count) {
    var answer = 0;
    let bill = 0;

    for(i=1;i<count+1;i++){
        bill += (price*i);
    }
    
    if(bill-money>=0){
        answer = bill-money;
    }
    else answer = 0;
    return answer;
}