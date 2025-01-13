function solution(arr) {
    var answer = 0;
    let num=0;
    
    
    while(true){
        let newArr = arr.slice();
        
        
        newArr = newArr.map((value)=>{
            if(value>=50&&value%2==0){
                return value/=2;
            }
            else if(value<50&&value%2!=0){
                return value= value*2+1;
            }
            else return value;
        });
        
        if(JSON.stringify(newArr)===JSON.stringify(arr)){
            return num;
        }
        num+=1;
        
        arr = newArr;

    }
}
