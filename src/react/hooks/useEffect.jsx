// ✅ What is useEffect?
// • useEffect lets you run side-effects in function components (e.g., fetch data, subscriptions, timers).

// 📦 Syntax:
// useEffect(() => { /* side effect */ }, [dependencies]);

// 🔁 Dependency Array Behavior:
// • No array → runs after *every* render
// • [] empty → runs once on mount (like componentDidMount)
// • [dep] → runs when `dep` changes

// 🧠 Memory Behavior:
// • React automatically cleans up effects if you return a function from useEffect.
// • Useful for cleanup like unsubscribing, clearing timers, aborting fetches, etc.

// 🎯 Real-World Use Cases:
// ✅ Fetch API data on mount  
// ✅ Set up intervals or event listeners
// ✅ Sync local state with external sources (URL, window resize)

import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [quote, setQuote] = useState("");
  const [count, setCount] = useState(0);


  // 🎯 Effect to fetch data on first render only
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.content))
      .catch((err) => console.error("Failed to fetch quote:", err));
  }, []); // ✅ Runs only once on mount

  // 🎯 Effect to update the document title whenever `count` changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">useEffect Example</h2>

      <p className="mb-2">Random Quote: <em>{quote}</em></p>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-purple-500 text-white px-3 py-1 rounded"
      >
        Increment Count ({count})
      </button>
    </div>
  );
};

export default UseEffectExample;

// 📌 Interview Summary:

// Question: What is useEffect used for?
// ✅ Answer: Running side-effects like fetching data, setting up subscriptions, timers, DOM changes, etc.

// Question: When does useEffect run?
// ✅ Answer: After rendering is committed to the screen.

// Question: What is returned from useEffect?
// ✅ A cleanup function to avoid memory leaks (e.g., removing listeners, aborting requests).

// Question: Is useEffect blocking?
// ❌ No. It runs *after* painting the UI. Use layout effects for blocking updates (useLayoutEffect).