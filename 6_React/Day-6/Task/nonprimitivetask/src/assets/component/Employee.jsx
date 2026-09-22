
const Employee = ({ Datasend }) => {
  console.log(Datasend); 
  
  return (
    <div className="bg-white p-8 w-75 h-100 flex flex-col justify-center items-center rounded-2xl">
      <h2>Employee Details</h2>
      <p>Name: {Datasend.Name}</p>
      <p>Role: {Datasend.Role}</p>
      <p>Salary: {Datasend.Salary}</p>
      <p>City: {Datasend.City}</p>
    </div>
  );
};

export default Employee;
