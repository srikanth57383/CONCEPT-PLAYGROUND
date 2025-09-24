// JavaScript Object Interview Questions

// <<<<<<<<<<<---------------------- Object Coding ------------------------------->>>>>>>>>>>>

//-------1-----------------------Clone an Object (Shallow Copy)-----------------------> 1
// 1) Clone an Object (Shallow Copy)

// 👉 Problem: Copy an object without referencing the original.
// const original = { a: 1, b: 2, c: 3 };
// const copy = { ...original };

// console.log(copy1); // { a: 1, b: 2 }

// // Method 2: Using Object.assign()
// const copy2 = Object.assign({}, original);

// console.log(copy2); // { a: 1, b: 2, c: 3 }




//----------------------Deep Clone  -------------------------------> 2

// 2) Deep Clone an Object       (Deep Copy)

// 👉 Problem: Handle nested objects properly.
// const user = { name: "John", address: { city: "Delhi" } };

// // ❌ Shallow copy issue
// const shallow = { ...user };
// shallow.address.city = "Mumbai";
// console.log(user.address.city); // "Mumbai" (changed!)

// // ✅ Deep copy
// const deep = JSON.parse(JSON.stringify(user));
// deep.address.city = "Hyderabad";
// console.log(user.address.city); // "Mumbai" (unchanged)

//----------------------Find the Key by Value -------------------------------> 3

// 👉 Problem: Find the key of an object by its value.
// const data = { a: 1, b: 2, c: 3 };
// const findKeyByValue = (obj, value) => Object.keys(obj).find(key => obj[key] === value);

// console.log(findKeyByValue(data, 2)); // "b"
// console.log(findKeyByValue(data, 4)); // undefined

//----------------------Find the Key by Value -------------------------------> 4

// const obj = { a: 1, b: 2, c: 3 };
// // Reverse lookup.
// function getKeyByValue(object, value) {
//   return Object.keys(object).find(key => object[key] === value);
// }

// console.log(getKeyByValue(obj, 2)); // "b"

//----------------------Compare Two Objects (Shallow Equality) -------------------------------> 5
// 5) Compare Two Objects (Shallow Equality)
function areShallowEqual(obj1, obj2) {
  return Object.keys(obj1).length === Object.keys(obj2).length &&
         Object.keys(obj1).every(key => obj1[key] === obj2[key]);
}

// Example usage:
const objA = { a: 1, b: 2 };
const objB = { a: 1, b: 2 };
const objC = { a: 1, b: 3 };
console.log(areShallowEqual(objA, objB)); // true
console.log(areShallowEqual(objA, objC)); // false
//----------------------Compare Two Objects (Deep Equality) -------------------------------> 6
// 6) Compare Two Objects (Deep Equality)
function areDeepEqual(obj1, obj2) {
  if (obj1 === obj2) return true; // Same reference or both null/undefined
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !areDeepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}           
// Example usage:
const objX = { a: 1, b: { c: 2 } };
const objY = { a: 1, b: { c: 2 } };
const objZ = { a: 1, b: { c: 3 } };
console.log(areDeepEqual(objX, objY)); // true
console.log(areDeepEqual(objX, objZ)); // false


//---------------------- Remove a Property from Object -------------------------------> 7
function removeProperty(obj, key) {
  const { [key]: removed, ...rest } = obj;
  return rest;
}

// Example usage:
const user = { id: 1, name: "Alice", age: 25 };
const updatedUser = removeProperty(user, "age");
console.log(updatedUser); // { id: 1, name: "Alice" }


//---------------------- Flatten a Nested Object (Advanced) -------------------------------> 8
const obj = { a: 1, b: { c: 2, d: { e: 3 } } };

function flatten(obj, parent = "", res = {}) {
  for (let key in obj) {
    let newKey = parent ? `${parent}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flatten(obj[key], newKey, res);
    } else {
      res[newKey] = obj[key];
    }
  }
  return res;
}

console.log(flatten(obj));
// { a: 1, "b.c": 2, "b.d.e": 3 }

//---------------------- Merge Two Objects -------------------------------> 9

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
    }
// Example usage:
// const objA = { a: 1, b: 2 };
// const objB = { b: 3, c: 4 };
// const merged = mergeObjects(objA, objB);
// console.log(merged); // { a: 1, b: 3, c: 4 }

