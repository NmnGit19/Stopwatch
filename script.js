function counter() {
    var millisec = 0;
    var sec = 0;
    var min = 0;
    var hour = 0;
    setInterval(function () {
        if (millisec == 100) {
            sec++;
            if (sec == 60) {
                min++;
                if (min == 60) {
                    hour++;
                    min = 0;
                }
                sec = 0;
            }
            millisec = 0;
        }
        else {
            document.getElementById("hour").innerHTML = ("0" + hour);
            document.getElementById("min").innerHTML = ("0" + min);
            document.getElementById("sec").innerHTML = (sec);
            document.getElementById("millisec").innerHTML = (millisec++);
        }
    }, 10);
}
counter();

