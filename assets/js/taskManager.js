const createTaskHtml =(name, description, assignedTo, taskType, status, dueDate) => 

{
    return `
    <li class="list-group-item">
      <div>
        <div class="task">
          <h5>Task Name: ${name}</h5>
          <p>Task Description: ${description}</p>
          <p>Assigned to: ${assignedTo}</p>
          <p>Task Type: ${taskType}</p>
          <p>Status: ${status}</p>
          <p>Due date: ${dueDate}</p>
          <button class="btn btn-sm btn-success done-button">Done</button>
          <button class="btn btn-sm btn-danger delete-button">Delete</button>
        </div>

      <div>
    </li>
    `;
};

class TaskManager {
  constructor(currentId = 1) {
      this.tasks = [];
      this.currentId = currentId;
  }   

    addTask(name, description, assignedTo, taskType, status, dueDate) {
        // this.currentId++;

        //Push a new task into tasks array
        this.tasks.push({
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            taskType: taskType,
            status: status,
            dueDate: dueDate
            
            });
        
        }
        updateTask(name, description, assignedTo, dueDate, status, taskType, taskId, taskPosition) {
          const task = {
              id: taskId,
              name: name,
              description: description,
              assignedTo: assignedTo,
              taskType: taskType,
              dueDate: dueDate,
              status: status,
            };
        
            this.tasks[taskPosition] = task;
      }

      updateTaskStatus(taskId, newStatus) {
        const task = this.tasks.find((task) => task.id === taskId);
        if (task) {
          task.status = newStatus;
        }
      }
  
    
      // Method to delete a task
  deleteTask(taskId) {
    //this.tasks = this.tasks.filter((task) => task.id !== taskId);
    let result = window.confirm("Do you want to delete this task?")
    // Create an empty array to store the new tasks
    const newTasks = [];

    if(result) {

      // Loop over the tasks
      for (let i = 0; i < this.tasks.length; i++) {
        // Get the current task
        const task = this.tasks[i];

        // Check if the task id is not equal to the taskId to be deleted
        if (task.id !== taskId) {
          // Push the task into the newTasks array
          newTasks.push(task);
        }
      
      }
    }
    // Set this.tasks to the newTasks array
    this.tasks = newTasks;
    // console.log(newTasks);
  }
  
    

    //calling render
    render () {
        let tasksHtmlList = [];
        for(let i = 0; i < this.tasks.length; i++){
            let currentTask = this.tasks[i];
            // let date = new Date(currentTask.dueDate);

            // let formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

            let taskHtml = createTaskHtml(
              currentTask.name,
              currentTask.description,
              currentTask.assignedTo,
              currentTask.taskType,
              currentTask.status,
              currentTask.dueDate 
            );

            tasksHtmlList.push(taskHtml);

        }
       let tasksHtml = tasksHtmlList.join('\n');
       
       document.getElementById('tasks-list').innerHTML = tasksHtml;
    }


  // Method to save tasks to localStorage
  save() {
    // Convert tasks array to JSON string
    const tasksJson = JSON.stringify(this.tasks);
    // Store the JSON string in localStorage
    localStorage.setItem('tasks', tasksJson);

    // Convert currentId to string
    const currentIdString = String(this.currentId);
    // Store currentId in localStorage
    localStorage.setItem('currentId', currentIdString);
  }

  // Method to load tasks from localStorage
  load() {
    // Check if tasks are stored in localStorage
    if (localStorage.getItem('tasks')) {
      // Get the JSON string of tasks from localStorage
      const tasksJson = localStorage.getItem('tasks');
      // Convert the JSON string to an array and store it in this.tasks
      this.tasks = JSON.parse(tasksJson);
    }

    // Check if currentId is stored in localStorage
    if (localStorage.getItem('currentId')) {
      // Get the currentId from localStorage
      const currentIdString = localStorage.getItem('currentId');
      // Convert the currentId to a number and store it in this.currentId
      this.currentId = Number(currentIdString);
    }
  }


}




