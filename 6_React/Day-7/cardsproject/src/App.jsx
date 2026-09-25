
const App = () => {

  const studentdata = [
    {
      Name   : "Son Chaeyoung",
      Age    :  27,
      Course : "Classical Music",
      Salary : 25000
    },
    {
      Name   : "Marshall",
      Age    :  26,
      Course : "Classical Music",
      Salary :  65000
    },
    {
      Name   : "Rihanna",
      Age    :  36,
      Course : "Hip Hop, R&B",
      Salary :  6000
    },
    {
      Name   : "Uma  ",
      Age    :  24,
      Course : "Western Music",
      Salary :  24000
    },
    {
      Name   : "Dr. Dre",
      Age    :  56,
      Course : "Hip HOp and R&B",
      Salary :  125000
    }



]
  return (
    <>
    
    {studentdata.map((e,i)=>(
      <div key={i} className="bg-amber-300 p-8 flex justify-center w-screen gap-10 h-20">
        <p>{e.Name}</p>
        <p>{e.Age}</p>
        <p>{e.Course}</p>
        <p>{e.Salary}</p>
      </div>
    ))}
    
    </>
  )
}

export default App