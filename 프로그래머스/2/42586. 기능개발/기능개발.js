// 큐 queue

function solution(progresses, speeds) {
    var answer = [];
    
    let days= [];
    
    for(let i=0; i<progresses.length; i++ ){
        let percentage = progresses[i]; //93
        let day = 0;
        while(percentage<100){ // 93 >= 100
            percentage += speeds[i]; //
            day+=1;
        }
        days.push(day); // [7,3,9 ];
        
    }
    
    //days 
    let func= 0;
    let update = days[0];
    
    for(let i=0;i<days.length;i++){
        if(days[i]<=update){
            func++;
        }
        else{
            answer.push(func);
            func = 1;
            update = days[i];
        }
    }
    
    answer.push(func);
        
    return answer;
}