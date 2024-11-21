// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add event listener for adding tasks
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = ''; // Clear input
  }
});

// Function to add a task
function addTask(taskText) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task');

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteBtn);

  // Mark task as completed on click
  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  taskList.appendChild(taskItem);
}
