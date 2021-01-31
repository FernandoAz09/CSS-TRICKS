function clock() {
    var hours = document.getElementById('hour')
    var minutes = document.getElementById('minutes')
    var seconds = document.getElementById('seconds')
    var ampm = document.getElementById('ampm')

    var h = new Date().getUTCHours()
    var m = new Date().getUTCMinutes()
    var s = new Date().getUTCSeconds()
    var am = "AM"

    if(h > 12) { //TROCAR DE AM pra PM
        var am = "PM"
    }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
    ampm.innerHTML = am
}

var interval = setInterval(clock, 1000)