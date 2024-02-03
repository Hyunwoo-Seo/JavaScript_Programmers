function solution(my_string, n) {
    let answer = '';
    for(i = 0; i < my_string.length; i++) {
        for(j = 1; j <= n; j++) {
            answer += my_string[i]
        }
    }
    
    return answer;
}