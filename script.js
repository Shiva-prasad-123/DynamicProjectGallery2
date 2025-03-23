const tasks = [
  { id: 1, name: "Task 1", path: "Task directory/Task1/task1.html" },
  { id: 2, name: "Task 2", path: "Task directory/Task2/Task2.html" },
  { id: 3, name: "Task 3", path: "Task directory/Task3/Task3.html" },
  { id: 4, name: "Task 4", path: "Task directory/Task4/Task4.html" },
  { id: 5, name: "Task 5", path: "Task directory/Task5/Task5.html" },
  { id: 6, name: "Task 6", path: "Task directory/Task6/Task6.html" },
  { id: 7, name: "Task 7", path: "Task directory/Task7/Task7.html" },
  { id: 8, name: "Task 8", path: "Task directory/Task8/Task8.html" },
  { id: 9, name: "Task 9", path: "Task directory/Task9/Task9.html" },
  { id: 10, name: "Task 10", path: "Task directory/Task10/Task10.html" },
  { id: 11, name: "Task 11", path: "Task directory/Task11/Task11.html" },
  { id: 12, name: "Task 12", path: "Task directory/Task12/Task12.html" },
  { id: 13, name: "Task 13", path: "Task directory/Task13/Task13.html" },
  { id: 14, name: "Task 14", path: "Task directory/Task14/Task14.html" },
  { id: 15, name: "Task 15", path: "Task directory/Task15/Task15.html" },
  { id: 16, name: "Task 16", path: "Task directory/Task16/Task16.html" },
  { id: 17, name: "Task 17", path: "Task directory/Task17/Task17.html" }
];

const navContainer = document.getElementById("task-nav");
const iframe = document.getElementById("task-viewer");

// Create nav items
tasks.forEach(task => {
  const li = document.createElement("li");
  li.textContent = task.name;
  li.onclick = () => {
    iframe.src = task.path;
  };
  navContainer.appendChild(li);
});
