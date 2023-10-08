document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');

    // Function to add a new task to the list
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;

        // Add event listener to delete button
        const deleteButton = li.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }

    // Event listener for adding a task
    addTaskBtn.addEventListener('click', addTask);

    // Event listener for adding a task when Enter key is pressed
    taskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
