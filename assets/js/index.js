const taskManager = new TaskManager();
const addBtn = document.querySelector("#addTaskBtn");

const taskForm = document.querySelector("#new-task-form");
const deleteTask = document.getElementById("#deleteTaskBtn");




const validFormFieldInput = (data) => {

    const addTaskInput = document.querySelector("#inputField");
    let newData = addTaskInput.value;
    if(newData == ""){
        alert("Please add the task name")
        return;
    }

}
addBtn.addEventListener("click", validFormFieldInput);



document.getElementById('new-task-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const newTaskname = document.getElementById("inputField");
    const newTaskdescription = document.getElementById("task-description");
    const newTaskassignedTo = document.getElementById("task-assigned-to");
    const newTaskType = document.getElementById("task-type");
    const newTaskstatus = document.getElementById("task-status");
    const newTaskdueDate = document.getElementById('task-due-date');

    
    //const saveButton = document.getElementById("saveTaskBtn");
    
    

    //validation should be here

    const name = newTaskname.value;
    const description = newTaskdescription.value;
    const assignedTo = newTaskassignedTo.value;
    const taskType = newTaskType.value;
    const status = newTaskstatus.value;
    const dueDate = newTaskdueDate.value;
    
    taskManager.addTask(name, description, assignedTo, taskType, status, dueDate);
    // save

    taskManager.save();

    //saveButton.addEventListener("click", () => submitForm("new"));

    taskManager.render();

    // Clear the form inputs
    document.getElementById('inputField').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-assigned-to').value = '';
    document.getElementById('task-type').value = '';
    document.getElementById('task-status').value = '';
    document.getElementById('task-due-date').value = '';
    

});


//eventlisener done must use dom traversal

// DOM Selector
const tasksList = document.querySelector("#tasks-list")

  
// Event listener for the click event on the tasks list
    tasksList.addEventListener('submit', (event) => {
    if (event.target.classList.contains('done-button')) {
          const parentTask = event.target.closest('.list-group-item');
          const taskId = Number(parentTask.dataset.taskId);
          taskManager.updateTaskStatus(taskId, 'DONE');
          taskManager.save();
          taskManager.render();
        }
    });
  
        // deleteTask.addEventListener('submit', () => {
        //     tasksList.removeChild();
        tasksList.addEventListener("click", (event) => {
            if (event.target.classList.contains("delete-button")) {
                const parentTask = event.target.parentElement.parentElement;
                const taskId = Number(parentTask.dataset.taskId);
                taskManager.deleteTask(taskId);
            }
        });
    
  
  
  // ...
  