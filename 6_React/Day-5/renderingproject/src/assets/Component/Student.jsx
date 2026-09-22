import React from 'react'

const Student = () => {
  const name     =  "Uma Maheshwari"
  const age      =   24
  const course   =  "React JS"
  const fees     =  15000 
  const check = name? "Active": "InActive"

  return (
    <>
    <h1>
       Render Primitive Data
    </h1>
    
    <p>
      Name : {name}
    </p>

    <p>
      Age : {age}
    </p> 

    <p>
      Course : {course}
    </p>

    <p>
    Check : {check}
    </p>

  
    <p>
      Fee : {fees}
    </p>
    
    
    </>
  )
}

export default Student