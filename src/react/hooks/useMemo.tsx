// 1. useMemo – Full Breakdown

// ✅ What is useMemo?
// 	•	useMemo is a React Hook used to memoize expensive computations so they don’t run on every render.
// 	•	It caches the result of a function unless dependencies change.

// 📦 Syntax (Code Signature):

// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


// 🧠 Memory Behavior
// 	•	React stores the return value of the function and reuses it on re-renders, unless any dependency has changed.
// 	•	This saves CPU cycles on unnecessary recomputations.


//🎯 Real-World Use Cases
// Use Case                              Description
// 🗂️ Expensive List Filtering      Avoid re-filtering a list unless inputs change
// 📊 Chart or Table Computation   Avoid reprocessing large data sets
// 🧮 Derived Values               Compute derived values like totals, percentages
// 🧠 Memoized Props               Prevent unnecessary renders in children (with React.memo)

import React, { useMemo, useState } from "react";

const ExpensiveList = () => {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

  // ❌ Without useMemo: This would re-run on every render (bad for performance)
  // ✅ With useMemo: It only recalculates when `query` changes
  const filteredList = useMemo(() => {
    console.log("Filtering list..."); // logs only when query changes
    return bigList.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">useMemo Example</h2>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      <button
        onClick={() => setCount(count + 1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Re-render ({count})
      </button>

      <p className="text-sm text-gray-600">
        Filtered Items: <strong>{filteredList.length}</strong>
      </p>

      <ul className="h-64 overflow-y-scroll border p-2 rounded">
        {filteredList.slice(0, 50).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensiveList;



//📌 Key Points for Interviews

// Question.                                               Answer

// When should you use useMemo?                    When you want to memoize expensive computations that shouldn’t run on every render.
// What happens if dependencies don’t change?      Cached value is returned; function is not re-executed.
// Will useMemo always improve performance?        Not always; it adds memory overhead and should only be used when computations are costly.
// Difference between useMemo and useCallback?     useMemo returns a value, useCallback returns a function.
