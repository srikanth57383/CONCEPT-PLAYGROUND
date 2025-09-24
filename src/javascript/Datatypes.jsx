// ⸻

// 🧠 JavaScript Data Types

// JS has two main categories of data types:

// ⸻

// ✅ 1. Primitive Types (Stored in Stack Memory)

// These are immutable and stored by value.

// Type.                            Example                                                          Description
// ⸻-------------------------------
// String.                          "hello"                                                        Text, in quotes

// Number.                           1, 3.14, -42                                                  Any numeric value

// Boolean.                           true, false                                                    Logical true or false
// null.                              null                                                            Intentional absence of any value
// undefined.                         undefined                                                       Declared but not assigned
// Symbol.                            Symbol('id')                                                   Unique identifiers (used in objects)
// Logical true or false.             null                                                            Intentional absence of any value
// undefined.                         undefined                                                       Declared but not assigned
// Symbol.                            Symbol('id')                                                   Unique identifiers (used in objects)
// BigInt.                            123n                                                            Large integers beyond Number.MAX_SAFE_INTEGER


// ✅ 2. Reference Types (Stored in Heap Memory)

// These are mutable and stored by reference.

// Type.                            Example                                                          Description

// ⸻-------------------------------
// Object.                          { key: "value" }                                               Key-value pairs, like dictionaries
// Array.                           [1, 2, 3]                                                      Ordered list of values
// Function.                        function() { return "Hello"; }                                Reusable blocks of code
// Date.                            new Date()                                                    Represents date and time
// RegExp.                          /abc/                                                          Regular expressions for pattern matching


// 🗃️ Memory Storage in JavaScript

// 🔹 Stack Memory (Primitives)
// 	•	Stores: primitive values and reference addresses
// 	•	Fast access
// 	•	Managed automatically
// 	•	Fixed size

// let a = 10;
// let b = a; // Copy of value
// b = 20;
// console.log(a); // 10 (original remains unchanged)

// 🔹 Heap Memory (Reference Types)
// 	•	Stores: objects, arrays, functions
// 	•	Slower access
// 	•	Managed by garbage collection
// 	•	Dynamic size
// let obj1 = { name: "Alice" };
// let obj2 = obj1; // Reference to the same object
// obj2.name = "Bob";
// console.log(obj1.name); // "Bob" (changes affect the original)

