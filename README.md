### Countdown timer with pre-set times and custom input

In our JS file we first have our main function called timer that takes a number of seconds as parameter, and it updates that time every second. We define a variable now, equal to date object with now method. Next we calculate the variable then, equal to now plus the parameter in seconds, multiplied by 1000 (to convert it from seconds to milliseconds). 

The countdown variable is then set to an interval that runs every 1000 milliseconds (1 second). Inside our interval, our function will calculate how many seconds are left. If seconds are less than zero we clear the interval and stop the function.

Our displayTimeLeft function takes is seconds parameter converts it to minutes and seconds, and displays the result in an H1 element. This function will be prompted once when we first run timer function, and for the second time in the countdown interval.

Function displayEndTime displays at what time will the countdown finish. It takes a timestamp as a parameter and creates a new Date object from the timestamp, assigned to a variable named end. Next, we call getHours and getMinutes methods on end. 

Then we add the functionality to our buttons with event listeners that invoke a startTimer function. We get the data-time, convert it into a number and pass the variable as an argument to timer function.

And for our input, we attach a submit event listener and get the input value which we also pass into timer function as an argument.