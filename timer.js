var clear = false

function clock() {
    myTimer = setInterval(myClock, 1000);
    var c = 1800; //Initially set to 30 mins


    function myClock() {
        --c
        var seconds = c % 60; // Seconds that cannot be written in minutes
        var secondsInMinutes = (c - seconds) / 60; // Gives the seconds that COULD be given in minutes
        var minutes = secondsInMinutes % 60; // Minutes that cannot be written in hours
        var hours = (secondsInMinutes - minutes) / 60;
        // Now in hours, minutes and seconds, you have the time you need.
        document.getElementById("countdown").innerHTML = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
        if (c == 0 || clear) {
            clearInterval(myTimer);
        }
    }
}

clock()