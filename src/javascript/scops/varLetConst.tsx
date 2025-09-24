//  var vs let vs const — Summary Table


// 1. What is Declaration?

// ✅ Declaration means creating a variable and giving it a name — without assigning a value (necessarily).
// var a;       // declared
// let b;       // declared
// const c = 5; // declared AND initialized


// 2. What is Initialization?
// ✅ Initialization means assigning a value to a declared variable.
// a = 10;      // initialized later
// let b = 20;  // declared + initialized


// 🔸 Interview Tip

// Q: What is hoisting?

// Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope.
// var is hoisted and initialized with undefined, but let and const are hoisted without initialization and go into the Temporal Dead Zone.


 // What is Temporal Dead Zone (TDZ)?

// TDZ is the time between entering the scope and the actual variable declaration.
// It refers to the period where a variable is in scope but not yet declared, leading to a ReferenceError if accessed.
// {
//   // TDZ for `name` starts
//   // console.log(name); ❌ ReferenceError
//   let name = "Srikanth"; // TDZ ends here
//   console.log(name);     // ✅ "Srikanth"
// }


// 🔔 TDZ rules:


// 	•	Applies to let and const
// 	•	Ends only when the line of declaration is reached
// 	•	Accessing during TDZ causes ReferenceError




// How hoisting works for var, let, const table
// Keyword.      Hoisted?          Initialized?           Can use before declaration?
// var          ✅ Yes            ✅ With undefined           ✅ (but value is undefined)
// let          ✅ Yes            ❌ No (in TDZ)              ❌ ReferenceError
// const       ✅ Yes            ❌ No (in TDZ)              ❌ ReferenceError


//--------------------example

//>>>>>>>>>>>>>>>>>>>> 🔁 var:

// 	•	Hoisted ✅
// 	•	Initialized to undefined ✅
// 	•	Can be used before line of declaration ✅ (but value will be undefined)

// // Internally:
// var a;            // ✅ declared and initialized to undefined
// console.log(a);   // ✅ prints undefined
// a = 5;            // ✅ now initialized to 5

// >>>>>>>>>>>>>>>>>>>>🔁 let:

// 	•	Hoisted ✅
// 	•	NOT initialized ❌ → TDZ starts
// 	•	Cannot be used before declaration ❌ → ReferenceError

// // Internally:
// let b;           // ✅ declared (but NOT initialized — in TDZ)
// console.log(b);  // ❌ ReferenceError
// b = 10;          // ✅ initialized now, TDZ ends

// ✅ let is safer and more predictable than var




//  ---------------- 🔸 1. Scope Differences



// ✅ var – Function Scoped
// function testVar() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x); // ✅ 10 (because var is function scoped)
// }

// ✅ let – Block Scoped
// function testLet() {
//   if (true) {
//     let y = 20;
//   }
//   console.log(y); // ❌ ReferenceError: y is not defined (because let is block scoped)
// }

// ------------------------ 🔸 2. Hoisting Behavior

// ✅ var – Hoisted and Initialized to undefined
// function testVarHoisting() {
//   console.log(a); // ✅ undefined (hoisted)
//   var a = 5;
//   console.log(a); // ✅ 5
// }

// ✅ let – Hoisted but Not Initialized
// function testLetHoisting() {
//   console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
//   let b = 10;
//   console.log(b); // ✅ 10
// }





//  | Feature               | var                          | let                          | const                        |
//  |-----------------------|------------------------------|------------------------------|------------------------------|
//  | Scope                 | Function or global scope    | Block scope                  | Block scope                  |
//  | Hoisting              | Yes (initialized as undefined)| Yes (initialized as undefined)| Yes (initialized as undefined)|
//  | Re-declaration        | Allowed                      | Not allowed in same scope    | Not allowed                  |
//  | Re-assignment         | Allowed                      | Allowed                      | Not allowed                  |
//  | Default Usage         | Function scope, can be re-declared and re-assigned | Block scope, can be re-assigned | Block scope, must be initialized |
