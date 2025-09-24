



// ----------------------------or---------------------->✅ Array / Object Coding Questions// ----------------------------or----------------------> 1


const people = [
  { name: "Alice", city: "London" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "London" },
  { name: "David", city: "Paris" },
  { name: "Eve", city: "Berlin" },
];

// function groupby(arr) {
//   let result = {};

//   for (let i = 0; i < arr.length; i++) {
//     let city = arr[i].city; // extract city
//     let name = arr[i].name;
//     if (!result[city]) {
//       result[city] = [];
//     }
//     result[city].push(name);
//   }
//   return result;
// }

// ----------------------------or---------------------->

// function groupby(arr){
//     return arr.reduce((acc, person) => {
//         const { city, name } = person;
//         if (!acc[city]) {
//         acc[city] = [];
//         }
//         acc[city].push(name);
//         return acc;
//     }, {});

// }

// console.log(groupby(people));

// ----------------------------FLATMAP---------------------->// ----------------------------FLATMAP----------------------> 2

const users = [
  {
    name: "Alice",
    orders: [
      { product: "laptop", qty: 1 },
      { product: "mouse", qty: 2 },
    ],
  },
  {
    name: "Bob",
    orders: [
      { product: "phone", qty: 1 },
      { product: "charger", qty: 3 },
    ],
  },
];

// const result = users.map(user =>
//   user.orders.map(order =>
//    order.product.toUpperCase())

// ).flat(2)
// console.log(result);

//-------------------------------------remove duplicate with loop-----------------> 3

const arr = [1, 2, 2, 3, 4, 4, 5];
// let see= []
// const result =arr.map(el=>{

//   if(!see.includes(el)){
//     see.push(el)
//   }

// }

// )

// console.log(see)

or 
// const result = arr.reduce((acc, el) => {
//   if (!acc.includes(el)) {
//     acc.push(el);  // only add if not already present
//   }
//   return acc;
// }, []);
or

// const result = [...new Set(arr)]; // using Set to remove duplicates


//------------------------------------------------------> ------------ 4
//Given an array of students with {name, score}, return the student with the highest score.

const students = [
  { name: "ravi", marks: 29 },
  { name: "ram", marks: 22 },
  { name: "sri", marks: 30 },
];

// function high(students){
// const maxMarks =  Math.max(...students.map(student =>
//  student.marks
// ))
//   return students.find(student => student.marks === maxMarks);

// }


// function high(students) {
//   return students.reduce((topper, current) =>
//     current.marks > topper.marks ? current : topper
//   );
// }

// console.log(high(students));

// -------------------------------------------------------> ------------ 5
// 5️⃣ Count occurrences of elements

// Q: Given [1,2,2,3,3,3], return {1:1, 2:2, 3:3}.

const arr1 = [1, 2, 2, 3, 3, 3];
// let res = {};

// arr1.forEach(el => {
//   if (!res[el]) {
//     res[el] = 1;       // first time → start count at 1
//   } else {
//     res[el] += 1;      // already exists → increment
//   }
// });
// const res = arr1.reduce((acc, el) => {
//   acc[el] = (acc[el] || 0) + 1;  // if undefined, start at 0
//   return acc;
// }, {});

// console.log(res);

// -------------------------------------------------------> ------------ 6

const arr2 = [
  [1, 2],
  [3, 4],
  [5, [6, 7]],
];

// function res(arr) {
//   let flat = [];
//   arr.forEach((el) => {
//     if (Array.isArray(el)) {
//      flat = flat.concat(res(el));
//     } else {
//       flat.push(el);
//     }
//   });
//   return flat;
// }
// function res(arr) {
//   return arr.reduce((acc, el) => {
//     return acc.concat(Array.isArray(el) ? res(el) : el);
//   }, []);
// }

// // [1, 2, 3, 4, 5, 6, 7]
// console.log(res(arr2));

// -------------------------------------------------------> ------------ 7
// Group objects by a property

const items = [
  { name: "Alice", city: "London" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "London" },
  { name: "David", city: "Paris" },
  { name: "Eve", city: "Berlin" },
];

// { London: ["Alice","Charlie"], Paris:["Bob","David"], Berlin:["Eve"] }


// function groupby(items){
//   return items.reduce((acc, item) => {
//     const { city, name } = item;
//     if (!acc[city]) {
//       acc[city] = [];
//     }
//     acc[city].push(name);
//     return acc;
//   }, {});
// }

// console.log(groupby(items));


// -------------------------------------------------------> ------------ 8
// Chunking an array

// Q: Break [1,2,3,4,5,6,7] into subarrays of length 3.
//👉 Output: [[1,2,3],[4,5,6],[7]]
// const arr3 = [1, 2, 3, 4, 5, 6, 7];

// function chunk(arr, size) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += size)
//     result.push(arr.slice(i, i + size));
//   return result;
// }
// console.log(chunk(arr3, 3));

//
// -------------------------------------------------------> ------------ 9

// 2️⃣ Intersection of two arrays

// Q: Given [1,2,3,4] and [3,4,5,6], return [3,4].
// 👉 Pattern: use filter + includes or Set.


// const arr12 = [1,2,3,4] 
// const arr22= [3,4,5,6]

// const newArr = arr12.filter(el=>  arr22.includes(el))

// console.log(newArr);


//method 2: Using Set
// function intersection(arr1, arr2) {
//   const set1 = new Set(arr1);
//   return arr2.filter(item => set1.has(item));
// }    

// console.log(intersection(arr12, arr22)); // [3, 4]
// -------------------------------------------------------> ------------ 10
// 3️⃣ Find second largest number in an array
// const arr = [10, 5, 8, 20, 20];

