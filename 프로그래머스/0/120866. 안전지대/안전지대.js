function solution(board) {
    var answer = 0;
    
    let n = board[0].length;
    let update = board.map(row => [...row]);
    
    for(y=0;y<n;y++){
         for(x=0;x<n;x++){
             if (board[y][x] === 1){
                 for(i=y-1;i<=y+1;i++){
                     for(j=x-1;j<=x+1;j++){
                         if(i>=0&&j>=0&&i<=n-1&&j<=n-1){
                             update[i][j] = 1;
                         }
                         
                     }
                 }
             }
         }
    }
    
    for(y=0;y<n;y++){
         for(x=0;x<n;x++){
            if(update[y][x] ==0){
                answer+=1;
            }
         }
    }
    
    return answer;
}