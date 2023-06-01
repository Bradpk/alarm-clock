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
    
    document.getElementById('hours').textContent = hours
    document.getElementById('minutes').textContent = minutes
    document.getElementById('seconds').textContent = seconds
    }
    
    document.getElementById('date').textContent = now
    
    