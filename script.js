function onLoad() {
    let seconds = 0;
    let tens = 0;
    let interval;
    const appendTens = document.getElementById('tens');
    const appendSeconds = document.getElementById('seconds')
    const buttonStart = document.getElementById('button-start');
    const buttonStop = document.getElementById('button-stop');
    const buttonReset = document.getElementById('button-reset');

    function startTimer() {
        tens = tens + 1;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds = seconds + 1;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = '00';
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    }

    buttonStart.addEventListener('click', function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    })

    buttonStop.addEventListener('click', function () {
        clearInterval(interval);
    });

    buttonReset.addEventListener('click', function () {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        appendTens.innerHTML = '00';
        appendSeconds.innerHTML = '00';
    });
}


window.addEventListener('load', onLoad)
