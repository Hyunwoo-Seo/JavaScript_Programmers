function solution(my_string) {
    let answer = 0;
    let numbers = my_string.match(/\d/g);
    for (i = 0; i < numbers.length; i++) {
        answer += parseInt(numbers[i]);
    }
    return answer;
}