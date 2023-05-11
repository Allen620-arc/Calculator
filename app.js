function addToResult(value) {
    // Get the current value of the result field
    var result = document.getElementById("result").value;
    
    // Add the new value to the end of the result
    result += value;
    
    // Update the result field with the new value
    document.getElementById("result").value = result;
}

function calculate() {
    // Get the current value of the result field
    var result = eval(document.getElementById("result").value);

    // Evaluate the expression using the eval function
    try {
        var answer = eval(result);
        document.getElementById("result").value = answer;
      } catch (e) {
        // If the expression is invalid, display an error message
        document.getElementById("result").value = "Error";
      }
}

function clearResult() {
    document.getElementById("result").value = "";
}
