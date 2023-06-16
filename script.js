// Get the necessary elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.querySelector(".task-list");

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
  <input type="checkbox">
  <span>${taskText}</span>
  <button class="delete-btn">Delete</button>
`;
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";

        // Add event listener to the "Delete" button of the task item
        const deleteBtn = taskItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            taskItem.remove();
        });
    }
});