
//This is the given array, We need to find the highest number comparing with local index
//so, we take a array it stored in a variable(numbers)
const numbers = [45, 12, 89, 34, 67, 90, 23];

//let we pick a initial number as 45 --> its a highest number 
let highest = numbers[0];


// using for loop we compare with other local array values with the
// hightest value we already pick
// Start the loop from index 1 because index 0 is already stored.
// Compare each number with highest.
// If the current number is greater, update highest.
// After the loop, highest contains the largest number.
for(let i = 1 ; i < numbers.length ; i++){
  if(highest < numbers[i] ){
    highest = numbers[i];
  }
 
}
     console.log(highest)
