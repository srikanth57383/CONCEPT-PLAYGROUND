//--------------------sorting algorithms----------------------->
// Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort
// Each with step-by-step explanations  

//--------------------bubbleSort----------------------------->

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {       // Outer loop: runs n times
    for (let j = 0; j < arr.length - i - 1; j++) { // Inner loop: compares adjacent elements
      if (arr[j] > arr[j + 1]) {               // If left > right
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // Swap them
      }
    }
  }
  return arr;
}


console.log(bubbleSort([9, 7, 3, 6, 2])); // [2, 3, 6, 7, 9]
// 🫧 Bubble Sort – Explanation

// 🔹 Idea:

// Bubble Sort is a simple comparison-based sorting algorithm.
// It repeatedly compares adjacent elements and swaps them if they are in the wrong order.
// After each pass, the largest element “bubbles up” to its correct position at the end of the array.

// ⸻

// 🔹 Step-by-Step Working (from your diagram)
// 	1.	Start with the unsorted array
// Example: [9, 7, 3, 6, 2]
// 	2.	Outer loop (i) → counts how many passes we’ve made.
// 	•	After i passes, the last i elements are sorted.
// 	3.	Inner loop (j) → goes from start to n - i - 1.
// 	•	Compares arr[j] and arr[j+1].
// 	•	If arr[j] > arr[j+1], swap them.
// 	4.	First pass:
// 	•	Compare 9 & 7 → swap → [7, 9, 3, 6, 2]
// 	•	Compare 9 & 3 → swap → [7, 3, 9, 6, 2]
// 	•	Compare 9 & 6 → swap → [7, 3, 6, 9, 2]
// 	•	Compare 9 & 2 → swap → [7, 3, 6, 2, 9]
// 👉 Biggest element 9 is now at the end.
// 	5.	Second pass:
// 	•	Compare again from start.
// 	•	This time, 7 moves to its correct place before 9.
// 👉 Result after pass 2: [3, 6, 2, 7, 9]
// 	6.	Continue passes until array is sorted.


// <------------------------------------------------------------------------optional------------------------------------------------------->
//--------------------insertionSort----------------------------->
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) { // Start from the second element
    let key = arr[i]; // Current element to be inserted
    let j = i - 1; // Index of the last sorted element

    // Move elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key; // Insert the key at its correct position
  }
  return arr;
}
// Step by step:
// 	1.	Outer loop (i)
// 	•	Starts from the second element (index 1) and goes to the end.
// 	•	Each iteration considers the element at arr[i] (the "key")  to be inserted into the sorted portion to its left.
// 	2.	Inner loop (j)
// 	•	Compares the key with elements in the sorted portion (arr[0..i-1]).
// 	•	If arr[j] > key, shift arr[j] to the right (arr[j + 1] = arr[j]) and decrement j.
// 3.	Insert key
// 	•	Once the correct position is found (when arr[j] <= key or j < 0), insert the key at arr[j + 1   ].  


// Example Walkthrough with [3, 2, 1]:
// 	•	Iteration 1 (i=1): key=2, compare with 3 → shift 3 right → insert 2 at index 0 → [2, 3, 1]
// 	•	Iteration 2 (i=2): key=1, compare with 3 → shift 3 right, compare with 2 → shift 2 right → insert 1 at index 0 → [1, 2, 3]          
// ✅ Final result: [1, 2, 3]

//--------------------selectionSort----------------------------->
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) { // Outer loop: iterate through each element
    let minIndex = i; // Assume the current index is the minimum

    // Inner loop: find the index of the minimum element in the unsorted portion
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Update minIndex if a smaller element is found
      }
    }

    // Swap the found minimum element with the first element of the unsorted portion
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
// Step by step:
// 	1.	Outer loop (i)
// 	•	Iterates through each element of the array.
// 	•	Each iteration considers arr[i] as the starting point of the unsorted portion.
// 	2.	Inner loop (j)
// 	•	Searches for the smallest element in the unsorted portion (from i+1 to end).
 	// •	If a smaller element is found, update minIndex.
