const addBtn = document.querySelector(".add");
const addTaskInput = document.querySelector(".addTaskInput");
const tasks = document.querySelector(".task");

const validFormFieldInput = () => {

    let data = addTaskInput.value;

    if(data == ""){
        alert("Please add the task name")
        return;
    }
} 
addBtn.addEventListener("click", validFormFieldInput);
