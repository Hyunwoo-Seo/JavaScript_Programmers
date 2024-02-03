function solution(numer1, denom1, numer2, denom2) {
    let answer = [];

    let newNumer = numer1 * denom2 + numer2 * denom1;
    let newDenom = denom1 * denom2;

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const gcdValue = gcd(newNumer, newDenom);

    const simplifiedNumer = newNumer / gcdValue;
    const simplifiedDenom = newDenom / gcdValue;

    answer.push(simplifiedNumer, simplifiedDenom);

    return answer;
}