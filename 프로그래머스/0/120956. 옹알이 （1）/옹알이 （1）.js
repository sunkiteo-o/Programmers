function solution(babbling) {
    let babyWords = ["aya", "ye", "woo", "ma" ];
    let regex = /^X+$/;
    let Xnum = 0;
   
    
    //배열에 includes?
    
    for (let i=0;i<babbling.length;i++){
        
        let current = babbling[i];
        
        for(word of babyWords){
            current = current.replaceAll(word,"X");
        }
        
        if(regex.test(current)){
            Xnum+=1;
        }
    }
    

    return Xnum;
}