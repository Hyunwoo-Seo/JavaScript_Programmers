function solution(n) {
    let answer = 0;
    let myString = n.toString();
    for(i = 0; i < myString.length; i++) {
        answer += parseInt(myString[i]);
    }
    return answer;
}