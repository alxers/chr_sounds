var RAIN = createAudio('rain.wav');

function createAudio (fileName) {
    return new Audio(fileName);
}

function playOrPause (audio) {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

chrome.runtime.onMessage.addListener(
    function (req, sender, res) {
        if (req.action == 'rain') {
            playOrPause(RAIN);
        }
    }
);


