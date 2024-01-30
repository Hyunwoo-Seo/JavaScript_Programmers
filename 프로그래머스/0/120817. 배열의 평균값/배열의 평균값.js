function solution(numbers) {
    let answer = 0;
    let length = numbers.length;
    for (i = 0; i < numbers.length; i++) {
        answer += numbers[i];
    }
    answer = answer / length;
    return answer;
}