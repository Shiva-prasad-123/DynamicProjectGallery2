let students = [];

function insertInfo() {
  let student = {
    Firstname: document.getElementById('firstname').value,
    Lastname: document.getElementById('lastname').value,
    dob: document.getElementById('dob').value,
    college: document.getElementById('college').value,
    gpa: document.getElementById('gpa').value,
    
    description: function () {
      return "My name is " + this.Firstname + " " + this.Lastname +
             " and my date of birth is " + this.dob +
             ", I am currently pursuing my master's in " + this.college +
             " and till last semester my GPA is: " + this.gpa + ".";
    }
  };

  students.push(student);
  document.getElementById('info').innerText = "Info Inserted!";
}

function showInfo() {
  let output = "";
  students.forEach(student => {
    output += student.description() + "\n\n";
  });
  alert(output);
}
