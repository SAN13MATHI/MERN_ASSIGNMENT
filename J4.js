function showCurrentDate() {
    const now = new Date();

    // Format the date (e.g., "Monday, September 27, 2023")
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);

    // Display the formatted date
    document.getElementById('display').innerText = `Current Date: ${formattedDate}`;
}

function showCurrentTime() {
    const now = new Date();

    // Format the time (e.g., "12:34:56 PM")
    const formattedTime = now.toLocaleTimeString();

    // Display the formatted time
    document.getElementById('display').innerText = `Current Time: ${formattedTime}`;
}
