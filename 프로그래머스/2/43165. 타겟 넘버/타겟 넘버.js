
function dfs(depth, arr, sum, numbers, target) {
  let answer = 0;
  for (let i = 0; i < 2; i++) {
    const newSum = sum + arr[depth][i];

    if (depth === numbers.length - 1) {
      if (newSum === target) {
        answer += 1;
      }
      continue;
    }
    answer += dfs(depth + 1, arr, newSum, numbers, target);
  }
  return answer;
}


function solution(numbers, target) {
    var answer = 0;
    
    const arr = Array.from({ length: numbers.length }, () =>
    Array.from({ length: 2 }, () => 0)
  );

  for (let i = 0; i < numbers.length; i++) {
    arr[i][0] = 0 - numbers[i];
    arr[i][1] = numbers[i];
  }
    answer = dfs(0, arr, 0, numbers, target);
    
    return answer;
}