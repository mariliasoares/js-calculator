const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calcType) {
  const enteredNumber = getUserNumberInput();
  if(!enteredNumber){
    return;
  }
  const initialResult = currentResult;
  let mathOp;
  if(calcType === 'ADD') {
    currentResult += enteredNumber;
    mathOp = '+';
  } else if(calcType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOp = '-';
  } else if(calcType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOp = '*';
  } else if(calcType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOp = '/';
  } else {
    return;
  }
  createAndWriteOutput(mathOp, initialResult, enteredNumber);
  writeToLog(calcType, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculateResult.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculateResult.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculateResult.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculateResult.bind(this, 'DIVIDE'));
