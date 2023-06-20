class TaskManager {
    constructor(currentId = 0) {
      this.currentId = currentId;
      this.tasks = [];
    }
  
    addTask(name, description, assignedTo, dueDate,) {
      this.currentId++;
      const newTask = {
        id: this.currentId,
        name,
        description,
        assignedTo,
        dueDate,
       };
      this.tasks.push(newTask);
    }
    
  }
  


// Create a new TaskManager instance
const taskManager = new TaskManager();

// Add event listener to the New Task form
const form = document.querySelector('#new-task-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Validate the form
  // ...

  // If form validation is successful, retrieve values from form inputs
  const nameInput = document.querySelector('#task-name');
  const descriptionInput = document.querySelector('#task-description');
  const assignedToInput = document.querySelector('#task-assigned-to');
  const dueDateInput = document.querySelector('#task-due-date');

  // Call the addTask method of the taskManager using the form input values
  taskManager.addTask(
    nameInput.value,
    descriptionInput.value,
    assignedToInput.value,
    dueDateInput.value
  );

  // Clear form inputs for the next submission
  nameInput.value = '';
  descriptionInput.value = '';
  assignedToInput.value = '';
  dueDateInput.value = '';

})
   console.log(TaskManager.tasks);
  