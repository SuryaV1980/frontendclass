
const button = document.getElementById("button")


// we Create a Empty Array
const empolyeeDetails = []


button.addEventListener("click", ()=>{

// we get the elements into JS
const employeeName = document.getElementById("employeeName").value
const employeeDapartment = document.getElementById("employeeDepartment").value
const employeeSalary = document.getElementById("employeeSalary").value
const output = document.getElementById("output")

//Now we merge the single input into one 

const employee = {Name :employeeName, Department : employeeDapartment, Salary : employeeSalary}

empolyeeDetails.push(employee);


empolyeeDetails.forEach((employee)=>{

     output.innerHTML +=
     `
      <table>
          <tr>
            <td>
                Name: 
            </td>
            <td>
                ${employee.Name}
            </td>
          </tr>

          <tr>
            <td>
                Department: 
            </td>
            <td>
                ${employee.Department}
            </td>
          </tr>

          <tr>
            <td>
                Salary: 
            </td>
            <td>
                ${employee.Salary}
            </td>
          </tr>
      </table>
     `
})


})