// 	3.	Swap
// 	•	After finding the minimum element in the unsorted portion, swap it with arr[i].
// 	•	This places the smallest element at the beginning of the unsorted portion, effectively growing the sorted portion of the array.
// Example Walkthrough with [3, 2, 1]:
// 	•	Iteration 1 (i=0): minIndex=0, find
// 		compare 2 (j=1) → minIndex=1
// 		compare 1 (j=2) → minIndex=2
// 		swap arr[0] and arr[2] → [1, 2, 3]
// 	•	Iteration 2 (i=1): minIndex=1, find
// 		compare 3 (j=2) → minIndex stays 1
// 		swap arr[1] and arr[1] (no change) → [1, 2, 3]
// 	•	Iteration 3 (i=2): minIndex=2 (last element, already sorted)
// 		swap arr[2] and arr[2] (no change) → [1, 2, 3]
// ✅ Final result: [1, 2, 3]

//--------------------mergeSort----------------------------->
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: arrays with 0 or 1 element are already sorted
  }

  const mid = Math.floor(arr.length / 2); // Find the midpoint
  const left = arr.slice(0, mid); // Split the array into left half
  const right = arr.slice(mid); // Split the array into right half

  return merge(mergeSort(left), mergeSort(right)); // Recursively sort and merge
}

function merge(left, right) {
  const merged = [];
  let i = 0;
  let j = 0;

  // Merge the two sorted arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Append any remaining elements from either array
  return merged.concat(left.slice(i)).concat(right.slice(j));
}   
// Step by step:
// 	1.	Base Case
// 	•	If the array has 0 or 1 element, it’s already sorted.
// 	2.	Splitting
// 	•	Find the midpoint and split the array into left and right halves.
// 	3.	Recursion
// 	•	Recursively call mergeSort on both halves.
// 	4.	Merging
// 	•	Use the merge function to combine two sorted arrays into one sorted array.
// 	•	Compare elements from both arrays and push the smaller one into the merged array.
// 	•	After one array is exhausted, append any remaining elements from the other array.
// Example Walkthrough with [3, 2, 1]:
// 	•	Split: [3, 2, 1] → [3] and [2, 1]
// 	•	Recursively sort [3] (base case) → [3]
// 	•	Recursively sort [2, 1] → split into [2] and [1]
// 	•	Sort [2] (base case) → [2]
// 	•	Sort [1] (base case) → [1]
// 	•	Merge [2] and [1] → [1, 2]
// 	•	Merge [3] and [1, 2] → [1, 2, 3]
// ✅ Final result: [1, 2, 3]



//--------------------quickSort----------------------------->
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: arrays with 0 or 1 element are already sorted
  }

  const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
  const left = []; // Elements less than the pivot
  const right = []; // Elements greater than or equal to the pivot

  for (let i = 0; i < arr.length - 1; i++) { // Exclude the pivot itself
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elements less than pivot go to left
    } else {
      right.push(arr[i]); // Elements greater than or equal to pivot go to right
    }
  }

  // Recursively sort left and right, then concatenate with pivot in between
  return [...quickSort(left), pivot, ...quickSort(right)];
}
// Step by step:
// 	1.	Base Case
// 	•	If the array has 0 or 1 element, it’s already sorted.
// 	2.	Pivot Selection
// 	•	Choose the last element as the pivot.
// 	3.	Partitioning
// 	•	Create two arrays: left (elements < pivot) and right (elements >= pivot).
// 	4.	Recursion
// 	•	Recursively call quickSort on both left and right arrays.
// 	5.	Concatenation
// 	•	Combine the sorted left array, the pivot, and the sorted right array.
// Example Walkthrough with [3, 2, 1]:
// 	•	Pivot = 1, partition into left=[] and right=[3, 2]
// 	•	Recursively sort left=[] → []
// 	•	Recursively sort right=[3, 2]:
// 		Pivot=2, partition into left=[] and right=[3]
// 		Sort left=[] → []
// 		Sort right=[3] → [3]
// 		Merge → [2, 3]
// 	•	Merge all → [1, 2, 3]
// ✅ Final result: <div 1,="1" 2,="2" 3="">        </div>
