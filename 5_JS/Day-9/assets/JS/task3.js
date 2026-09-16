
let factorial = (n)=>{
let result = 1
if (n<0) return undefined;
  for (i = 2; i <= n ; i++){
    result *=i
  }
  return result;
   
}
console.log(factorial(5));