  class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }   

    addTask(name, description, assignedTo, dueDate, status) {
        this.currentId++;

        //Push a new task into tasks array
        this.tasks.push({
            id: this.currentId,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
            });
        
        }
    

    //calling render
    render () {
        let tasksHtmlList = [];
        for(let i = 0; i < this.tasks.length; i++){
            let currentTask = this.tasks[i];
            let date = new Date(currentTask.dueDate);

            let formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

            let taskHtml = createTaskHtml(
              currentTask.name,
              currentTask.description,
              currentTask.assignedTo,
              formattedDate,
              currentTask.status
            );

            tasksHtmlList.push(taskHtml);

        }
       let tasksHtml = tasksHtmlList.join('\n')
       
       document.getElementById('tasks-list').innerHTML = tasksHtml;
    }

}

const createTaskHtml =(name, description, assignedTo, dueDate, status) => 

{
    return `
    <li class="list-group-item">
      <div class="task">
        <h5>Task Name: ${name}</h5>
        <p>Task Description: ${description}</p>
        <p>Assigned to: ${assignedTo}</p>
        <p>Due date: ${dueDate}</p>
        <p>Status: ${status}</p>
      </div>
    </li>
    `;
};


const taskManager = new TaskManager();

document.getElementById('new-task-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector("inputField");
    const description = document.querySelector("task-description");
    const assignedTo = document.querySelector("task-assigned-to");
    const dueDate = document.querySelector("task-due-date");
    const status = document.getElementById("task-status");

    

    taskManager.addTask(name, description, assignedTo, dueDate, status);

    // Clear the form inputs
    document.getElementById('inputField').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-assigned-to').value = '';
    document.getElementById('task-due-date').value = '';
    document.getElementById('task-status').value = '';

    taskManager.render();

});



