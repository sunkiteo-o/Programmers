function solution(code) {
    var answer = '';
    
    let ret = '';
    let mode = 0;
    
    let len = code.length;
    
    for( idx=0; idx<len; idx++) {
        if (mode == 0) {
            if(code[idx]!="1" && idx%2==0 ){
                ret = ret.concat(code[idx]);
            }
            else if(code[idx]=="1"){
                mode = 1;
            }
        }
        else if (mode == 1){
            if(code[idx]!="1" && idx%2==1 ){
                ret = ret.concat(code[idx]);
            }
            else if(code[idx]=="1"){
                mode = 0;
            }
        }
    
    }

    if (ret ==''){
        answer = "EMPTY";
    }
    else {
        answer = ret; 
    }

    return answer;
}