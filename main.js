const currentClockTime = document.getElementById('clockTime');
const currentDateTime = document.getElementById('dateTime')
const setAlarm = document.getElementById('alarmInput');
const liveButton = document.getElementById('buttonTrigger');

//----------------------------------------------------------------

function updateCurrentTime() {
    const now = new Date();

    const timeText = now.toLocaleTimeString();
    currentClockTime.innerText = timeText;

    const dateText = now.toDateString()
    currentDateTime.innerText = dateText;
}

//----------------------------------------------------------------

function checkAlarm() {
    const now = new Date();
    const alarmTrack = new Date(now.toDateString() + ' ' + setAlarm.value);

    if (now >= alarmTrack) {
        alert('Alarm!');
    }
}

//----------------------------------------------------------------

liveButton.addEventListener('click', function () {
    liveButton.disabled = true;

    setInterval(checkAlarm, 1000);
});

//----------------------------------------------------------------

setInterval(updateCurrentTime, 1000);
