//Store the number whose factorial you want to find.
let number = 5;
//Initialize factorial as 1 because multiplication starts from 1.
let factorial = 1;
//Set i equal to the given number.
let i = number;
// While i > 1, multiply factorial by i.
// Decrease i by 1 after each iteration.
// When the loop ends, factorial contains the final result.
while (i > 1) {
  factorial *= i;
  i--;
}
console.log(factorial);