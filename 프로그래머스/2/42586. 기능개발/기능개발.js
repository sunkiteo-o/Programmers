function solution(progresses, speeds) {
    var answer = [];
    
    //for -> map
    let days = progresses.map((progress,i) => Math.ceil((100-progress)/speeds[i]));
        
    let deploy = 0;
    let update = days[0];
    
    for (const day of days){
        //배포 일자가 바뀔 때
        if(update<day){
            //앞에 배포 몇 개 됐는지 푸시 
            answer.push(deploy);
            deploy = 1;
            update = day;
            
        }
        else{
            deploy++;
        }
    }
    answer.push(deploy);
    
    return answer;
}