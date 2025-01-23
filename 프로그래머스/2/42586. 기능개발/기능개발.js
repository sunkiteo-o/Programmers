function solution(progresses, speeds) {
    const days = [];
    const result = [];

    // 각 작업별로 완료까지 필요한 날짜 계산
    for (let i = 0; i < progresses.length; i++) {
        const remaining = 100 - progresses[i]; // 남은 작업 진도
        const day = Math.ceil(remaining / speeds[i]); // 올림 계산으로 필요한 일수
        days.push(day);
    }

    // 배포 그룹 계산
    let maxDay = days[0]; // 현재 배포 기준일
    let count = 1; // 배포되는 작업 개수

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDay) {
            // 현재 배포 기준일 이하라면 함께 배포
            count++;
        } else {
            // 새로운 배포 기준일로 업데이트
            result.push(count); // 이전 배포 수 저장
            count = 1; // 새로운 배포 시작
            maxDay = days[i];
        }
    }

    // 마지막 배포 그룹 추가
    result.push(count);

    return result;
}
