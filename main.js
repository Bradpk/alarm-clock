// Testing the Javascript file is connected to HTML
function changeText() {
    const tryit = document.getElementById("test");
    tryit.textContent = "Alarm Clock";
}
changeText()
//---------------------------------------------------------------

const currentClockTime = document.getElementById('clockTime');
const currentDateTime = document.getElementById('dateTime')
const setAlarm = document.getElementById('alarmInput')
const liveButton = document.getElementById('buttonTrigger')

//----------------------------------------------------------------

function currentTime() {
    const time = new Date();

    const clockTimeText = time.toLocaleTimeString()
    currentClockTime.innerText = clockTimeText;

    const dateText = time.toDateString()
    currentDateTime.innerText = dateText;
}

//----------------------------------------------------------------

function alarmTracker() {
    const time = new Date();
    const alarmTrack = new Date(time.toDateString() + ' ' + setAlarm.value);

    if (time >= alarmTrack) {
        alert('Wake up!')
    }
}

//----------------------------------------------------------------

liveButton.addEventListener('click', function () {
    liveButton.disabled = true
    setInterval(alarmTracker, 1000)
})

//----------------------------------------------------------------
setInterval(currentTime, 1000);


