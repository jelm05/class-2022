
// Things we need:
// A place to store tasks
// A way to uniquely identify our tasks (to update and delete them later)
// Create tasks and store them (via button and enter key)
// Add tasks to the document
// Update tasks
// Mark tasks complete
// Delete tasks


// This is just basic storage, in real life you would use a database
let tasks = [];


function uniqueId() {
  // toString(36) converts the random number to base 36 number/letter combo
  // subtr(2, 9) chops the string off between characters 2 and 9
  return Math.random().toString(36).substr(2, 9);
}


// Each task will be an object, with properties, we store in our task list
function createTask() {
  // Create a unique ID
  // Get the html input by its ID (this will give us various properties)
  // Get the value via .value
  let id = uniqueId();
  let input = document.getElementById('task-input');
  let value = input.value;

  // This is our actual task, and what we store
  let taskObject = {
    id: id,
    content: value,
    complete: false,
    deleted: false
  }

  // Here we store our taskObject
  tasks.push(taskObject);
  // Pass our task to the next function that outputs it
  addTask(taskObject);

  // Clear the input
  input.value = "";

}


// This take our task objects, convert them to HTML, and put them on the front end
function addTask(taskObject) {
  // This creates an empty <li></li> tag
  let li = document.createElement("li");
  // Add the class
  li.classList.add('task');
  // Add the content of our task to the innerHTML of the li
  li.innerHTML = taskObject.content;
  // Attach the unique ID to the li as a data attribute
  li.setAttribute('data-id', taskObject.id);

  // Append our new HTML task to the front end
  let taskList = document.getElementById('task-list');
  taskList.append(li);

}


function updateTaskList(id) {

  // Find the task, in our tasks array, that has an ID that's explicitly equal
  // to the ID that was passed as an argument in our function
  let taskToUpdate = tasks.find(task => task.id === id);
  console.log("taskToUpdate", taskToUpdate);

  if(taskToUpdate.complete === false ) {
    taskToUpdate.complete = true;
  } else {
    taskToUpdate.complete = false;
  }

}


function markTasksComplete() {

  // taskList is the parent UL
  // taskListChildren are all the list items that are child elements of task-list
  let taskList = document.getElementById('task-list');
  let taskListChildren = taskList.children;

  // console.log("taskList", taskList)
  // console.log("taskListChildren", taskListChildren)

  for( let i = 0; i < taskListChildren.length; i++ ) {
    let task = taskListChildren[i];
    // console.log("task " + i + ": " + task)

    // Check if a task alraedy has the class checked, if not, toggle it
    if( !task.classList.contains('checked') ) {
      task.classList.toggle('checked');
    }

    let id = task.getAttribute('data-id');
    updateTaskList(id);

  }

}


function deleteCompletedTasks() {

  if( confirm("Are you sure you want to delete these tasks?") ) {

    // Get all elements that have a class of checked
    let completedTasks = document.querySelectorAll('.checked');

    completedTasks.forEach(function(task) {
      let id = task.getAttribute('data-id');
      let taskToUpdate = tasks.find(task => task.id === id);

      if(taskToUpdate.deleted === false) {
        taskToUpdate.deleted = true;
      }

      // If we REALLY want to delete, and remove it from our array....
      // Find the index (location) of the task in the array, and use splice to remove it
      let indx = tasks.indexOf(taskToUpdate);
      tasks.splice(indx, 1);
      // END actual delete

      // Remove from front end:
      task.remove();

    });

  }

}

// I'm putting my event handlers below here
// Listen for click events on the UL parent of our task list items,
// because our task list items don't exist yet
document.getElementById('task-list').addEventListener('click', function(event){

  // If we clicked on something (target), and that something is a list item,
  // with a class of task.... then do something
  if(event.target && event.target.matches('li.task')) {
    console.log("You clicked on a li.task!");
    let task = event.target;
    task.classList.toggle('checked');

    // We need to update our task now!
    let id = task.getAttribute('data-id');
    updateTaskList(id);

  }

});


// I want to create tasks via the enter button
document.getElementById("task-input").addEventListener("keyup", function(event) {
  if( event.which == 13 ) {
    createTask();
  }
});



// Grab our new-task button from html via its ID
// Bind a click event, to that button, so that whenever a user clicks the button,
// createTask() is invoked
const newTaskButton = document.getElementById('new-task');
newTaskButton.onclick = createTask;


const markAllButton = document.getElementById('mark-all');
markAllButton.onclick = markTasksComplete;


const deleteCompletedButton = document.getElementById('delete-completed');
deleteCompletedButton.onclick = deleteCompletedTasks;
