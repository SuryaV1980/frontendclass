
// ----------------------------------------------------------------
const button = document.getElementById("button");

const studentarray = []

const showingOutput = document.getElementById("output")
button.addEventListener("click", ()=>{

  const userName = document.getElementById("userName").value 
  const userAge  = document.getElementById("userAge").value 
  const userCity = document.getElementById("userCity").value 

  const studentDetail = {Name: userName, Age: userAge, City: userCity}
//  from this part you can understand easily after this part you thing a lot
// -----------------------------------------------------------------------

// ------------------------------------------------------
// After get the inputs you need to push into the empty array 
// studentarray.push is where to push. Then inside the braket which data going to push



  studentarray.push(studentDetail)


  studentarray.forEach((studentDetail)=>{ 
      showingOutput.innerHTML +=
      ` 
      <div>
        <h2>${studentDetail.Name}</h2>
        <p>Age: ${studentDetail.Age}</p>
        <p>City: ${studentDetail.City}</p>
      </div>
      `
   })
})
// -----------------------------------------------------------