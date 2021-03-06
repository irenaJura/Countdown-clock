let countdown; // store setInterval
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

// Date.now() returns the number of milliseconds elapsed 
// since January 1, 1970 00:00:00 UTC
function timer(seconds) {
    // clear existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000; // when the time stops
    displayTimeLeft(seconds);
    displayEndTime(then);

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
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display; // show in tab title
    // console.log(minutes, remainderSeconds);
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp); // pass in the number of milliseconds since UNIX epoch
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    // console.log(this.dataset.time); string with number of seconds
    const seconds = parseInt(this.dataset.time); // parseInt turn into a number
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) { // select by form name attribute
    e.preventDefault();
    const mins = this.mins.value; // input name attribute value
    console.log(mins);
    timer(mins * 60); 
    this.reset();
});
