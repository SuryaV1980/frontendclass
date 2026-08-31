// 1. Normal Function (Declaration)
function squareNormal(num) {
  return num * num;
}

// 2. Function Expression
const squareExpression = function(num) {
  return num * num;
};

// 3. Arrow Function
const squareArrow = (num) => num * num;

console.log(squareNormal(5));
console.log(squareExpression(5));
console.log(squareArrow(5));