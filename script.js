window.onload = function countdown() {

    var now = new Date();
    var eventDate = new Date(2019, 4, 16);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remainingTime = eventTime - currentTime;

    var s = Math.floor(remainingTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    console.log(d);
    console.log(h);
    console.log(m);
    console.log(s);

    document.getElementById('days').innerHTML = d;
    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;

    setTimeout(countdown, 1000);

}