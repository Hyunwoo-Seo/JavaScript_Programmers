function solution(num1, num2) {
    let answer = 0;
    let Multiple = num1 / num2;
    answer = Math.floor(Multiple * 1000);
    return answer;
}