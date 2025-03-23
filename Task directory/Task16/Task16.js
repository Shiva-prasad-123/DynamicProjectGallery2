const works = {
    "task1": { "title": "Task 1", "url": "works/task1/red.html", "color": "red" },
    "task2": { "title": "Task 2", "url": "works/task2/green.html", "color": "green"
    },
    "task3": { "title": "Task 3", "url": "works/task3/blue.html", "color": "blue" }
    };
    function loadWork(task) {
    const displayArea = document.getElementById("displayArea");
    const taskTitle = document.getElementById("taskTitle");
    displayArea.style.backgroundColor = works[task].color;
    taskTitle.textContent = works[task].title;
    }
    