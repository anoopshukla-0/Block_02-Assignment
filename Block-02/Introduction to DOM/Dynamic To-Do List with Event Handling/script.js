const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Handle Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  // Prevent empty input
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.classList.add("task-item");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("task-buttons");

  // Complete Button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  buttonContainer.appendChild(completeBtn);
  buttonContainer.appendChild(deleteBtn);

  li.appendChild(taskSpan);
  li.appendChild(buttonContainer);

  taskList.appendChild(li);

  taskInput.value = "";
});
