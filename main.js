// Testing the Javascript file was connected to HTML
function changeText () {
    const tryit = document.getElementById("test");
    tryit.textContent = "Alarm Clock";
    } 
    changeText()


    const currentClockTime = document.getElementById('clockTime');
    
    function currentTime(){
    const now = new Date ();
    const clockTimeText = now.toLocaleTimeString()
    currentClockTime.innerText = clockTimeText;

    const day = now.getDay();
    const month = now.getMonth();
    const year = now.getFullYear();
        
    document.getElementById('day').textContent = day
    document.getElementById('month').textContent = month
    document.getElementById('year').textContent = year

    }
    setInterval(currentTime, 1000);
    
    