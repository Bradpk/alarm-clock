const currentClockTime = document.getElementById('clockTime');
const currentDateTime = document.getElementById('dateTime')
const setAlarm = document.getElementById('alarmInput');
const liveButton = document.getElementById('buttonTrigger');
const magicbutton = document.getElementById("magicButton");

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
