/* ==========================================================
   ACADEMIC PLANNER SYSTEM
   ========================================================== */
let tasksArray = [];

// DOM Element Selections
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskListContainer = document.getElementById('task-list-container');

// Only run planner logic if we are on the planner.html page
if (addTaskBtn) {
  addTaskBtn.addEventListener('click', createTask);
  taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      createTask();
    }
  });
}

function createTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a valid academic task!');
    return;
  }

  // Define new task object
  const newTask = {
    id: Date.now(),
    title: taskText,
    completed: false
  };

  // Add to array & clear input
  tasksArray.push(newTask);
  taskInput.value = '';

  renderTasks();
}

function renderTasks() {
  taskListContainer.innerHTML = '';

  tasksArray.forEach(function (task) {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    
    // Task name
    const span = document.createElement('span');
    span.textContent = task.title;
    li.appendChild(span);

    // Control buttons container
    const btnContainer = document.createElement('div');
    btnContainer.className = 'task-buttons';

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.className = 'task-btn';
    completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
    completeBtn.addEventListener('click', function () {
      task.completed = !task.completed;
      renderTasks();
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'task-btn delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
      tasksArray = tasksArray.filter(t => t.id !== task.id);
      renderTasks();
    });

    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);
    li.appendChild(btnContainer);

    taskListContainer.appendChild(li);
  });
}


/* ==========================================================
   CONTACT FORM VALIDATION SYSTEM
   ========================================================== */
const contactForm = document.getElementById('contact-form');
const errorBox = document.getElementById('error-box');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop standard form submissions
    errorBox.textContent = ''; // Reset error text
    errorBox.style.color = '#c2272d'; // Error color

    const nameVal = document.getElementById('name').value.trim();
    const emailVal = document.getElementById('email').value.trim();
    const phoneVal = document.getElementById('phone').value.trim();
    const messageVal = document.getElementById('message').value.trim();

    // 1. Check for blank inputs
    if (!nameVal || !emailVal || !phoneVal || !messageVal) {
      errorBox.textContent = 'Error: All fields are required!';
      return;
    }

    // 2. Validate email format
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegEx.test(emailVal)) {
      errorBox.textContent = 'Error: Please enter a valid email address!';
      return;
    }

    // 3. Validate phone number containing only digits
    const digitsRegEx = /^\d+$/;
    if (!digitsRegEx.test(phoneVal)) {
      errorBox.textContent = 'Error: Phone number must contain only digits!';
      return;
    }

    // If validation succeeds:
    errorBox.style.color = '#2f855a'; // Success Green Color
    errorBox.textContent = 'Form submitted successfully! Thank you for getting in touch.';
    
    // Clear inputs
    contactForm.reset();
  });
}
