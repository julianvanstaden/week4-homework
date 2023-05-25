function calculate() {
    var value1 = parseFloat(document.getElementById("value1").value);
    var value2 = parseFloat(document.getElementById("value2").value);
    var operator = document.getElementById("operator").value;
    var result;
    
    switch(operator) {
      case "+":
        result = value1 + value2;
        break;
      case "-":
        result = value1 - value2;
        break;
      case "*":
        result = value1 * value2;
        break;
      case "/":
        result = value1 / value2;
        break;
      default:
        result = "Invalid operator";
    }
    
    alert("Result: " + result);
    console.log(result)
    document.getElementById("calculateForm").reset()
  }