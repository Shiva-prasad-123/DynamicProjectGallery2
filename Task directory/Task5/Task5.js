function getValues() {
    const x = parseFloat(document.getElementById("num1").value);
    const y = parseFloat(document.getElementById("num2").value);
  
    // Validation
    if (isNaN(x) || isNaN(y)) {
      showResult("Please enter both numbers!");
      return null;
    }
  
    return { x, y };
  }
  
  function showResult(value) {
    document.getElementById("res").value = value;
  }
  
  function add() {
    const values = getValues();
    if (!values) return;
    showResult(values.x + values.y);
  }
  
  function subtract() {
    const values = getValues();
    if (!values) return;
    showResult(values.x - values.y);
  }
  
  function multiply() {
    const values = getValues();
    if (!values) return;
    showResult(values.x * values.y);
  }
  
  function divide() {
    const values = getValues();
    if (!values) return;
  
    if (values.y === 0) {
      showResult("Cannot divide by zero");
    } else {
      showResult((values.x / values.y).toFixed(2));
    }
  }
  