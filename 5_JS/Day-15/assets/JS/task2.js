const button = document.getElementById("button");
const box = document.getElementById("box")

button.addEventListener("click", ()=>{

  if(box.style.display === "block"){
    button.textContent = "Hide"
    box.classList.toggle("red") 
  }else{
    button.textContent = "change"
    box.classList.toggle("green") 
  }

})
