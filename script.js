let countdown; // store setInterval

// Date.now() returns the number of milliseconds elapsed 
// since January 1, 1970 00:00:00 UTC
function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000; // when the time stops
    displayTimeLeft(seconds);
    
    // repeatedly calls a function or executes a code snippet, 
    // with a fixed time delay between each call
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    console.log(seconds);
}