const ul = document.querySelector("#item-list");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  const count = ul.children.length + 1;
  newItem.textContent = `New Item ${count}`;

  // Apply styles based on position (odd/even)
  if (count % 2 === 1) {
    newItem.classList.add("bold-blue");
  } else {
    newItem.classList.add("italic-red");
  }

  ul.appendChild(newItem);
});
