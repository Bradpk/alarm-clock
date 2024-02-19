/* 
these are the variable declarations and which HTML elements they are tied to:
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
line 26 & 27 will make the text inside the second h2 tag a string of the current time.
line 29 & 30 will make the text inside the first h2 tag a string of the current date.
*/

function updateCurrentTime() {
    const now = new Date();

    const timeText = now.toLocaleTimeString();
    currentClockTime.innerText = timeText;

    const dateText = now.toDateString()
    currentDateTime.innerText = dateText;
}

/*
checkAlarm is the function name.
now is equal to the date object which is the current date and time. 
alarmTrack is the date object and it tracks the current time in relation to the time the user inputs in the input box. 
the if statement is saying that if the current time is greater or equal then alarmTrack time then an alert will happen.
*/

function checkAlarm() {
    const now = new Date();
    const alarmTrack = new Date(now.toDateString() + ' ' + setAlarm.value);
    if (now >= alarmTrack) {
        Tone.start();
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        synth.triggerAttackRelease("B5", "32n", now)
        synth.triggerAttackRelease("B5", "32n", now + 0.1)
        synth.triggerAttackRelease("F#6", "32n", now + 0.2)
        synth.triggerAttackRelease("B6", "32n", now + 0.3)
        synth.triggerAttackRelease("B5", "32n", now + 0.6)
        synth.triggerAttackRelease("B5", "32n", now + 0.7)
        synth.triggerAttackRelease("F#6", "32n", now + 0.8)
        synth.triggerAttackRelease("B6", "32n", now + 0.9)
        synth.triggerAttackRelease("B5", "32n", now + 1.2)
        synth.triggerAttackRelease("B5", "32n", now + 1.3)
        synth.triggerAttackRelease("F#6", "32n", now + 1.4)
        synth.triggerAttackRelease("B6", "32n", now + 1.5)
        synth.triggerAttackRelease("B5", "32n", now + 1.8)
        synth.triggerAttackRelease("B5", "32n", now + 1.9)
        synth.triggerAttackRelease("F#6", "32n", now + 2.0)
        synth.triggerAttackRelease("B6", "32n", now + 2.1)
        setTimeout(() => {
            alert('Wake Up!');
        }, 3000);
        clearInterval(alarmInterval);
        liveButton.disabled = false;
    }
}

/*
this allows the functions to be triggered when the button is clicked.
once the button is clicked it disables so that it can't be clicked again.
the set interval below is tracking the checkAlarm function in increments of one second.
*/

let alarmInterval;
liveButton.addEventListener('click', function () {
    liveButton.disabled = true;
    alarmInterval = setInterval(checkAlarm, 1000);
});

/*
the set interval below is tracking the updateCurrentTime function in increments of one second.
*/

setInterval(updateCurrentTime, 1000);

/*
the magicbutton event listener waits for the button to be pressed before triggering the function
the await tone start makes the audio ready for playback as webpages will not automatically start audio 
synth new tone grabs the synthisizer from tone.js 
the synth has three parameters. 
the first is the musical note that gets triggered. 
the second is the duration of the note.
the third is when the note is played.
*/

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
