function solution(my_string, letter) {
    let answer = my_string.replace(new RegExp(letter, 'g'), '');
    return answer;
}