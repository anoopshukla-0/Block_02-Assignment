    const colorInput = document.getElementById("colorInput");
    const textInput = document.getElementById("textInput");
    const displayBox = document.getElementById("displayBox");

    const changeColorBtn = document.getElementById("changeColorBtn");
    const updateTextBtn = document.getElementById("updateTextBtn");

    // Function to validate color
    function isValidColor(color) {
      const s = new Option().style;
      s.color = color;
      return s.color !== '';
    }

    // Change background color
    changeColorBtn.addEventListener("click", () => {
      const color = colorInput.value.trim();

      if (isValidColor(color)) {
        displayBox.style.backgroundColor = color;
      } else {
        alert("❌ Invalid color name!");
      }
    });

    // Update text content
    updateTextBtn.addEventListener("click", () => {
      const newText = textInput.value.trim();

      if (newText === "") {
        alert("⚠️ Please enter some text!");
      } else {
        displayBox.textContent = newText;
      }
    });