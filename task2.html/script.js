document.getElementById('add-button').addEventListener('click', function() {
  var input = document.getElementById('todo-input');
  var task = input.value;
  if (task.trim() !== '') {
    var prioritySelect = document.getElementById('priority-select');
    var priority = prioritySelect.options[prioritySelect.selectedIndex].value;
    
    var deadlineInput = document.getElementById('deadline-input');
    var deadline = deadlineInput.value;
    
    var listItem = document.createElement('li');
    listItem.className = 'todo-item';
    
    var priorityLabel = document.createElement('span');
    priorityLabel.className = 'priority-' + priority.toLowerCase();
    priorityLabel.textContent = priority + ' ';
    
    var text = document.createElement('span');
    text.textContent = task;
    
    var deadlineLabel = document.createElement('span');
    deadlineLabel.textContent = ' '+deadline+' ' ;
    
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    
    listItem.appendChild(priorityLabel);
    listItem.appendChild(text);
    listItem.appendChild(deadlineLabel);
    listItem.appendChild(deleteButton);
    
    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });
    
    document.getElementById('todo-list').appendChild(listItem);
    
    input.value = '';
    prioritySelect.selectedIndex = 0;
    deadlineInput.value = '';
  }
});

document.getElementById('priority-select').addEventListener('change', function() {
  var prioritySelect = document.getElementById('priority-select');
  var priorityLabel = document.getElementById('priority-label');
  var priority = prioritySelect.options[prioritySelect.selectedIndex].value;
  priorityLabel.className = 'priority-' + priority.toLowerCase();
});


var initialPriority = document.getElementById('priority-select').options[0].value;
var initialPriorityLabel = document.getElementById('priority-label');
initialPriorityLabel.className = 'priority-' + initialPriority.toLowerCase();



function saveToDoList() {
  var todoList = document.getElementById('todo-list').innerHTML;
  localStorage.setItem('todoList', todoList);
}


function loadToDoList() {
  var savedList = localStorage.getItem('todoList');
  if (savedList) {
    document.getElementById('todo-list').innerHTML = savedList;
    setupDeleteButtons(); 
  }
}


function handleDeleteButtonClick(event) {
  var listItem = event.target.closest('.todo-item');
  if (listItem) {
    listItem.remove();
    saveToDoList(); 
  }
}


function setupDeleteButtons() {
  var deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach(function(button) {
    button.addEventListener('click', handleDeleteButtonClick);
  });
}

document.getElementById('add-button').addEventListener('click', function() {
  
  saveToDoList();


  setupDeleteButtons();
});


window.addEventListener('load', function() {
  loadToDoList();
});



document.getElementById('deadline-date-input').addEventListener('input', function() {
  const deadlineDate = document.getElementById('deadline-date-input').value;
  const deadlineLabel = document.querySelector('.deadline-label');
  deadlineLabel.textContent = `Deadline: ${deadlineDate}`;
});


