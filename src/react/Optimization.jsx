

// React is fast by default because of the Virtual DOM. But when your app grows (lots of components, props, API calls,
//  UI updates), unnecessary re-renders or heavy operations can slow it down.
// So, optimization helps React apps stay smooth, reduce lag, and improve user experience (especially for big apps).


// ✅ How to Prevent Unnecessary Re-renders in React?

// 1. React.memo
// • Wrap functional components with React.memo to memoize them.
// • It prevents re-renders if props haven’t changed (shallow comparison).
// Example:
const MemoizedComponent = React.memo(function MyComponent({ prop1, prop2 }) {
  // component code
});

// 2. useMemo
// • Memoize expensive calculations or derived data.
// • It recalculates only when dependencies change.
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// 3. useCallback
// • Memoize functions to prevent re-creation on every render.
// • Useful when passing callbacks to child components.
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// 4. Key Prop in Lists
// • Always provide a unique key prop when rendering lists.
// • Helps React identify which items changed, added, or removed.
items.map(item => <ListItem key={item.id} item={item} />);

// 5. Avoid Inline Functions and Objects
// • Define functions and objects outside of render to avoid re-creation.
const handleClick = () => { /*...*/ };
const style = { color: 'blue' };

// 6. Split Components
// • Break down large components into smaller ones.
// • Smaller components are easier to optimize and manage.

// 7. Lazy Loading
// • Use React.lazy and Suspense to load components only when needed.
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// 8. Throttle/Debounce Events
// • For events like scroll or resize, use throttling or debouncing to limit how often the handler runs.

// 9. Avoid Unnecessary State
// • Keep state minimal and avoid storing derived data in state.
// • Use props or memoized values instead.

// 10. Profiling
// • Use React DevTools Profiler to identify performance bottlenecks and optimize accordingly.



// 🔎 What is the React Profiler?
// 	•	It’s a feature inside React DevTools (Chrome/Firefox extension).
// 	•	It helps you record a session of rendering in your app and see:
// 	•	Which components re-rendered
// 	•	How long they took
// 	•	Why they rendered (props, state, or context change)

// ⸻

// ⚙️ How to Enable Profiler
// 	1.	Install React Developer Tools browser extension (Chrome/Firefox).
// 	2.	Open your app in DevTools → Go to the Profiler tab (next to Components).
// 	3.	Click “Record” 🎥 and interact with your app (like clicking buttons, typing, etc.).
// 	4.	Stop recording → You’ll see a flame graph and ranked charts of components.

// ⸻

// 📊 What You’ll See
// 	•	Flame Graph: Visual timeline showing which components rendered and how long each took.
// 	•	Ranked Chart: Sorted list of components by render time (slowest at top).
// 	•	Why did this render? → Click a component → It shows if props, state, or context triggered the render.

// ⸻

// 🛠️ How to Use It for Optimization
// 	•	Find unnecessary re-renders (e.g., child components updating even when props didn’t change).
// 	•	Spot heavy components that take long to render.
// 	•	Combine with performance techniques:
// 	•	React.memo to skip re-renders
// 	•	useCallback / useMemo to avoid recreating functions/values
// 	•	Split big components with lazy loading

// ⸻

// ✅ When to Optimize React Performance?

// 1. Slow Initial Load
// • If your app takes too long to load initially, consider code-splitting and lazy loading.

// 2. Laggy UI Interactions
// • If users experience lag during interactions (clicks, typing), investigate re-renders and optimize components.

// 3. Large Lists
// • For rendering large lists, use virtualization libraries like react-window or react-virtualized.

// 4. Frequent Updates
// • If your app has frequent state updates (e.g., real-time data), ensure components are optimized to prevent unnecessary re-renders.

// 5. Complex Components
// • If a component has complex logic or heavy computations, use memoization techniques (useMemo, useCallback).

// 6. Mobile Performance
// • Mobile devices have limited resources; optimize for better performance on mobile browsers.

// 7. Profiling Results
// • Use profiling tools to identify slow components and optimize them based on actual data.

// ⸻

// ✅ Summary

// • React is fast by default, but optimization is crucial for large or complex apps.
// • Use memoization (React.memo, useMemo, useCallback) to prevent unnecessary re-renders.
// • Break down components, lazy load, and manage state efficiently.
// • Profile your app to find and fix performance bottlenecks.
// • Optimize when you notice slow loads, laggy interactions, or complex components.

// Following these strategies will help keep your React applications performant and responsive.

// ⸻

// 📌 References: