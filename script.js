// Grab DOM elements
const taskInput = document.getElementById("taskInput");
const userSelect = document.getElementById("userSelect");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const emptyState = document.getElementById("emptyState");
const taskCountDisplay = document.getElementById("taskCount");

// Update task counters and empty state
function updateBoardUI() {
  const activeTasks = todoList.querySelectorAll("li:not(.completed)").length;
  const totalTasks = todoList.querySelectorAll("li").length;

  taskCountDisplay.textContent = `${activeTasks} Active Tasks`;

  if (totalTasks === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }
}

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  const selectedOption = userSelect.options[userSelect.selectedIndex];
  const userName = selectedOption.value;
  const avatarColor = selectedOption.getAttribute("data-color");

  if (taskText === "") {
    taskInput.classList.add("is-invalid");
    setTimeout(() => taskInput.classList.remove("is-invalid"), 1000);
    return;
  }

  const timeString = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center border task-row rounded shadow-sm";

  const taskContent = document.createElement("div");
  taskContent.className = "d-flex align-items-center w-100";

  taskContent.innerHTML = `
        <div class="avatar ${avatarColor} me-3 shadow-sm">
            ${userName.charAt(0)}
        </div>
        <div class="flex-grow-1 task-text">
            <div class="fw-bold fs-5 text-dark mb-0 task-title">${taskText}</div>
            <small class="text-muted">
                Assigned to <strong>${userName}</strong> • Added at ${timeString}
            </small>
        </div>
    `;

  // Mark as completed
  taskContent.addEventListener("click", function () {
    li.classList.toggle("completed");
    updateBoardUI();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-outline-danger btn-sm rounded-circle ms-3";
  deleteBtn.innerHTML = '<i class="bi bi-trash3"></i>';

  // Delete task with animation
  deleteBtn.addEventListener("click", function () {
    li.style.opacity = "0";
    li.style.transform = "scale(0.95)";
    setTimeout(() => {
      li.remove();
      updateBoardUI();
    }, 300);
  });

  li.appendChild(taskContent);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
  updateBoardUI();
}

// Event Listeners
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") addTask();
});

// Initialize UI on page load
updateBoardUI();
