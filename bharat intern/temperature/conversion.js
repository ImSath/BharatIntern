function convertToFar() {
    const celsiusInput = document.getElementById("celsius-input");
    const resultElement = document.getElementById("result");

    if (celsiusInput.value === "") {
        alert("Please enter a value in Celsius.");
        return;
    }

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;

    resultElement.textContent = fahrenheit.toFixed(2);
}
