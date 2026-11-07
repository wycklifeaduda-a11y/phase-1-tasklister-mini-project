const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const formData = new FormData(form);
    const taskdescription = formData.get('taskDescription');

    buildTodoList(taskdescription);
});

function buildTodoList(taskdescription) {
    const todoList = document.getElementById('todoList');
    const listItem = document.createElement('li');
    listItem.textContent = taskdescription;
    todoList.appendChild(listItem);
}   


