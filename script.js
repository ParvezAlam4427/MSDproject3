function generateRandomDigit() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    const resultElement = document.getElementById('result');

    // Validate that inputs are numbers
    if (isNaN(minValue) || isNaN(maxValue)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    // Ensure minValue is not greater than maxValue
    if (minValue > maxValue) {
        resultElement.textContent = "Minimum value cannot be greater than Maximum value.";
        return;
    }

    // Generate random digit
    const randomDigit = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    resultElement.textContent = `Generated Random Digit: ${randomDigit}`;
}
