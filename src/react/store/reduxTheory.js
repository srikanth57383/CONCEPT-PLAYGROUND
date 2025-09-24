
// what is Redux?
// Redux is a predictable state management library for JavaScript applications, commonly used with React.
// It helps manage application state in a single, centralized store, making it easier to reason about state changes and debug applications.
// Redux follows a unidirectional data flow and uses actions and reducers to update the state immutably.

// Why use Redux?
// 	•	Single Source of Truth: The entire application state is stored in one place.
// 	•	Predictable State Updates: State changes are handled by pure functions (reducers) in response to actions.
// 	•	Easier Debugging: Tools like Redux DevTools allow time-travel debugging and state inspection.
// 	•	Middleware Support: Middleware like redux-thunk or redux-saga enables handling of asynchronous actions.
// 	•	Improved Maintainability: Clear separation of concerns and organized state management.

// When to use Redux?
// 	•	Large Applications: When the app has complex state logic or many components that need to share state.
// 	•	Frequent State Changes: When the state changes often and needs to be predictable.
// 	•	Cross-Component Communication: When multiple components need access to the same state.
// 	•	Debugging Needs: When you need advanced debugging capabilities for state changes.

// When not to use Redux?
// 	•	Small Applications: For simple apps, React's built-in state management (useState, useContext) is often sufficient.
// 	•	Simple State Logic: If the state is straightforward and doesn't require complex interactions.
// 	•	Performance Concerns: Redux can introduce overhead; for performance-critical apps, consider alternatives like Zustand or Recoil.

// Redux Toolkit simplifies the process of working with Redux 
// by providing a set of tools and best practices out of the box. It helps to reduce boilerplate code and 
// improve the overall developer experience.



// 1️⃣ What is a Redux Slice in Redux Toolkit?


// Answer:
// A slice is a section of the Redux store that manages a specific piece of state and its logic in one file.
// 	•	It is created using createSlice from Redux Toolkit.
// 	•	It contains:
// 	•	name → unique slice name.
// 	•	initialState → default state for that slice.
// 	•	reducers → synchronous state updates.
// 	•	extraReducers → async actions or external slice actions.

// Example:
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

// 2️⃣ How is createSlice different from traditional Redux reducers?

// Answer:
// createSlice simplifies the process of writing Redux reducers by automatically 
// generating action creators and action types. In traditional Redux, you would need to define action types, 
// action creators, and reducers separately, which can lead to more boilerplate code. With createSlice, you define the slice's
//  name, initial state, and reducers all in one place, and it handles the rest for you. This results in cleaner and more maintainable code.

// Interview Tip: Emphasize that createSlice improves readability and reduces boilerplate.


// 3️⃣ How do you handle asynchronous logic inside a slice?

// Answer:
// 	•	Use createAsyncThunk to handle async operations like API calls.
// 	•	Add the pending, fulfilled, and rejected cases in extraReducers.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await fetch("/api/products");
    return res.json();
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});
// export default productsSlice.reducer;

// 4️⃣ Can multiple slices share data or actions?

// Answer:
// Yes, slices can:
// 	•	Share state indirectly via the store’s combined state.
// 	•	Respond to actions from other slices using:
// 	•	extraReducers (listening to actions from another slice).
// 	•	Dispatching actions from one slice inside a thunk that affects another slice.

// Example (listening to another slice’s action):
extraReducers: (builder) => {
  builder.addCase(userSlice.actions.logout, (state) => {
    state.items = []; // Clear cart on logout
  });
}

// 5️⃣ How do you persist and rehydrate slice state?

// Answer:
// 	•	Redux slices by themselves are in-memory only.
// 	•	To persist state (e.g., after refresh), use redux-persist or manual localStorage logic.
// 	•	Example with manual persistence:
// const cartState = JSON.parse(localStorage.getItem("cart")) || initialState;
// const cartSlice = createSlice({
//   name: "cart",
//   initialState: cartState,
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//       localStorage.setItem("cart", JSON.stringify(state)); // persist
//     },
//     removeItem: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//       localStorage.setItem("cart", JSON.stringify(state)); // persist
//     }
//   }
// });

// Interview Tip: Mention trade-offs of persistence methods (e.g., simplicity vs. features).