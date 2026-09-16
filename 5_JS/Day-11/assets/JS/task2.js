//its a normal function 
//this function adding two variable whenever we call this function we 
// get a value of a + b
function add(a, b) {
    return a + b;
}
console.log(add(10,19));
//output:29

//this function Squaring variable whenever we call this function we 
// get a value of n^2
function square(n) {
    return n * n;
}
console.log(square(9));
//output:81


// Now we convert above function into arrow function
//this funciton are explicit retune (explicit means uses the return keyword explicitly inside a block of code)
let add = (a,b)=>{
  return a+b;
}
console.log(add(2,4));

let square = (n)=>{
  return n*n;
}
console.log(square(9));


//this funciton are implicit retune (implicit means we connot uses the return keyword inside a block of code)

let add = (a,b)=> a+b;
console.log(add(2,4));

let square = (n)=> n*n;
console.log(square(9));

