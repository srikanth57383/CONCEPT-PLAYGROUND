// 📌 Event Loop & JavaScript Execution (Interview Guide)
	// 1.	JavaScript is single-threaded with a call stack for synchronous execution.
	// 2.	Async tasks are delegated to Web APIs and queued as macrotasks or microtasks.
	// 3.	Microtasks (Promises, queueMicrotask) always run before macrotasks (setTimeout, I/O).
	// 4.	After the stack clears, the event loop first empties all microtasks, then executes the next macrotask.
	// 5.	async/await is built on Promises, so await pauses and resumes execution in the microtask queue.
// 1. JavaScript Nature
// 	•	Single-threaded: Only one line of code runs at a time.
// 	•	Synchronous by default: Code executes top to bottom.
// 	•	Asynchronous capability: Achieved via callbacks, Promises, async/await, setTimeout, etc.
// 	•	Event Loop: The mechanism that decides when pending tasks will run.

// 👉 Interview One-liner:
// “JavaScript is single-threaded and synchronous by default, but the event loop with microtasks and macrotasks enables asynchronous, non-blocking execution.”


// 2. Execution Model

// When JavaScript code runs:
// 	1.	Call Stack: Functions are pushed & popped (LIFO).
// 	2.	Heap: Memory for objects.
// 	3.	Web APIs: Browser APIs (timers, DOM, fetch).
// 	4.	Task Queues:
// 	•	Macrotask Queue: setTimeout, setInterval, setImmediate (Node), I/O callbacks.
// 	•	Microtask Queue: Promises.then/catch/finally, queueMicrotask, MutationObserver.

// 👉 Rule:
// 	•	After each macrotask, event loop empties all microtasks before moving on.

//     3. Order of Execution
// 	1.	Run all synchronous code (stack).
// 	2.	Run microtasks (Promises, queueMicrotask).
// 	3.	Then run next macrotask (timers, I/O).
// 	4.	Repeat.

//     4. Execution Examples

 console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// 👉 Execution:
// 	1.	"A" → sync
// 	2.	"D" → sync
// 	3.	"C" → microtask
// 	4.	"B" → macrotask

//     Output
// A
// D
// C
// B

// Example 2 – Microtask Always First

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
// 👉 Output:
// End
// Promise
// Timeout

// Example 3 – Nested
{
setTimeout(() => {
  console.log("Macrotask 1");

  Promise.resolve().then(() => console.log("Microtask inside Macrotask"));
}, 0);

Promise.resolve().then(() => console.log("Microtask outside"));

console.log("Sync");

// Example 4 – Async/Await
async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}
test();

console.log("3");}
	// output:



     

// 	5. Interview Summary Points
// 	•	JS runs on single thread, but async works with event loop + task queues.
// 	•	Macrotask examples: setTimeout, setInterval, setImmediate, I/O.
// 	•	Microtask examples: Promises, queueMicrotask, MutationObserver.
// 	•	Microtasks have higher priority → Always cleared before next macrotask.
// 	•	Async/await is syntactic sugar over Promises (microtasks).
// 	•	Understanding order of execution is critical for debugging async code.

// ⸻

// ✅ This explanation + examples is enough to crack interview questions like:
// 	•	Why Promise executes before setTimeout?
// 	•	Difference between microtasks and macrotasks?
// 	•	How async/await works internally?

// 📌 Microtasks vs Macrotasks in JavaScript

// 🔹 Microtasks (Higher Priority → run immediately after current stack)
// 	•	Promise.then() / Promise.catch() / Promise.finally()
// 	•	queueMicrotask()
// 	•	MutationObserver (Browser)
// 	•	Node.js only:
// 	•	process.nextTick() (runs even before microtasks, so sometimes called “nextTick queue”)

// 👉 Execution: Cleared fully before moving to next macrotask.

// ⸻

// 🔹 Macrotasks (Lower Priority → run after microtasks)
// 	•	setTimeout()
// 	•	setInterval()
// 	•	setImmediate() (Node.js only)
// 	•	I/O callbacks (e.g., file system, sockets)
// 	•	UI rendering events (Browser: e.g., repaint, reflow)
// 	•	MessageChannel / postMessage
// 	•	Event listeners (click, scroll, etc.)
// 	•	Script execution (<script> block itself is a macrotask)

// 👉 Execution: One macrotask → then empty microtasks → then next macrotask.

// ⸻

// ⚡ Order of Priority
// 	1.	Synchronous code (call stack)
// 	2.	process.nextTick() (Node.js only, before microtasks)
// 	3.	Microtasks (Promises, queueMicrotask, MutationObserver)
// 	4.	next Macrotasks (Timers, I/O, UI events)

// ⸻

// ✅ One-liner for interviews:
// “Microtasks (Promises, queueMicrotask, MutationObserver, nextTick in Node) always execute before macrotasks (timers, I/O, UI events, setImmediate).”


