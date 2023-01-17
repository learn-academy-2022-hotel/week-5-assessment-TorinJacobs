// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// const { it } = require("node:test")
// const { describe } = require("yargs")

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// PSEUDOCODE: Write the test then see the test fail
// TEST: The test takes two arguments -- the function name and a call back function
describe("codeMode", () => {
  // The it method takes two arguments--the function description and a call back function
  it("takes in a string and returns a string with a coded message", () => {
    // The expect statement contains the function call and matcher for the expected output
    expect(codeMode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codeMode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codeMode(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})
// RED -- GOOD FAIL
// FAIL  ./code-challenges.test.js
// codeMode
//   ✕ takes in a string and returns a string with a coded message

// ● codeMode › takes in a string and returns a string with a coded message

//   ReferenceError: codeMode is not defined

//     22 | describe("codeMode", () => {
//     23 |   it("takes in a string and returns a string with a coded message", () => {
//   > 24 |     expect(codeMode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//        |     ^
//     25 |     expect(codeMode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     26 |     expect(codeMode(secretCodeWord3)).toEqual("3cc3ntr1c")
//     27 |   })

//     at Object.expect (code-challenges.test.js:24:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.181 s
// Ran all test suites.

// b) Create the function that makes the test pass.

// PSEUDOCODE:
// PROCESS: Create an object called conversion that contains key:value pairs holding the letter/number assignments.
// Declare a function called codeMode that utilizes .replace to search for a specific value and replace it with a specified value.

const conversion = {
  a: 4,
  e: 3,
  E: 3,
  i: 1,
  o: 0
}
const codeMode = (str) =>  str.replace(/[Eaeio]/g, (l) => conversion[l])
// The function takes a string as a parameter 
// .replace searches through the string for matching values in the regular expression '/[Eaeio]/g', to be replaced with the values indicated by '(l) => conversion[l]'
// 'g' is a global modifier meaning it will match all instances of the specified regex values found in the string, not just the first instance in the string
// '(l) => conversion[l]' indicates returning the values found in the conversion object as a parameter to replace the regex values [Eaeio] that .replace will match and replace in the string argument given
// HELPFUL RESOURCES: https://stackoverflow.com/questions/59185978/create-a-function-that-takes-a-string-as-an-argument-and-returns-a-coded-h4ck3r

// GREEN -- TEST PASSED
//  PASS  ./code-challenges.test.js
//   codeMode
//   ✓ takes in a string and returns a string with a coded message (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.163 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.85s.


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// PSEUDOCODE: 
// TEST: Write the test and see it fail
describe("wordSelector", () => {
  it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
    expect(wordSelector(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(wordSelector(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})
// RED -- GOOD FAIL
//  FAIL  ./code-challenges.test.js
//   codeMode
//   ✓ takes in a string and returns a string with a coded message (1 ms)
// wordSelector
//   ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter

// ● wordSelector › takes in an array of words and a single letter and returns an array of all the words containing that particular letter

//   ReferenceError: wordSelector is not defined

//     104 | describe("wordSelector", () => {
//     105 |   it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
//   > 106 |     expect(wordSelector(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
//         |     ^
//     107 |     expect(wordSelector(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     108 |   })
//     109 | })

//     at Object.expect (code-challenges.test.js:106:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.177 s, estimated 1 s
// Ran all test suites.

// b) Create the function that makes the test pass.

// PSEUDOCODE: 
// INPUT: Array of Strings and a single string
// OUTPUT: Array of words spelled with the letter in the test variable
// PROCESS:
// Declare the function wordSelector that takes in an array of strings and a single string
const wordSelector = (array, letter) => {
  // Use .filter method to create a new array with the filtered elements of the original array that meet the callback function specifications. The new array is a shallow copy, meaning it copies elements of the original array as outputs into the new array
  return array.filter((str) =>
  // The callback function uses the .toLowerCase method to ensure case matching of uppercase letters and the .includes method to search the words in the array for instances of the letter in the test variable
  str.toLowerCase().includes(letter))
}
// HELPFUL RESOURCES: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#:~:text=The%20filter()%20method%20is,included%20in%20the%20new%20array https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods


// GREEN -- TEST PASSED
//  PASS  ./code-challenges.test.js
//   codeMode
//   ✓ takes in a string and returns a string with a coded message (1 ms)
// wordSelector
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.17 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.75s.


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// TEST:
describe("fullHouse", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
  })
})
// RED -- GOOD FAIL
//  FAIL  ./code-challenges.test.js
//   codeMode
//   ✓ takes in a string and returns a string with a coded message (1 ms)
// wordSelector
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter
// fullHouse
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a full house

// ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a full house

//   ReferenceError: fullHouse is not defined

//     183 | describe("fullHouse", () => {
//     184 |   it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
//   > 185 |     expect(fullHouse(hand1)).toEqual(true)
//         |     ^
//     186 |     expect(fullHouse(hand2)).toEqual(false)
//     187 |     expect(fullHouse(hand3)).toEqual(false)
//     188 |     expect(fullHouse(hand4)).toEqual(true)

//     at Object.expect (code-challenges.test.js:185:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.189 s, estimated 1 s
// Ran all test suites.


// b) Create the function that makes the test pass.

// PSEUDOCODE:
// INPUT: Array of numbers
// OUTPUT: True/False Boolean Statement
// PROCESS:
// Declaring the function fullHouse that takes in an array
// const fullHouse = (arr) => {
//   // Creating an empty object to store key:value elements (think cardnumber:instances of cardnumber)
//   const countObj = {}
//   // Using the for of loop to iterate through the elements of the array
//   for(const card of arr){
//     // Utilizing the .hasOwnProperty method to look for each instance of a key in the countObj
//     if(countObj.hasOwnProperty(card)){
//       // if there is an instance of a matching key, increment the value by 1
//       countObj[card]++
//       // if there is no instance, set the value to 1
//     } else {
//       countObj[card]=1
//     }
//   }
//   // declared a function vals that returns the values of the countObj object's key:value pair (think cardnumber instances)
//   const vals = Object.values(countObj)
//   // conditional statement evaluating the key:value pair (again, think cardnumber:instances of cardnumber). If the values in the zeroeth index of the array equal 2 and the values of the 1st index equal 3, OR if the values in the 1st index of the array equal 2 and the values in the zeroeth index of the array equal 3
//   if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
//     // return true
//     return true
//   } 
//     // otherwise, return false
//   return false
// }

// GREEN -- TEST PASSED
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-5-assessment-TorinJacobs/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   codeMode
//     ✓ takes in a string and returns a string with a coded message (1 ms)
//   wordSelector
//     ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter
//   fullHouse
//     ✓ takes in an array of 5 numbers and determines whether or not the array is a full house (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.179 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.92s.

// HELPFUL RESOURCES:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of https://stackoverflow.com/questions/59510349/how-to-recognise-full-house-and-two-pair-in-a-javascript-poker-game https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty


// REFACTOR:
const fullHouse = (arr) => {
  const countObj = {}
  for(const card of arr){
    if(countObj.hasOwnProperty(card)){
      countObj[card]++
    } else {
      countObj[card]=1
    }
  }
  const vals = Object.values(countObj)
  // If the object values amount to 2 and 3 (a full house), then return true
  if(vals.includes(2) && vals.includes(3)){
    return true
  } 
  return false
}
// GREEN -- ALL TESTS PASSED
//  PASS  ./code-challenges.test.js
//   codeMode
//   ✓ takes in a string and returns a string with a coded message (1 ms)
// wordSelector
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a full house (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.181 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.95s.