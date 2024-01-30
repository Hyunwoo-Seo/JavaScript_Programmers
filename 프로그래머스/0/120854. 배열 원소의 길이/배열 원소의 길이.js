function solution(strlist) {
    var answer = [];
    strlist.slice = "";
    for(i = 0; i < strlist.length; i ++) {
        answer[i] = strlist[i].length;
    }
    return answer;
}