function solution(rsp) {
    let answer = '';
    for(i = 0; i < rsp.length; i++) {
        rsp[i] == "2" ? answer += 0 :
        rsp[i] == "0" ? answer += 5 :
        rsp[i] == "5" ? answer += 2 :
        0;
    }
    return answer;
}