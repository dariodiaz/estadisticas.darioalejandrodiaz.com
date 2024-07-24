function createInputs() {
    const numCount = parseInt(document.getElementById('numCount').value);
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = '';
    
    for (let i = 0; i < numCount; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Number ${i + 1}`;
        input.className = 'numberInput';
        inputContainer.appendChild(input);
        inputContainer.appendChild(document.createElement('br'));
    }
    
    document.getElementById('calculateBtn').style.display = 'block';
    document.getElementById('initialInput').style.display = 'none';
    // Hide the result when creating new inputs
    document.getElementById('result').textContent = '';
    document.getElementById('result').classList.remove('animate-result');
}

function calculateAverage() {
    const inputs = document.getElementsByClassName('numberInput');
    let sum = 0;
    let count = 0;
    
    for (let input of inputs) {
        if (input.value !== '') {
            sum += parseFloat(input.value);
            count++;
        }
    }
    
    const average = count > 0 ? sum / count : 0;
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The average is: ${average.toFixed(2)}`;
    
    // Trigger the animation
    resultElement.classList.remove('animate-result');
    void resultElement.offsetWidth; // Trigger a reflow
    resultElement.classList.add('animate-result');

    // Show the Start Over button
    document.getElementById('startOverBtn').style.display = 'block';
}

function startOver() {
    // Reset the number input
    document.getElementById('numCount').value = '';

    // Clear the input container
    document.getElementById('inputContainer').innerHTML = '';

    // Hide the Calculate and Start Over buttons
    document.getElementById('calculateBtn').style.display = 'none';
    document.getElementById('startOverBtn').style.display = 'none';

    // Show the initial input
    document.getElementById('initialInput').style.display = 'block';

    // Clear the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';
    resultElement.classList.remove('animate-result');
}
