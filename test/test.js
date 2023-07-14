// import { TaskManager } from '../assets/js/taskManager';

// const assert = require('assert');
// const { TaskManager } = require('../assets/js/taskManager');

// describe('TaskManager', () => {
//   let taskManager;

//   beforeEach(() => {

//     taskManager = new TaskManager();
//   });

//   it('TaskManager is initialized', () => {
//     assert.ok(taskManager instanceof TaskManager);
//   });

//   it('addTask adds a task to the task list', () => {
//     const taskManager = new TaskManager();
  
//     const name = 'Grocery';
//     const description = 'To test addTask method';
//     const assignedTo = 'Lidiya Abose';
//     const taskType = 'General';
//     const status = 'TODO';
//     const dueDate = '2023-08-15';
  
//     taskManager.addTask(name, description, assignedTo, taskType, status, dueDate);
  
//     const retrievedTask = taskManager.getTaskById(1);
  
//     assert.deepStrictEqual(retrievedTask, {
//       id: 1,
//       name,
//       description,
//       assignedTo,
//       taskType,
//       status,
//       dueDate,
//     });
//   });
  
//   it('deleteTask removes a task from the task list', () => {
//     const taskManager = new TaskManager();
    
   
//     const taskName = 'Test Task';
//     const taskId = 1;
//     taskManager.addTask(taskName);
 
//     taskManager.deleteTask(taskId);

//     const retrievedTask = taskManager.getTaskById(taskId);
    
//     assert.strictEqual(retrievedTask, undefined);
//   });
  
//   it('getTaskById retrieves the correct task', () => {
//     const taskManager = new TaskManager();

//     const task1 = { id: 1, name: 'Task 1', status: 'TODO' };
//     const task2 = { id: 2, name: 'Task 2', status: 'DONE' };
//     const task3 = { id: 3, name: 'Task 3', status: 'TODO' };
  
//     taskManager.tasks = [task1, task2, task3];

//     const retrievedTask1 = taskManager.getTaskById(1);
//     const retrievedTask2 = taskManager.getTaskById(2);
//     const retrievedTask3 = taskManager.getTaskById(3);
  
//     assert.deepStrictEqual(retrievedTask1, task1);
//     assert.deepStrictEqual(retrievedTask2, task2);
//     assert.deepStrictEqual(retrievedTask3, task3);
//   });
  
// });
