console.log(a);

var a = 10;

//It's give a output undefined because we call a before we initialization
//but we decalre a after the calling. 
//so the JS temp create var a and it excute and shows as undefined as data type

console.log(a);
let a = 20;

//It's give a output Reference error because we call a before we initialization
//but we decalre a after the calling. in let we cannot call it before initalization if
// do that the value a is stuck in the temporal dead zone between the calling and initialization
//the JS temp create let a and it excute and shows as Reference error