function sortStringAlphabetically(inputString) {
    // Convert the string to an array of characters, sort it, and join it back into a string
    const sortedString = inputString.split('').sort().join('');
    
    return sortedString;
}

// Get user input
const userInput = prompt('Enter a string:');

// Call the function to sort the string alphabetically and display the result
const sortedString = sortStringAlphabetically(userInput);
alert('Sorted string: ' + sortedString);
