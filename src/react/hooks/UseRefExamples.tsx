import React, { useRef, useEffect, useState } from "react";

// ----------------------
// 🧠 useRef in React
// ----------------------
// ✅ useRef returns a mutable object: { current: ... }
// ✅ It persists across re-renders without causing a re-render when changed
// ✅ Common use cases:
//    • DOM access (like input focus)
//    • Store previous values or counters
//    • Avoid unnecessary re-renders
//    • Cache values or hold reference data (like timers, objects)
//
// ⚖️ Compared to useState:
//    • useRef does NOT cause re-renders on change
//    • useState DOES cause re-renders

// 📦 Global list for checking reference equality
const list: any = [];

const UseRefExamples = () => {
  // --------------------------------------------
  // 📍 1. DOM Access – focus input field manually
  // --------------------------------------------
  const inputRef = useRef<HTMLInputElement>(null);

  // --------------------------------------------
  // 📍 2. Persist a value across renders without triggering re-render
  // Used here to count how many times the component re-renders
  // --------------------------------------------
  const renderCount = useRef(0);

  // --------------------------------------------
  // 📍 3. Local state – changing this will re-render the component
  // --------------------------------------------
  const [name, setName] = useState("");

  // --------------------------------------------
  // 📍 4. Manipulate DOM directly without state
  // Used here to update text content manually
  // --------------------------------------------
  const textRef = useRef<HTMLParagraphElement>(null);

  // ✅ Count how many times the component renders
  useEffect(() => {
    renderCount.current += 1;
  });

  // ✅ Programmatically focus the input field
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  // ✅ Update the DOM content manually when `name` changes
  useEffect(() => {
    if (textRef.current) {
      textRef.current.innerText = `Hello, ${name || "World"}!`;
    }
  }, [name]);

  // --------------------------------------------
  // 📍 5. Store a mutable object using useRef
  // Reference remains the same across renders
  // --------------------------------------------
  const addressRef = useRef({ street: "123 Main St", city: "Anytown" });

  // 🧪 Testing reference identity – every render, push to a list
  list.push(addressRef.current);

  if (list.length > 2) {
    console.log("Address Ref List:", list);
    console.log("Same reference?", list[0] === list[1]); // ✅ true – same object reference
  }

  // ----------------------------
  // 💡 UI with explanatory labels
  // ----------------------------
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2" ref={textRef}>
        useRef Examples
      </h2>

      <div className="mb-4">
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="border p-2 rounded"
        />

        <button
          onClick={handleFocus}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Focus Input
        </button>
      </div>

      <p className="text-sm text-gray-600">
        This component has rendered{" "}
        <strong>{renderCount.current}</strong> times.
      </p>
    </div>
  );
};

export default UseRefExamples;

/*
🧠 Summary of useRef Usage Here:

1️⃣ `inputRef` → DOM reference to focus the input (like document.getElementById)
2️⃣ `renderCount` → Stores a counter without re-rendering the UI
3️⃣ `textRef` → Directly update a paragraph’s inner text without state
4️⃣ `addressRef` → Holds a persistent object across renders
5️⃣ Global `list` shows that addressRef.current is always the same reference

Real-world Use Cases:
---------------------
✅ Input auto-focus (login forms, modals)
✅ Tracking mutable values like timers or request flags
✅ Avoiding re-renders for performance-heavy counters
✅ Storing previous values for comparisons (prevState, prevProps)
✅ Integrating third-party libraries (e.g., chart refs, maps, animations)

*/