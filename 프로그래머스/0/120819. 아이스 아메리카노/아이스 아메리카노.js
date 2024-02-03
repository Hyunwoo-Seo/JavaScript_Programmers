function solution(money) {
    var answer = [];
    if(money - 5500 == 0) {
        answer = [1, 0];
    }
    else if(money - 5500 > 0) {
        let a = Math.floor(money / 5500);
        answer = [a, money - a * 5500];
    }
    else if(money - 5500 < 0) {
        answer = [0, money];
    }
    return answer;
}