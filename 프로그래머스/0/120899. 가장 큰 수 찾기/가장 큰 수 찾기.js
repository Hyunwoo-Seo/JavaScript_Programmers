function solution(array) {
    let answer = [];
    let max = Math.max(...array);
    let index = array.indexOf(max);
    answer.push(max, index);
    return answer;
}
