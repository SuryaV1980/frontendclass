import React from 'react'


 const Program = ["C", "JavaScript", "Java", "Python", "C++" ]

 const Cities = ["New York", "Tokyo", "Osaka", "Copenhagen", "Melbourne", "Fukuoka" ]

 const Course =["Full Stack", "Data Science", "Data Analytics", "Marketing", "Cyber Security"]

const Array = () => {


  return (
   
    <>

    {/* Task-1 */}

    <h1 className='text-2xl text-center mt-5'>ARRAY RENDERING</h1>

    <h1 className='w-screen flex justify-center bg-yellow-400 items-center h-10 mt-4 mb-2'>Task 1</h1>
    <div className='bg-rose-400 w-100 rounded-2xl ml-142  h-75 p-8 flex flex-col justify-center items-center'>

      

        {Program.map((e,i)=>(

          <p key={i} className='bg-white w-40 rounded-2xl mb-4 text-center p-2'>
            
            {e}
            
            </p>

        ))}


    </div>


{/* Task-2 */}

    <h1 className='w-screen flex justify-center bg-blue-400 items-center h-10 mt-4 mb-2'>Task 2</h1>
    <div className='bg-gray-700 w-100 rounded-2xl ml-142 mt-5 h-75 p-8 flex flex-col justify-center items-center'>

      

        {Cities.map((City,i)=>(

          <ul key={i} className='bg-white w-40 rounded-2xl flex justify-center items-center mb-3 text-center p-1'>
            
            <li>{City}</li>
            
            
            </ul>

        ))}


    </div>
        {/* Task-3 */}

    <h1 className='w-screen flex justify-center bg-black text-white items-center h-10 mt-4 '>Task 3</h1>
    <div className='bg-blue-700 mt-5 rounded-2xl h-75'>
      <div>
        <h1 className='text-white ml-10 p-5 flex justify-center items-center bg-amber-300 w-60 h-15 rounded-4xl' >
          Available Courses
        </h1>
      </div>

      
    <div className=' rounded-2xl  p-8 flex gap-8 justify-center items-center'>

      
        {Course.map((City,i)=>(

          <ul key={i} className='bg-white w-40 rounded-2xl flex justify-center items-center hover:bg-blue-300 mb-3 text-center p-1'>
            
            <li>{City}</li>
            
            
            </ul>

        ))}


    </div>
    </div>
    </>
  )
}

export default Array