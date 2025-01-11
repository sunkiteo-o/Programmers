function solution(n) {
    var answer = 0;
    
    let pizza = 6;
    let num = 1;
    let piece = pizza;
    
    while(pizza%n!=0){ 
        num+=1;
        pizza += piece;
    }
    
    answer = num;
    return answer;
}