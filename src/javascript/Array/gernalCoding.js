fibonacci,factorial,prime

//🔹 1. Fibonacci Numbers   ---------------------- ---------------------- ---------------------- ----------------------> 1

// 👉 A sequence where each number is the sum of the previous two.
// Ex: 0, 1, 1, 2, 3, 5, 8, 13 …

// 👉 Recursive function to find the nth Fibonacci number
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }    


// 🔹 What’s happening  ?
// 	•	Base case: if n is 0 or 1, return n.
// 	•	Recursive case: return the sum of the two previous Fibonacci numbers.
// 	•	Ex: fibonacci(6) = fibonacci(5) + fibonacci(4) = 5 + 3 = 8.
// 🔹 Example: fibonacci(6) = 8

// 👉 Iterative approach for better performance
// function fibonacci(n) {
//   let a = 0, b = 1, c;
//   for (let i = 2; i <= n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }




console.log(fibonacci(6)); // 8

// 🔹 2. Factorial ---------------------- ---------------------- ---------------------- ----------------------> 2

// 👉 Product of all positive integers ≤ n.
// Ex: 5! = 5×4×3×2×1 = 120

// 👉 Recursive function to find the factorial
// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }

// 🔹 What’s happening ?
// 	•	Base case: if n is 0, return 1.
// 	•	Recursive case: return n multiplied by the factorial of (n - 1).
// 	•	Ex: factorial(5) = 5 * factorial(4) = 5 * 24 = 120.
// 🔹 Example: factorial(5) = 120

// 👉 Iterative approach for better performance
// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
console.log(factorial(5)); // 120

// 🔹 3. Prime Numbers ---------------------- ---------------------- ---------------------- ---------------------->     3
// 👉 A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers
// 👉 Example: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, ...

function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Found a divisor, not prime
    }
    return true; // No divisors found, it's prime
    }
// console.log(isPrime(7)); // true



function prime(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
        primes.push(i);
        }
    }

    return primes;


}
console.log(prime(30)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]


