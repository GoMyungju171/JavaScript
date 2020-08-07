function factorial(n) {
    var factorialValue = 1;
    // 코드를 작성하세요.
    for (i = 1; i < (n + 1); i++) {
      factorialValue *= i
    }
    return factorialValue;
}

console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));
