function solution(my_string) {
    let answer = '';
    answer = my_string.replace(/[aeiou]/g, '');
    return answer;
}