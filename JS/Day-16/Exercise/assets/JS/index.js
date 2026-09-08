const submit = document.getElementById("submit")


submit.addEventListener("click",(element)=>{
  // this is very important for security purpose(preventDefault())
  element.preventDefault()

const userName = document.getElementById("userName")
const userPassword = document.getElementById("userPassword")
const userrePassword = document.getElementById("userrePassword")

const datas = { userName, userPassword, userrePassword}

const result = JSON.parse(localStorage.getItem("registerdata")) || []
result.push(datas)

console.log(result);

localStorage.setItem("registerdata",JSON.stringify(result))

alert("Welcome to The Gang")



window.location.reload()

})
