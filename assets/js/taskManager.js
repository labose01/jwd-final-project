
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }   

    addTask(name, description, assignedTo, dueDate, status) {
        this.currentId++;
        const newTask = {
            id: this.currentId,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        };

        this.tasks.push(newTask)

    
    }

}
const taskManager = new TaskManager();
taskManager.addTask({})
console.log(taskManager.tasks);
