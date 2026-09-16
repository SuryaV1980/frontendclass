const card = document.getElementsByClassName("studentCard")[0];
const button = document.getElementsByClassName("button")[0];


button.addEventListener("click",()=>{

  card.classList.toggle("studentCard");
  card.classList.toggle("studentCard1")


})
