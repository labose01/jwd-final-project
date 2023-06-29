const addBtn = document.querySelector(".add");
const addTaskInput = document.querySelector(".addTaskInput");
const taskDescription = document.querySelector(".description");
const taskAssigned = document.querySelector(".assignedTo");
const dueDate = document.querySelector(".date");
const task = document.querySelector(".task");


const validFormFieldInput = () => {

    let data = addTaskInput.value;

    if(data == ""){
        alert("Please add the task name")
        return;
    }

    
    task.addEventListener("click", function(event) {
            event.preventDefault()
        
        tasksManager.addTask(
            addTaskInput.value,
            taskDescription.value,
            taskAssigned.value,
            dueDate.value,
            task.value
        );
        
        addTaskInput = '';
        taskDescription = '';
        taskAssigned = '';
        dueDate = '';
        task= '';
    });
    
} 


addBtn.addEventListener("click", validFormFieldInput);


//console.log(tasksManager);


