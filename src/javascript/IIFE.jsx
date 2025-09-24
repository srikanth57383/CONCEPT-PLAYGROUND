// IIFE = Immediately Invoked Function Expression
// It’s a function that runs as soon as it is defined, without needing to call it later.


(function() {
    console.log("This function runs immediately upon definition!");
})();

// 🔹 Why use IIFE?
// 	1.	Avoid polluting the global scope
// 	•	Variables inside an IIFE are private (not accessible outside).
// 	2.	Execute code immediately
// 	•	Good for initialization logic.
// 	3.	Encapsulation
// 	•	Protects code from being accidentally modified.


// Example with parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})("Alice");

// Example with return value
let result = (function(a, b) {
    return a + b;
})(5, 10);

console.log(result); // 15  

// IIFE can also be written using arrow functions
(() => {
    console.log("IIFE with arrow function!");
})();

// Note: In modern JavaScript (ES6+), modules provide a better way to manage scope and avoid global pollution.
// However, IIFEs are still useful in certain scenarios, especially in older codebases.

// ⸻
// End of IIFE.jsx
// 🔑 Interview Summary
// 	•	IIFE = function that runs immediately after creation.
// 	•	Purpose: avoid global scope pollution, encapsulate code, run initialization.
// 	•	Syntax: (function(){ ... })() or (() => { ... })()
// 	•	Often used in module patterns, polyfills, and init code.
