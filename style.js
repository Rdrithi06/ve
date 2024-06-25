let displayValue = '0';

// Function to update the display
function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

// Function to clear the display
function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

// Function to append characters to the display
function appendToDisplay(char) {
  if (displayValue === '0' && char !== '.') {
    displayValue = char;
  } else {
    displayValue += char;
  }
  updateDisplay();
}

// Function to calculate the result
function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}
