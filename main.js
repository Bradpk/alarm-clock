/* These are the variable declarations and which HTML elements they are tied to:
currentClockTime is tied to the second h2 tag
currentDateTime is tied to the first h2 tag
setAlarm is tied to the input tag
liveButton is tied to the first button tag
magicButton is tied to the second button tag
*/

const currentDateTime = document.getElementById('dateTime')
const currentClockTime = document.getElementById('clockTime');
const setAlarm = document.getElementById('alarmInput');
const liveButton = document.getElementById('buttonTrigger');
const magicbutton = document.getElementById("magicButton");

/*
updateCurrentTime is the function name. 
now is equal to the date object which is the current date and time. 
timeText is the date object put into a reading string format. 
line 26 & 27 will make the text inside the second h2 tag a string of the current time 
line 29 & 30 will make the text inside the first h2 tag a string of the current date
*/

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

//----------------------------------------------------------------

magicbutton.addEventListener("click", async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease("C4", "16n", now)
    synth.triggerAttackRelease("Eb4", "16n", now + 0.3)
    synth.triggerAttackRelease("G4", "16n", now + 0.6)
    synth.triggerAttackRelease("G#4", "16n", now + 0.9)
    synth.triggerAttackRelease("C5", "16n", now + 1.2)
    synth.triggerAttackRelease("G#4", "16n", now + 2.1)
    synth.triggerAttackRelease("G4", "16n", now + 2.4)
    synth.triggerAttackRelease("G#4", "16n", now + 3.3)
    synth.triggerAttackRelease("G4", "16n", now + 3.6)
    synth.triggerAttackRelease("G#4", "16n", now + 3.7)
    synth.triggerAttackRelease("G4", "16n", now + 3.8)
    synth.triggerAttackRelease("F4", "16n", now + 3.9)
    synth.triggerAttackRelease("G4", "16n", now + 4.2)
    synth.triggerAttackRelease("B3", "16n", now + 4.5)
    synth.triggerAttackRelease("C4", "16n", now + 4.8)
})
