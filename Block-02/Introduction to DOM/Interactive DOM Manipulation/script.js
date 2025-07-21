const colorInput = document.getElementById("color-input");
const textInput = document.getElementById("text-input");
const changeBgBtn = document.getElementById("change-bg");
const updateTextBtn = document.getElementById("update-text");
const targetBox = document.getElementById("target-box");

// ✅ Change Background Color
changeBgBtn.addEventListener("click", () => {
  const color = colorInput.value.trim();

  // Temporary test element to validate color
  const testDiv = document.createElement("div");
  testDiv.style.backgroundColor = color;

  if (testDiv.style.backgroundColor === "") {
    alert("Invalid color name!");
  } else {
    targetBox.style.backgroundColor = color;
  }
});

// ✅ Update Text Content
updateTextBtn.addEventListener("click", () => {
  const newText = textInput.value.trim();

  if (newText === "") {
    alert("Please enter some text!");
  } else {
    targetBox.textContent = newText;
  }
});
