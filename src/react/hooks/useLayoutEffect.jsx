// 🔹 What is useLayoutEffect?
// 	•	It is just like useEffect, but the timing is different.
// 	•	useEffect runs asynchronously after painting (browser already updated the screen).
// 	•	useLayoutEffect runs synchronously after DOM updates but before the browser paints.
// → This means the user won’t see flickers if you need to read layout values (like width/height) or synchronously re-render something.

// ⸻

import React, { useLayoutEffect, useRef, useState } from 'react';

function LayoutEffectExample() {
    const [width, setWidth] = useState(0);
    const boxRef = useRef();

    // Using useLayoutEffect to read layout and update state before paint
    useLayoutEffect(() => {
        if (boxRef.current) {
            setWidth(boxRef.current.getBoundingClientRect().width);
        }
    }, []); // Empty dependency array means this runs once after initial render

    return (
        <div>
            <div
                ref={boxRef}
                style={{ width: '50%', height: '100px', backgroundColor: 'lightblue', marginBottom: '10px' }}
            >
                Resize the window to see width change
            </div>
            <p>Box width: {width}px</p>
        </div>
    );
}

export default LayoutEffectExample;

// ⸻

// 🔹 When to use useLayoutEffect?
// 	1.	When you need to measure DOM elements and make changes before the browser paints.
// 	2.	When you want to avoid flickering or visual inconsistencies during updates.
// 	3.	When you need to synchronously apply styles or classes based on layout measurements.

// ⸻

// ⚠️ Caution
// 	•	useLayoutEffect can block the browser from painting, which may lead to performance issues if overused.
// 	•	Prefer useEffect for most side effects unless you specifically need the synchronous behavior of useLayoutEffect.

// ⸻

// ✅ Summary
// 	•	useLayoutEffect is like useEffect but runs synchronously after DOM updates and before paint(rendering).
// 	•	It’s useful for reading layout and making synchronous updates to avoid flickers.
// 	•	Use it sparingly to avoid blocking the main thread and impacting performance.

// ⸻
// End of useLayoutEffect.jsx