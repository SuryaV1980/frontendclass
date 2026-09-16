


const box = document.querySelector(".box");
const button = document.querySelector("button");

let render = false

button.addEventListener("click",()=>{

  render = !render
  if(render){
    box.classList.add("active")
    button.textContent = "show"
  }else{
    box.classList.add("active1")
    button.textContent = "change"
  }

})
