// Task 1: Use map to convert an array of numbers into an array of their cubes.
// Write a JavaScript function that takes an array of numbers as input and returns a new array containing the cubes of each number.

function cubeNumbers(numbers) {
  return numbers.map((num) => num ** 3);
}

const inputArray1 = [1, 2, 3, 4, 5];
const cubedArray = cubeNumbers(inputArray1);
console.log(cubedArray);

// Task 2: Use reduce to find the sum of all elements in an array.
// Write a JavaScript function that takes an array of numbers as input and returns the sum of all elements.

function sumOfElements(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

const inputArray2 = [1, 2, 3, 4, 5];
const sum = sumOfElements(inputArray2);
console.log(sum);

// Task 3: Use filter to find all prime numbers in an array.
// Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the prime numbers.
function filterPrimes(numbers) {
  return numbers.filter((num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
}

const inputArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const primesArray = filterPrimes(inputArray3);
console.log(primesArray);

// Task 4: Use map, reduce, and filter to calculate the average of squared odd numbers in an array.
// Write a JavaScript function that takes an array of numbers as input and calculates the average of the squares of all odd numbers in the array.
function averageOfSquaredOdds(numbers) {
  const oddNumbers = numbers.filter((num) => num % 2 !== 0);
  const squaredOdds = oddNumbers.map((num) => num ** 2);
  const sumOfSquaredOdds = squaredOdds.reduce((acc, num) => acc + num, 0);
  const average = sumOfSquaredOdds / oddNumbers.length;
  return average;
}

const inputArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const average = averageOfSquaredOdds(inputArray4);
console.log(average);

// Task 5: Use map, reduce, and filter to find the longest string in an array of strings.
// Write a JavaScript function that takes an array of strings as input and returns the longest string from the array.
function longestString(strings) {
  const lengths = strings.map((str) => str.length);
  const maxLength = lengths.reduce((max, length) => Math.max(max, length), 0);
  const longestStrings = strings.filter((str) => str.length === maxLength);
  return longestStrings[0];
}

const inputArray = ["apple", "banana", "cherry", "strawberry", "fig", "grape"];
const longest = longestString(inputArray);
console.log(longest);

// Task 6: Use map to capitalize the first letter of each word in a sentence.
// Write a JavaScript function that takes a sentence as input and returns the sentence with the first letter of each word capitalized.
function capitalizeFirstLetter(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const inputSentence = "Hello my name is vayun ekbote.";
const capitalizedSentence = capitalizeFirstLetter(inputSentence);
console.log(capitalizedSentence);

// Task 7: Use filter to find all students who passed the exam.
// Write a JavaScript function that takes an array of student objects (with properties name and score) as input and returns an array containing only the students who passed the exam (scored 60 or above).
function findPassingStudents(students) {
  return students
    .filter((student) => student.score >= 60)
    .map((student) => student.name);
}

const studentsArray = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 75 },
  { name: "David", score: 50 },
];

const passingStudents = findPassingStudents(studentsArray);
console.log(passingStudents);

// Task 8: Create a Private Counter for Multiple Instances
// Write a closure-based function that creates multiple instances of a private counter. Each instance should have its own count, independent of the others.
function createInstanceCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());

// Task 9: Create a Promise-Based Calculator
// Write a Promise-based calculator that takes two numbers and an operation (addition, subtraction, multiplication, or division) as input. Perform the corresponding operation and resolve the Promise with the result. Handle division by zero and any invalid operations by rejecting the Promise with an appropriate error message.
function calculator(num1, num2, operation) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return reject(new Error("Both inputs must be numbers."));
    }

    if (operation === "addition") {
      resolve(num1 + num2);
    } else if (operation === "subtraction") {
      resolve(num1 - num2);
    } else if (operation === "multiplication") {
      resolve(num1 * num2);
    } else if (operation === "division") {
      if (num2 === 0) {
        reject(new Error("Division by zero is not allowed."));
      } else {
        resolve(num1 / num2);
      }
    } else {
      reject(
        new Error(
          "Invalid operation. Supported operations: addition, subtraction, multiplication, division."
        )
      );
    }
  });
}

//   Task 10: Calculate Total Score
//   Write a JavaScript function that takes an array of objects, where each object contains a property score, and uses the forEach method to calculate the total score of all the objects in the array. Return the total score as the output.
function calculateTotalScore(items) {
  let totalScore = 0;

  items.forEach((item) => {
    totalScore += item.score;
  });

  return totalScore;
}

const arr = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 95 },
];

const total = calculateTotalScore(arr);
console.log(total);
