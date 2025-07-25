document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create span for task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    li.appendChild(deleteBtn);

    // Add task to the list
    taskList.appendChild(li);

    // Clear input and refocus
    taskInput.value = "";
    taskInput.focus();
  }

  // Add task when button is clicked
  addTaskBtn.addEventListener("click", addTask);

  // Add task when 'Enter' key is pressed
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Handle clicks on the task list (for completing or deleting)
  taskList.addEventListener("click", (event) => {
    const target = event.target;

    // Mark task as completed
    if (target.tagName === "SPAN") {
      target.parentElement.classList.toggle("completed");
    }

    // Delete task
    if (target.classList.contains("delete-btn")) {
      target.parentElement.remove();
    }
  });
});
