// Define a function using an arrow function.
// Use the rest parameter ...numbers to collect all arguments into an array.
const sum = (...numbers) => {
  let total = 0;
// Initialize total with 0.
// Use a for...of loop to access each number.

  for (let num of numbers) {
// Add each number to total using +=.
    total += num;
  }
  return total;
// Return total after the loop finishes.
};
// Calling sumAll(10, 20, 30, 40) returns 100.
console.log(sum(10, 20, 30, 40)); 