// we declare var, let and const outside 
var a = 10;
let b = 20;
const c = 30;

{
// we declare var, let and const inside
    var a = 100;
    let b = 200;
    const c = 300;

    console.log("Inside block:", a, b, c);
    //output is a = 100, b = 200, c = 300
}
//in outside a =10 were reclare to var a =100 inside the block because
// var cannot see any block and var is functional scope.
//but let and const are block scope. 
console.log("Outside block:", a, b, c);
// outside block output a=100, b=20, c=30