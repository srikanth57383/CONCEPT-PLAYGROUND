// ✅ How does the virtual DOM work, and how does React use it to optimize rendering?

// Answer:

// • The virtual DOM is a lightweight, in-memory representation of the actual DOM.
// • When state or props change, React:
// 1. Creates a new virtual DOM tree.
// 2. Diffs it against the previous tree using a reconciliation algorithm.
// 3. Calculates the minimal number of changes.
// 4. Applies those changes efficiently to the real DOM.
// • This avoids unnecessary DOM manipulations, which are expensive, making the UI updates much faster and more efficient.




// ✅ What is Reconciliation in React?

// Reconciliation is the process of comparing the new Virtual DOM tree with the previous Virtual DOM tree and determining the minimum number of changes required to update the actual DOM (Browser DOM).

// This process ensures that React updates the UI efficiently, without re-rendering the entire page.

// ⸻

// 🔁 Step-by-Step Reconciliation Process:
// 	1.	React renders a component (based on props/state).
// 	2.	It creates a new Virtual DOM (a JavaScript object).
// 	3.	It compares the new Virtual DOM with the previous Virtual DOM.
// 	4.	It calculates the difference (called “diffing”).
// 	5.	It updates only the parts of the real DOM that changed (not full re-render).

// ⸻

// 🧠 Why is Reconciliation Important?
// 	•	DOM operations are expensive.
// 	•	Reconciliation minimizes DOM manipulation.
// 	•	Helps React apps remain fast and performant.

// ⸻

// 📌 Diffing Algorithm

// React uses a heuristic O(n) algorithm instead of O(n³) for better performance.

// Key rules in React’s diffing:
// 	1.	Different element types → replace the node.
// 	•	<div> to <span> → full replacement.
// 	2.	Same element type → update only changed attributes.
// 	3.	Keys are important for identifying elements in a list.
// 	•	Helps React match and update efficiently.

//<----------Example---------->

function Example({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
  );
}


	// •	If isLoggedIn changes from true to false, React doesn’t re-render the entire DOM.
	// •	It reconciles the difference and updates only the <h1> text.
