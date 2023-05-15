let memory = 0;

function addToResult(value) {
  let result = document.getElementById("result");

  switch (value) {
    case "Clear":
      result.value = "";
      break;
    case "=":
      result.value = eval(result.value);
      break;
    case "M+":
      memory += parseFloat(result.value);
      break;
    case "M-":
      memory -= parseFloat(result.value);
      break;
    case "MR":
      result.value = memory.toString();
      break;
    case "pi":
      result.value += Math.PI;
      break;
    case "e":
      result.value += Math.E;
      break;
    default:
      result.value += value;
      break;
  }
}

function calculate() {
  let result = document.getElementById("result").value;
  
  // Add trigonometric functions
  result = result.replace(/sin/g, "Math.sin");
  result = result.replace(/cos/g, "Math.cos");
  result = result.replace(/tan/g, "Math.tan");
  
  // Add logarithmic functions
  result = result.replace(/log/g, "Math.log10");
  result = result.replace(/ln/g, "Math.log");

  // Add exponential functions
  result = result.replace(/\^/g, "**");
  result = result.replace(/exp/g, "Math.exp");

  try {
    let answer = eval(result);
    document.getElementById("result").value = answer;
  } catch (e) {
    document.getElementById("result").value = "Error";
  }
}

function clearResult() {
  document.getElementById("result").value = "";
}
