const heading = document.getElementById("heading");

const paragraphs = document.querySelectorAll(".paragraphs");

const button = document.querySelector(".changes");

button.addEventListener("click", function () {

    heading.textContent = "Welcome to JavaScript DOM";

    paragraphs.forEach((paragraph, index) => {
        paragraph.textContent = `HAI Watashi wa Nithin Desu. ${index + 1}`;
    });

});