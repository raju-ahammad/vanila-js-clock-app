let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;

//getting it to show the current time in the page
const showCurrentTime = () => {
    const clock = document.getElementById("clock");
    const currentTime = newDate();
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const secound = currentTime.getSeconds()
    const meridian = "AM"
}