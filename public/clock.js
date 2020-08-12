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
    //set hours 
    if (hours >= noon) {
        meridian = "PM"
    }
    if (hours > noon)
	  {
		  hours = hours - 12;
      }
    //set minute
    if (minutes < 10 ) {
        minutes = "0" + minutes
    }  
    // set secound 
    if (secound < 10 ) {
        secound = "0" + secound
    }
    //display time 
    const clockTime = hours + ":" + minutes + ":" + secound + " " + meridian + "!";
    clock.innerText = clockTime;
   
    
}
 








