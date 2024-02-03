function solution(array) {
    let answer = 0;
    const center = Math.floor(array.length / 2);
    array.sort((a, b) => a - b);
    answer = array[center];
    return answer;
}