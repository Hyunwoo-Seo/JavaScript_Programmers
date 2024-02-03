function solution(price) {
    let answer = 0;

    const discountRate =
        price >= 500000 ? 0.2 :
        price >= 300000 ? 0.1 :
        price >= 100000 ? 0.05 :
        0;

    answer = Math.floor(price * (1 - discountRate));

    return answer;
}