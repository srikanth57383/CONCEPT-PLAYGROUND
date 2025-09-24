
//1)  Reverse a string in JavaScript ----------------------------------> 1

// Method 1: Using a loop
// Method 2: Using built-in methods
const str = "hello";

function reverse(str) {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;

  }
  return arr.join("");
}
console.log(reverse(str));

// 🔹 What’s happening?
// 	•	Same two pointers (left = start, right = end).
// 	•	Instead of checking, we swap elements.
// 	•	Use a temporary variable (temp) to avoid overwriting.

// 🔹 Example: "hello" → array [h,e,l,l,o]
// 	•	Iteration 1 → swap h & o → [o,e,l,l,h]
// 	•	Iteration 2 → swap e & l → [o,l,l,e,h]
// 	•	Iteration 3 → pointers meet at middle → stop.
// 	•	Final result = "olleh".


// -------------------- or---------------------------------->
const reverse =  str.split("").reverse().join("");
console.log(reverse); // "olleh"

// ---------------------isPalindrome-----------------------------> 2
//2) Check Palindrome String
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
// 🔹 What’s happening?
// 	•	left starts at the first character.
// 	•	right starts at the last character.
// 	•	On each loop:
// 	1.	Compare str[left] with str[right].
// 	2.	If they don’t match → return false (not a palindrome).
// 	3.	Otherwise, move left++ (forward) and right-- (backward).

// 🔹 Example: "madam"
// 	•	Iteration 1 → compare "m" vs "m" ✅ → move pointers.
// 	•	Iteration 2 → compare "a" vs "a" ✅ → move pointers.
// 	•	Iteration 3 → middle "d" reached → stop.
// 	•	All matched → return true.
// -------------------- or---------------------------------->
const isPalindrome = str => str === str.split("").reverse().join("");
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false


// ----------------------------Anagaram----------------------> 3
// 🔹 Anagram

// 👉 Definition: Two strings are anagrams if they contain the same characters with the same frequency, just in a different order.
// 	•	Example: "listen" & "silent" ✅
// 	•	Example: "race" & "care" ✅
// 	•	Not Anagram: "hello" & "world" ❌

// 📌 Key Idea: Same letters, different order.

// ⸻

// 🔹 Anagram Check Approaches

// ✅ Method 1: Sorting
// 	•	Sort both strings alphabetically.
// 	•	If equal → they’re anagrams.

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  return s1.split('').sort().join('') === s2.split('').sort().join('');
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

// ✅ Method 2: Character Count (Optimal)
// 	•	Count characters in both strings using a hashmap/object.
// 	•	Compare counts.
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  const count = {};

  for (let char of s1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of s2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

// ----------------------------remove duplicate with loop----------------------> 4

function removeDuplicates(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }
  return result;
}
console.log(removeDuplicates("hello")); // "helo"

// ----------------------------longest word in sentence----------------------> 5

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // "jumped"

// -------------------------------------------------------> Find First Non-Repeating Character------------ 6
function firstNonRepeatingCharacter(str) {    
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating character found
}

console.log(firstNonRepeatingCharacter("swiss")); // "w"

// -------------------------------------------------------> a String Contains Another String in JavaScript?------------ 7
function containsSubstring(str, substr) {
  return str.includes(substr);
}
function containsSubstring(str, substring) {
//searches for the substring within str
return str.indexOf(substring) !== -1;
}

console.log(containsSubstring('GeeksForGeeks', 'For'));

console.log(containsSubstring("hello world", "world")); // true
console.log(containsSubstring("hello world", "worlds")); // false


// -------------------------------------------------------> First Letter of Each Word in a Sentence------------ 8
function firstLetterOfEachWord(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0))
    .join("");
}
console.log(firstLetterOfEachWord("Hello World")); // "HW"

function capitalizeFirstLetter(sentence) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

console.log(capitalizeFirstLetter('hello geeks'));

// -------------------------------------------------------> optional-----------------------------------------optional-------------------------------------------------->

// -------------------------------------------------------> Find All Permutations of a String------------ 7
function getPermutations(str) {
  if (str.length <= 1) return [str];

  const permutations = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const remainingPermutations = getPermutations(remainingChars);

    for (let perm of remainingPermutations) {
      permutations.push(char + perm);
    }
  }

  return permutations;
}
console.log(getPermutations("abc")); // ["abc", "acb", "bac", "bca", "cab", "cba"]
// -------------------------------------------------------> Find All Combinations of a String------------ 8
function getCombinations(str) {   
  const combinations = [];

  function combine(prefix, remaining) {
    if (prefix) {
      combinations.push(prefix);
    }
    for (let i = 0; i < remaining.length; i++) {
      combine(prefix + remaining[i], remaining.slice(i + 1));
    }
  }

  combine("", str);
  return combinations;
}
console.log(getCombinations("abc")); // ["a", "ab", "abc", "ac", "b", "bc", "c"]
// -------------------------------------------------------> Find All Subsequences of a String------------ 9
function getSubsequences(str) {
  const subsequences = [];

  function subseq(prefix, remaining) {
    if (prefix) {
      subsequences.push(prefix);
    }
    for (let i = 0; i < remaining.length; i++) {
      subseq(prefix + remaining[i], remaining.slice(i + 1));
    }
  }

  subseq("", str);
  return subsequences;
} 
console.log(getSubsequences("abc")); // ["a", "ab", "abc", "ac", "b", "bc", "c"]
// -------------------------------------------------------> Find All Unique Subsequences of a String------------ 10
function getUniqueSubsequences(str) {
  const subsequences = new Set();

  function subseq(prefix, remaining) {
    if (prefix) {
      subsequences.add(prefix);
    }
    for (let i = 0; i < remaining.length; i++) {
      subseq(prefix + remaining[i], remaining.slice(i + 1));
    }
  }

  subseq("", str);
  return Array.from(subsequences);
}
console.log(getUniqueSubsequences("aab")); // ["a", "aa", "ab", "b"]
// -------------------------------------------------------> Find All Palindromic Subsequences of a String------------ 11
function getPalindromicSubsequences(str) {
  const palindromicSubsequences = [];

  function isPalindrome(s) {
    return s === s.split("").reverse().join("");
  }

  function subseq(prefix, remaining) {
    if (prefix && isPalindrome(prefix)) {
      palindromicSubsequences.push(prefix);
    }
    for (let i = 0; i < remaining.length; i++) {
      subseq(prefix + remaining[i], remaining.slice(i + 1));
    }
  }

  subseq("", str);
  return palindromicSubsequences;
}
console.log(getPalindromicSubsequences("aab")); // ["a", "aa", "b"]
// -------------------------------------------------------> Find All Anagrams of a String------------ 12
function getAnagrams(str) {
  const anagrams = [];

  function permute(prefix, remaining) {
    if (remaining.length === 0) {
      anagrams.push(prefix);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      permute(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
    }
  }

  permute("", str);
  return anagrams;
}
console.log(getAnagrams("abc")); // ["abc", "acb", "bac", "bca", "cab", "cba"]
// -------------------------------------------------------> Find All Unique Anagrams of a String------------ 13
function getUniqueAnagrams(str) {
  const anagrams = new Set();

  function permute(prefix, remaining) {
    if (remaining.length === 0) {
      anagrams.add(prefix);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      permute(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
    }
  }

  permute("", str);
  return Array.from(anagrams);
}   