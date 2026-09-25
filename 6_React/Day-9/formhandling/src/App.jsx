import { useState } from "react"

const App = () => {


  const [userName, setUserName] = useState("")
   const [userAge, setUserAge] = useState("")
   const [showdata, setShowData] = useState([])

 const changeName = (event)=>{
      setUserName (event.target.value)

 }

  const changeAge = (event)=>{

      setUserAge (event.target.value)

  }
  const changebutton = (event) =>{

    const obj = {id:Date.now(), Name:userName ,Age:userAge}

    const arr = [...showdata]

    arr.push(obj)

    setShowData(arr)
    alert("Successfully Drip")

    setUserName("")
    setUserAge("")

  }


  return (
    <>
    
      <div>
        <input type="text" onChange={changeName} placeholder="Enter your Name" />
        <input type="Age" onChange={changeAge} placeholder="Enter your Age" />
        <button onClick={changebutton}>Click</button>
      </div>
    

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>User Name:</th>
          <th>User Age :</th>
        </tr>
      </thead>

        <tbody>
          {showdata.map((e)=>(
            <tr key={e.i}>
                  <th>{e.userName}</th>
                  <th>{e.userAge}</th>
            </tr>
          ))}
        </tbody>
      
    </table>
    
    </>
  )
}

export default App