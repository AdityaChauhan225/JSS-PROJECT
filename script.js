document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');

        li.textContent = taskText;

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            li.classList.toggle('completed');
        });

        li.prepend(checkbox);
        taskList.appendChild(li);
        taskInput.value = ''; // Clear input
    } else {
        alert('Please enter a task!');
    }
});