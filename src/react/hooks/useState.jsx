// What are React Hooks?
// 	•	Hooks are special functions in React that let you “hook into” React features (like state, lifecycle, context, etc.) inside functional components.
// 	•	Before hooks, you had to use class components to manage state and lifecycle.
// 	•	Hooks let you write stateful logic in simple function components.
// ⸻
// 🔹 Why were Hooks introduced?
// 	1.	Remove need for classes → Function components can now handle state & lifecycle.
// 	2.	Reusability of logic → You can extract custom hooks (instead of HOCs or render props).
// 	3.	Cleaner code → No more this, constructors, or binding.




// ✅ What is useState?
// • useState is a React Hook that allows you to declare and manage state variables in functional components.




// 📦 Syntax:
// const [state, setState] = useState(initialValue);

// 🧠 Memory Behavior:
// • React stores state values internally for each component.
// • Re-render is triggered only when `setState` is called with a different value.
// • React batches multiple state updates for performance.
// 🔹 Interview Summary
// 	•	Batching = combining multiple state updates into one re-render.
// 	•	React 18 does automatic batching everywhere (events, promises, async, timeouts).
// 	•	Component re-renders when: state, props, context, or key changes.
// 	•	Normal variables (var, let, const) don’t re-render because React doesn’t track them.
// 🎯 Real-World Use Cases:
// ✅ Toggle visibility (modals, menus)
// ✅ Handle input values in forms
// ✅ Manage counters, flags, or local UI state



import React, { useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({
    firstName: "",
    lastName: ""
  });

  const increment = () => setCount((prev) => prev + 1);
  const reset = () => {
    setCount(0);
    setName("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">useState Example</h2>

      <p className="mb-2 text-gray-700">Count: {count}</p>
      <button onClick={increment} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
        Increment
      </button>

      <div className="mt-4">
        <input
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          placeholder="Enter first name"
          className="border px-2 py-1"
        />
        <input
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          placeholder="Enter last name"
          className="border px-2 py-1"
        />
        <p className="mt-2 text-gray-700">Typed Name: {name.firstName} {name.lastName}</p>
      </div>

      <button onClick={reset} className="mt-4 bg-red-500 text-white px-3 py-1 rounded">
        Reset
      </button>
    </div>
  );
};

export default UseStateExample;

// 📌 Interview Summary:

// Question: What triggers a re-render in useState?
// ✅ Answer: When you call setState with a new value.

// Question: What if I set the same value again?
// ❌ No re-render happens if the value is the same.

// Question: Is useState synchronous or asynchronous?
// ✅ It’s async in the sense that state updates are *scheduled*, not immediate.
// Use functional updates (prev => prev + 1) when relying on the previous state.