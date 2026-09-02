const fruits = ["Apple", "Mango", "Orange"];
const vegetables = ["Carrot", "Potato"];

// 1. Add Banana at the end
fruits.push("Banana");

// 2. Remove the last element
fruits.pop();

// 3. Add Grapes at the beginning
fruits.unshift("Grapes");

// 4. Remove the first element
fruits.shift();

// 5. Check the total length
console.log("Fruits length:", fruits.length);

// 6. Combine both arrays
const finalResult = fruits.concat(vegetables);

// 7. Display final result
console.log(finalResult);