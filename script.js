
// Select the input element (display) from the HTML document
const display = document.getElementById("display");

// Function to append a value (number or operator) to the display
function appendToDisplay(input) {
  // Adds the input (e.g., number or operator) to the current value of the display
  display.value += input;
}

// Function to clear the display
function clearDisplay() {
  // Resets the display to an empty string
  display.value = "";
}

// Function to evaluate the math expression entered in the display
function calculate() {
  try {
    // The eval() function evaluates the string as a mathematical expression
    display.value = eval(display.value);
  } catch (error) {
    // If the eval() function encounters an error (e.g., invalid input), display "Error"
    display.value = "Error";
  }
}
