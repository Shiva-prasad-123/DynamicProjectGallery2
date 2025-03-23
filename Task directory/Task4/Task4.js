function showAlert() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name) {
      alert(`Welcome to JS ${name}`);
      nameInput.value = ''; // Clear input after OK
    } else {
      alert("Please enter your name.");
    }
  }
  
  document.getElementById("nameInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      showAlert();
    }
  });
  