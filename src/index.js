const taskForm = document.querySelector("#create-task-form");
const taskInput = document.querySelector("#new-task-description");
const taskList = document.querySelector("#tasks");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const description = taskInput.value.trim();
  if (!description) {
    taskInput.focus();
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.className = "task";

  const taskText = document.createElement("span");
  taskText.className = "task-description";
  taskText.textContent = description;

  const completeButton = document.createElement("button");
  completeButton.type = "button";
  completeButton.className = "complete-task";
  completeButton.textContent = "Complete";
  completeButton.setAttribute("aria-pressed", "false");
  completeButton.addEventListener("click", () => {
    const isComplete = taskItem.classList.toggle("completed");
    completeButton.textContent = isComplete ? "Undo" : "Complete";
    completeButton.setAttribute("aria-pressed", String(isComplete));
  });

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-task";
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("aria-label", `Delete ${description}`);
  deleteButton.addEventListener("click", () => taskItem.remove());

  taskItem.append(taskText, completeButton, deleteButton);
  taskList.appendChild(taskItem);

  taskForm.reset();
  taskInput.focus();
});
