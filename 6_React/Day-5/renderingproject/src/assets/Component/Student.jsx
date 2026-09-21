import React from 'react'

const Student = () => {
  const name     =  "Uma Maheshwari"
  const age      =   24
  const course   =  "React JS"
  // const check = isActive? "Active": "InActive"
  const fees     =  15000 


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

    {/* <p>
      {check}
    </p> */}

  
    <p>
      Fee : {fees}
    </p>
    
    
    </>
  )
}

export default Student