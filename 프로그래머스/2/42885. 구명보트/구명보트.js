function solution(people, limit) {
    
    let boat = 0;

    //내림차순
    people.sort((a,b)=>(b-a));
 
    let left = 0;
    let right = people.length -1;
    
    while(left<=right){
        if(people[left]+people[right]<=limit){
            right--;
        }
        boat++;
        left++;
    }
    
    return boat;
}