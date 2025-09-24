// ✅ What is useCallback?
// • useCallback is a React Hook that memoizes a callback function, preventing it from being recreated on every render.
// • It returns the same function instance unless dependencies change.

// 📦 Syntax:
// const memoizedCallback = useCallback(() => { /* callback logic */ }, [dependencies]);

// 🧠 Memory Behavior:
// • React keeps the same reference to the function unless any dependency changes.
// • This is useful when passing callbacks to child components that rely on reference equality (e.g., React.memo).

// 🎯 Real-World Use Cases:
// Use Case                     Description
// 🧠 Stable Callback            Prevent child components from re-rendering unnecessarily
// 📥 Debounced Input Handler   Keep the same debounced handler between renders
// ⏱️ Timer or Interval         Maintain the same callback reference inside useEffect

import React, { useCallback, useState } from "react";

// 👶 Child component that only re-renders if props change (React.memo)
const ChildButton = React.memo(({ onClick }) => {
  console.log("ChildButton re-rendered 🚸");
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      Click Me (Child)
    </button>
  );
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  // ❌ Without useCallback: This function is recreated on every render
  // ✅ With useCallback: The same function reference is kept unless `clicks` changes
  const handleClick = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, []); // 🔁 Empty dependency: never changes

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">useCallback Example</h2>

      <button
        onClick={() => setCount(count + 1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Re-render Parent ({count})
      </button>

      <p className="mb-2 text-gray-700">Child button clicked: <strong>{clicks}</strong> times</p>

      {/* 🔄 Pass memoized function to memoized child */}
      <ChildButton onClick={handleClick} />
    </div>
  );
};

export default UseCallbackExample;

// 📌 Interview Summary:
  
// Question: When should you use useCallback?
// ✅ Answer: When you want to memoize functions passed to memoized children to avoid unnecessary re-renders.

// Question: Does useCallback prevent the function from executing?
// ❌ No. It only prevents function recreation. Execution still depends on how/when it’s called.

// Question: How is useCallback different from useMemo?
// 🧠 useMemo returns a value (e.g., computed data).
// 🔁 useCallback returns a function (e.g., event handler).

// ⚠️ Caution: Overusing useCallback may hurt performance due to added memory + tracking overhead. Use it when necessary!