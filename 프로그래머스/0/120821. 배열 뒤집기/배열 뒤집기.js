function solution(num_list) {
    var answer = [];
    num_list.reverse();
    for (i = 0; i < num_list.length; i++) {
        answer[i] = num_list[i];
    }
    return answer;
}