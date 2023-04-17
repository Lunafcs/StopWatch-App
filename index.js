const time_el = document.querySelector(".watch .time");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;


//Events Listeners

start_btn.addEventListener("click", start)
stop_btn.addEventListener("click", stop)
reset_btn.addEventListener("click", reset)


// Update Timer
function timer() {
    seconds++

    //format our timer
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;


    if (secs < 10) secs = "0" + secs;
    if (hrs < 10) hrs = "0" + hrs;
    if (mins < 10) mins = "0" + mins;

    time_el.innerHTML = `${hrs}:${mins}:${secs}`
}

function start() {
    if (interval) {
        return interval
    }

    interval = setInterval(timer, 100)
}


function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    time_el.innerHTML = "00:00:00"

}