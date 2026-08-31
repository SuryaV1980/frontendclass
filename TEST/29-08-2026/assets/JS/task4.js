//  Store the string in a variable.
const program = "JavaScript";
//  Initialize an empty string `reverse` to store the reversed result.
let reverse = "";
//  Start the loop from the last character using `program.length - 1`.
//  Move backward through the string by decreasing `i`.
//  Add each character to `reverse` using `+=`.
for(let i = program.length-1; i >=0  ; i--){
  reverse += program[i]
}
  console.log(reverse);
//  When the loop ends, `reverse` contains the string in reverse order.
