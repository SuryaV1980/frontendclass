// Rest Parameter Collects multiple individual elements or arguments into a single array. 

// Spread Syntax Expands an array or iterable into individual elements. 

// Spread element merge the two array into one array and we can add the new element
const frontend = ["HTML", "CSS", "JS"];
const backend = ["Node.js", "Express"];

const fullStack = [...frontend, ...backend, "MongoDB","Python"];
console.log(fullStack); 
// Output:['HTML', 'CSS', 'JS', 'Node.js', 'Express', 'MongoDB', 'Python']


// Rest element merge the single values or arguemnts into single arrya
function showItems(...items) {
  console.log(items);
}

showItems("Apple", "Banana", "Cherry","Blueberry"); 
// Output: ['Apple', 'Banana', 'Cherry', 'Blueberry']