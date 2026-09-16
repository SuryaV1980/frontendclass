const heading = document.querySelector(".head");
const button = document.querySelector(".button");

button.addEventListener("click", function () {

    heading.textContent = "Heading Changed!";

    heading.style.color = "red";

    heading.classList.add("newStyle");

});