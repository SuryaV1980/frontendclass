// 1. GLOBAL SCOPE
var globalVar = "I am global var";
let globalLet = "I am global let";
const globalConst = "I am global const";

function demonstrateScope() {
  // 2. FUNCTION SCOPE
  var funcVar = "I am function var";
  let funcLet = "I am function let";
  const funcConst = "I am function const";

  if (true) {
    // 3. BLOCK SCOPE
    var blockVar = "I am block var (function-scoped)";
    let blockLet = "I am block let";
    const blockConst = "I am block const";

    // All global, function, and block variables are accessible here
    console.log(globalVar, funcVar, blockLet);
  }

  // Accessible: blockVar (var ignores block boundaries)
  console.log(blockVar);

  // NOT Accessible: blockLet, blockConst (uncommenting causes ReferenceError)
  // console.log(blockLet);
  // console.log(blockConst);
}

demonstrateScope();

// In Global Scope:
// Only globalVar, globalLet, and globalConst can be accessed here.
// funcVar, funcLet, blockVar, etc., are NOT accessible here.