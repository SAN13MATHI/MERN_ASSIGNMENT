console.log('Reverse num')

function reverseNumber() {
    // Get user input
    const num = prompt('Enter a number:');
    
    // Check if the input is a valid number
    if (isNaN(num)) {
        alert('Invalid input. Please enter a valid number.');
        return;
    }
    
    // Convert the number to a string and split it into an array of characters
    const numArray = num.toString().split('');
    
    // Reverse the array and join it back into a string
    const reversedNumString = numArray.reverse().join('');
    
    // Convert the reversed string back to a number
    const reversedNum = parseInt(reversedNumString);
    
    alert('Reversed number: ' + reversedNum);
}

// Call the function to reverse a number based on user input
reverseNumber();
