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
    default:
      result.value += value;
      break;
  }
}

function calculate() {
  let result = document.getElementById("result").value;

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
