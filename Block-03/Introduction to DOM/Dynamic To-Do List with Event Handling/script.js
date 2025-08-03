
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Add Task Function
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("⚠️ Please enter a task!");
        return;
      }

      const li = document.createElement("li");

      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
      taskSpan.className = "task-text";

      const btnGroup = document.createElement("div");
      btnGroup.className = "btn-group";

      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Complete";
      completeBtn.addEventListener("click", () => {
        taskSpan.classList.toggle("completed");
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
      });

      btnGroup.appendChild(completeBtn);
      btnGroup.appendChild(deleteBtn);

      li.appendChild(taskSpan);
      li.appendChild(btnGroup);
      taskList.appendChild(li);

      taskInput.value = ""; 
    });
  