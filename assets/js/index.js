const taskManager = new TaskManager();
taskManager.load();
taskManager.render();
const addBtn = document.querySelector("#addTaskBtn");
const taskForm = document.querySelector("#new-task-form");
const saveButton = document.getElementById("saveTaskBtn");
const updateButton = document.getElementById("updateTaskBtn");
const deleteButton = document.getElementById("deleteTaskBtn");


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

    taskManager.render();

    // Clear the form inputs
    document.getElementById('inputField').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-assigned-to').value = '';
    document.getElementById('task-type').value = '';
    document.getElementById('task-status').value = '';
    document.getElementById('task-due-date').value = '';   

});


//  const doneBtn = document.getElementById("btn")

// DOM Selector
const tasksList = document.querySelector("#tasks-list")



// Event listener for the click event on the tasks list
tasksList.addEventListener('click', function(event) {
    if (event.target.classList.contains('done-button')) {
      const parentTask = event.target.parentElement.parentElement.parentElement;
      const taskId = parseInt(parentTask.dataset.taskId); 
      const task = taskManager.getTaskById(taskId);
      task.status = 'DONE';
      taskManager.render();
      taskManager.save();

      if (task.status === 'TODO') {
        event.target.classList.add('invisible');
        console.log('Class added: invisible');
      } else {
        event.target.classList.remove('invisible');
        console.log('Class removed: invisible');
      }
    }
    

  });


    tasksList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            const parentTask = event.target.parentElement.parentElement.parentElement;
            const taskId = parseInt(parentTask.dataset.taskId);
            taskManager.deleteTask(taskId);
            taskManager.save();
            taskManager.render();
            }
    });
    // function doneInvisible(){
    //     if(!task.status === 'DONE'){
    //        doneBtn = "visible";
    //     } else {
    //         doneBtn = "invisible";

    //     }
    // }

    // Click "Delete Task" button
    deleteButton.addEventListener("click",  () => {
        taskManager.deleteTask(updateTaskId)
        taskManager.render();
        taskManager.save();
    });


  