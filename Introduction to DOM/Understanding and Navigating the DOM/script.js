// 1. Select the <h1> by its ID and change its text
const heading = document.getElementById("main-heading");
heading.textContent = "Welcome to the DOM World!";

// 2. Select all <p> elements and set their text color to blue
const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "blue";
}

// 3. Select the first .container div and change its background color
const containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow";
