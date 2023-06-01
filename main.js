// Testing the Javascript file was connected to HTML
function changeText () {
    const tryit = document.getElementById("test");
    tryit.textContent = "Alarm Clock Project";
    } 
    changeText()
    
    function currentTime(){
    const now = new Date ();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const day = now.getDay();
    const month = now.getMonth();
    const year = now.getFullYear();
    
    document.getElementById('hours').textContent = hours
    document.getElementById('minutes').textContent = minutes
    document.getElementById('seconds').textContent = seconds
        
    document.getElementById('day').textContent = day
    document.getElementById('month').textContent = month
    document.getElementById('year').textContent = year
    }
    setInterval(currentTime, 1000);
    
    