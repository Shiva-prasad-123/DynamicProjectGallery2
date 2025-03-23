let students = [];
function Student(Firstname, Lastname, Age, College, Semester, Grade) {
this.Firstname = Firstname;
this.Lastname = Lastname;
this.Age = Age;
this.College = College;
this.Semester = Semester;
this.Grade = Grade;
this.describe = function () {
return `Student: ${this.Firstname} ${this.Lastname}, Age: ${this.Age},
College: ${this.College}, Semester: ${this.Semester}, Grade: ${this.Grade}`;
};
}
function insertInfo() {
let fname = document.getElementById("firstname").value;
let lname = document.getElementById("lastname").value;
let age = document.getElementById("age").value;
let college = document.getElementById("college").value;
let semester = document.getElementById("semester").value;
let grade = document.getElementById("grade").value;
if (fname && lname && age && college && semester && grade) {
let newStudent = new Student(fname, lname, age, college, semester, grade);
students.push(newStudent);
alert("Student Added!");
} else {
alert("Please fill all fields!");
}
}
function clearInputs() {
document.getElementById("firstname").value = "";
document.getElementById("lastname").value = "";
document.getElementById("age").value = "";
document.getElementById("college").value = "";
document.getElementById("semester").value = "";
document.getElementById("grade").value = "";
}
function showAll() {
let displayDiv = document.getElementById("display");
displayDiv.innerHTML = "";
students.forEach(student => {
let p = document.createElement("p");
p.textContent = student.describe();
displayDiv.appendChild(p);
});
}
function clearDisplay() {
document.getElementById("display").innerHTML = "";
}
function searchStudent() {
let searchValue = document.getElementById("searchInput").value.toLowerCase();
let displayDiv = document.getElementById("display");
displayDiv.innerHTML = "";
let foundStudents = students.filter(student =>
student.Firstname.toLowerCase().includes(searchValue));
if (foundStudents.length > 0) {
foundStudents.forEach(student => {
let p = document.createElement("p");
p.textContent = student.describe();
displayDiv.appendChild(p);
});
} else {
displayDiv.innerHTML = "<p>No student found.</p>";
}
}