$(document).ready(function () {

    // 调整音量
    var audio = document.getElementById("bg-player");
    audio.addEventListener('canplaythrough', function () {
        this.volume = 0.05;
    }, false);
    var audioInterval = setInterval(function () {
        var volume = audio.volume;
        if (!volume) {
            return;
        }

        if (volume >= 0.5) {
            return;
        }

        if (volume) {
            audio.volume += 0.05;
        }
    }, 1000);
});