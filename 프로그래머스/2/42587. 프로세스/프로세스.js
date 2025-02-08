function solution(priorities, location) {
    var answer = 0;

    // 2,1,3,2
    let running = 0;
    let maxPriority = Math.max(...priorities); //3
    
    while(1){
        let currentProcess = priorities.shift();
        if(currentProcess >= maxPriority){
            running++;
            maxPriority = Math.max(...priorities);
            if(location==0) return running;
        }
        else{
            //1,3,2,2
            priorities.push(currentProcess); 
        }
        location = location === 0 ? priorities.length-1 : location-1;
    }
}