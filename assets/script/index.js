
    const addBtn = document.querySelector(".add");
    const addTaskInput = document.querySelector(".addTaskInput");
    const tasks = document.querySelector(".taskManager");
  
    const validFormFieldInput = () => {
      let data = addTaskInput.value;
  
      if (data === "") {
        alert("Please add the task name");
        return;
      }
  
      let assignedto = document.querySelector(".assigned").value;
  
      if (assignedto === "") {
        alert("Please add assigned name");
        return;
      }
    };
  
    tasks.addEventListener("click", (event) => {
      event.preventDefault();
    });
  
    addBtn.addEventListener("click", validFormFieldInput);
  
    // const tasksManager = new TaskManager();
    console.log(tasksManager);
  
  

