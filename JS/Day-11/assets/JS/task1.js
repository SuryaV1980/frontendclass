// Difference between Var, let and const

//           var                  |                 let                       |           const
//-----------------------------------------------------------------------------------------------------------------
// functional scope               |  Its a Block scope                        | Its a Block Scope
// we can redeclare               |   we can Re-Declare                       |  we cannot Re-Declare 
// we can reassign                |   we cannot Re-Assign the value           |  we cannot Re-Assign the value
// Hoisted with value undefined   |   Hoisted with the value Refrence error   |  Hoisted with the value Refrence error 
// it won't stuck in the TDZ      |   it stuck in the TDZ                     |   it stuck in the TDZ



// 1. Hoisting & TDZ
console.log(a); // undefined (var is hoisted and initialized)
// console.log(b); // ReferenceError: Cannot access 'b' before initialization (TDZ)
// console.log(c); // ReferenceError: Cannot access 'c' before initialization (TDZ)

var a = 10;
let b = 20;
const c = 30;

// 2. Scope
if (true) {
  var fucntionalscopevar = "I'm function scope";
  let blockScopedLet = "I block scope so stay inside";
  const blockScopedConst = "I block scope so stay inside too";
}
console.log(fucntionalscopevar);
// console.log(blockScopedLet); // ReferenceError
// console.log(blockScopedConst); // ReferenceError

// 3. Redeclaration
var a = 100; // Allowed
// let b = 200; // SyntaxError: Identifier 'b' has already been declared
// const c = 300; // SyntaxError: Identifier 'c' has already been declared

// 4. Reassignment
b = 250;
// c = 350; // TypeError: Assignment to constant variable.