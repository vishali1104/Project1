function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="task-buttons">
      <button onclick="completeTask(this)">✔</button>
      <button class="delete" onclick="deleteTask(this)">✖</button>
    </div>
  `;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function completeTask(button) {
  const task = button.closest("li");
  task.classList.toggle("completed");
}

function deleteTask(button) {
  const task = button.closest("li");
  task.remove();
}
