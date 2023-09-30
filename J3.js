function calculateMultiplication() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 * num2;
        document.getElementById('result').innerText = `Multiplication result: ${result}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    }
}

function calculateDivision() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
        const result = num1 / num2;
        document.getElementById('result').innerText = `Division result: ${result}`;
    } else if (num2 === 0) {
        document.getElementById('result').innerText = 'Cannot divide by zero.';
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    }
}
