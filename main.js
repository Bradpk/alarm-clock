// Testing the Javascript file is connected to HTML
function changeText() {
    const tryit = document.getElementById("test");
    tryit.textContent = "Alarm Clock";
}
changeText()
//---------------------------------------------------------------

const currentClockTime = document.getElementById('clockTime');
const setAlarm = document.getElementById('alarmInput')
const liveButton = document.getElementById('buttonTrigger')

//----------------------------------------------------------------

function currentTime() {
    const time = new Date();
    const clockTimeText = time.toLocaleTimeString()
    currentClockTime.innerText = clockTimeText;

    const day = time.getDay();
    const month = time.getMonth();
    const year = time.getFullYear();

    document.getElementById('day').textContent = day
    document.getElementById('month').textContent = month
    document.getElementById('year').textContent = year
}

//----------------------------------------------------------------


    setInterval(currentTime, 1000);


