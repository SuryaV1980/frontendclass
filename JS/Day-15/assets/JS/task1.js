const content = document.getElementById("content");
const button = document.getElementById("button");

button.addEventListener("click",()=>{
  if(content.style.display === "block"){
    button.textContent = "Hide"
    content.style.display = "none"
  }else{
    button.textContent = "show"
    content.style.display = "block"
  }
})