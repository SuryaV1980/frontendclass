
import Employee from "./assets/component/Employee";
const App = () => {

  const arr = ["React", "JavaScript", "Java", "Python", "Mern", ".Net"];

  const obj = {

    Name   : "Marshall",
    Age    : 325,
    Course : "React",
    City   :  "New York"
  };

  const arrobj = [{

    Id       :  22568,
    Name     : "Shoe",
    Price    :  "$600",
    Category : "Accessories"
  },

{

    Id       :  46582,
    Name     : "Gold Chain",
    Price    : "$1499",
    Category : "Ornaments"
  },

  {

    Id       :  53575,
    Name     : "Ring",
    Price    : "$699",
    Category : "Ornaments"
  },

  {

    Id       :  66873,
    Name     : "Watch",
    Price    : "$6767",
    Category : "Accessories"
  },

  {

    Id       :  10231,
    Name     : "50 Cent",
    Price    : "$999",
    Category : "Coin"
  }
 
]


const employeedata = {

  Name      : "Son Chaeyoung",
  Role      : "Full Stack",
  Salary    :  25000,
  City      : "New Jersey"

}


  return (
    <>

    {/* Task-1 */}
    <div>
        <div className="bg-white p-8 w-20 h-9 flex justify-center items-center text-center rounded-2xl" >
        <p>Task 1</p>
        </div>

        <div className="bg-green-500 p-6 gap-9 w-screen h-150 flex justify-center items-center ">
          

            
            {arr.map((e,i)=>(
              <p className="bg-white p-8 w-20 h-9 text-center flex justify-center items-center rounded-2xl" key={i+1}>{e}</p>
            ))}

          
        </div>
    </div>

{/* Task-2 */}

    <div>
        <div className="bg-white p-8 w-20 h-9 flex justify-center items-center text-center rounded-2xl">
          Task-2
        </div>

        <div className="bg-blue-500 p-6 gap-9 w-screen h-150 flex justify-center items-center">

              <p className="bg-white p-8 w-20 h-9 text-center flex justify-center items-center rounded-2xl">{obj.Name}</p>
              <p className="bg-white p-8 w-20 h-9 text-center flex justify-center items-center rounded-2xl">{obj.Age}</p>
              <p className="bg-white p-8 w-20 h-9 text-center flex justify-center items-center rounded-2xl">{obj.Course}</p>
              <p className="bg-white p-8 w-20 h-9 text-center flex justify-center items-center rounded-2xl">{obj.City}</p>
              
              
        </div>
    </div>

{/* Task-3 */}

    <div>
        <div className="bg-white p-8 w-20 h-9 flex justify-center items-center text-center rounded-2xl">
          Task-3
        </div>

        <div className="bg-yellow-500 p-6 gap-9 w-screen h-150 flex justify-center items-center ">
          

            
            {arrobj.map((arrobj)=>(
              <div className="bg-white p-8 w-75 h-100 flex flex-col-reverse justify-center items-center rounded-2xl"key={arrobj.Id} >

               <p> Category: {arrobj.Category}</p> <p>Price :{arrobj.Price}</p>  <p>Product :{arrobj.Name}</p>

              </div>
            ))}

          
        </div>

    </div>


            {/* task-4 */}

        <div>
          Task-4
        </div>
        <div className="bg-pink-600 p-6 gap-9 w-screen h-150 flex justify-center items-center ">
          <Employee Datasend={employeedata} />
        </div>
    
  
  </>
          )
        }


export default App