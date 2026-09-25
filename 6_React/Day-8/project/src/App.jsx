// import { useState } from "react"

import { useState } from "react"



// const App = () => {

//   console.log("Running");

//   const [count, setcount] = useState(0)

 
//   const addme = () => {
//     setcount(count + 1)
//   }

 
//   const decreceme = () => {
//     setcount(count - 1)
//   }

 
//   const resetme = () => {
//     setcount(0)
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button className="w-16 rounded-xl h-10 bg-amber-400 mr-10 " onClick={addme}>AddMe</button>
//       <button className="w-25 rounded-xl h-10 bg-red-400  mr-16"  onClick={decreceme}>DecreaseMe</button>
//       <button className="w-18 rounded-xl h-10 bg-blue-400  "  onClick={resetme}>ResetMe</button>
//     </>
//   )
// }

// export default App




const App = () => {

  const [change, setChange] = useState("This is Initial")

    const [value, setValue] = useState(true)


  let setad = ()=>{

    setChange(change? "this is Changed value" : "THis is Initial value")

  }

  let ValueSet = ()=>{

    setValue(!value ? "true": "false")

  }

  return (
    <>
    
    <h1>{change}</h1>
    <button onClick={setad}>Show</button>


    <h2>{value}</h2>
    <button onClick={ValueSet}>Show Button</button>
    
    </>
  )
}

export default App