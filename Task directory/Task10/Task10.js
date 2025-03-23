let stack = [];
function addTask() {
let taskInput = document.getElementById("taskInput");
let task = taskInput.value.trim();
if (task !== "") {
stack.push(task);
taskInput.value = "";
updateTaskList();
}
}
function undoTask() {
if (stack.length > 0) {
stack.pop();
updateTaskList();
}
}
function updateTaskList() {
let taskList = document.getElementById("taskList");
taskList.textContent = stack.join(", ");
}
