//const taskManager = new TaskManager();
const addBtn = document.querySelector(".add");
const addTaskInput = document.querySelector("#inputField");
// const taskDescription = document.querySelector(".description");
// const taskAssigned = document.querySelector(".assignedTo");
// const dueDate = document.querySelector(".date");
//const task = document.querySelector(".task");


const validFormFieldInput = (data) => {

    
    let newData = addTaskInput.value;
    if(newData == ""){
        alert("Please add the task name")
        return;
    }

}


addBtn.addEventListener("click", validFormFieldInput);