// function secondmax(arr) {
//   let max = -Infinity;
//   let secondMax = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (num > max) {
//       // update both
//       secondMax = max;
//       max = num;
//     } else if (num < max && num > secondMax) {
//       // update only second max
//       secondMax = num;
//     }
//   }

//   return secondMax === -Infinity ? null : secondMax;
// }

// console.log(secondmax(arr)); // 10

// -------------------------------------------------------> ------------ 11
// Missing number in array
// Q: Given [1, 2, 4, 5], return 3
// 👉 Pattern: use Set or sum formula.

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return total - sum;
}

console.log(findMissingNumber([1, 2, 4, 5])); // 3

// -------------------------------------------------------> Find duplicates in an array------------ 12 #hashmap
// 4️⃣ Find duplicates in an array
// Q: Given [1, 2, 4, 5, 3], return [2, 3].
// 👉 Pattern: use Set or hashmap., 3, 2
//method 1: Using Set
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return Array.from(duplicates); //	Array.from() converts an iterable (like a Set, Map, or even a string) into a real array. //console.log(Array.from("hello")); 
// ["h", "e", "l", "l", "o"]
} 

//method 2: Using reduce
function findDuplicates(arr) {
  return arr.reduce((acc, num, index) => {
    if (arr.indexOf(num) !== index && !acc.includes(num)) {
      acc.push(num);
    }  
    return acc;
  }, []);
}

//method 3: hashmap
function findDuplicates(arr) {
  let count = {};
  let duplicates = [];

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let key in count) {
    if (count[key] > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
}

console.log(findDuplicates([1, 2, 4, 5, 3, 2, 3])); 
// [2, 3]



console.log(findDuplicates([1, 2, 3, 2, 4, 5, 3])); // [2, 3]

// -------------------------------------------------------> Find Max Consecutive 1s in Binary Array------------ 13
// Pattern: Count streaks.
function findMaxConsecutiveOnes(arr) {
  let maxCount = 0;
  let currentCount = 0;


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3


// -------------------------------------------------------> Rotate Array by K Steps------------ 14
// 👉 Pattern: Slice + concat OR reverse technique.

function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // Handle cases where k > n
  return [...arr.slice(n - k), ...arr.slice(0, n - k)];
} 

// Example usage:
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
// ------------------------------------------------------->  Move Zeros to End------------ 15
// 👉 Pattern: Two-pointer swap OR filter+concat.
function moveZerosToEnd(arr) {
  const result = [];
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else {
      result.push(arr[i]);
    }
  }

  // Append zeros at the end
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return result;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]

// ------------------------------------------------------->  Two Sum Problem------------ 16
function twoSum(numbers, target) {
  const numMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(numbers[i], i);
  }

  return null; // No solution found
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// hashmap implementation
function twoSum(numbers, target) {
  const numMap = {};

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (numMap[complement] !== undefined) {
      return [numMap[complement], i];
    }
    numMap[numbers[i]] = i;
  }

  return null; // No solution found
}
console.log(twoSum([2, 7, 11, 15], 9)); 

// -------------------------------------------------------> Flatten Nested Array------------ 17  #Recursion or flat(Infinity).
function flattenArray(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6] 


//-------------------------------------------------------->  array chunking------------ 18

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]

// -------------------------------------------------------> sort an array in Ascending Order------------ 19
function sortArrayAscending(arr) {
  return arr.slice().sort((a, b) => a - b);
}

console.log(sortArrayAscending([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // swap the elements
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray([5, 3, 8, 1])); // [1, 3, 5, 8]


// -------------------------------------------------------> sort an array in Descending Order------------ 20
function sortArrayDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

console.log(sortArrayDescending([5, 3, 8, 1])); // [8, 5, 3, 1]

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                // swap the elements
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
} 

console.log(sortArray([5, 3, 8, 1])); // [8, 5, 3, 1]

// -------------------------------------------------------> merge two arrays------------ 21
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

function mergeArrays(arr1, arr2) {
    // this method merges all the elements 
    // of arr2 at the end of arr1.
    return arr1.concat(arr2);
}

console.log(mergeArrays([5, 6], [7, 8]));

// -------------------------------------------------------> find the intersection of two arrays------------ 22
function intersection(arr1, arr2) {
  const set1 = new Set(arr1);
  return arr2.filter(item => set1.has(item));
}

console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]

function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.filter(item => set1.has(item));
}
console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]

// -------------------------------------------------------> find the union of two arrays------------ 23

function union(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return Array.from(new Set([...set1, ...set2]));
}
console.log(union([1, 2, 3], [3, 4,
  5])); // [1, 2, 3, 4, 5]

  function arrayUnion(arr1, arr2) {
    // merges two arrays then removes duplicates
    // and returns the output as a new array.
    return [...new Set([...arr1, ...arr2])];
}

console.log(arrayUnion([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]

// -------------------------------------------------------> kth LARGEST------------ 24

function kthLargestElement(arr, k) {
  if (k < 1 || k > arr.length) return null;
  return arr[k - 1];
}

console.log(kthElement([1, 2, 3, 4, 5], 2)); // 2
console.log(kthElement([1, 2, 3, 4, 5], 5)); // 5
console.log(kthElement([1, 2, 3, 4, 5], 6)); // null


function kthElement(arr, k) {
    if (k < 1 || k > arr.length) return null;
    return arr[k - 1];
}   

console.log(kthElement([1, 2, 3, 4, 5], 2)); // 2
console.log(kthElement([1, 2, 3, 4, 5], 5)); // 5
console.log(kthElement([1, 2, 3, 4, 5], 6)); // null

