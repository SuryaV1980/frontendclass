//We extract the data using array Destructuring and Object Destructuring
// Array Destructuring
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first, second, third);
 // output: 10 20 30

// Object Destructuring
const student = {
  name: "Ravi",
  age: 25,
  course: "JavaScript"
};
const { name, age, course } = student;
console.log(name, age, course);
// output: Ravi 25 JavaScript