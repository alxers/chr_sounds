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

var rain = createAudio('rain.wav');

chrome.runtime.onMessage.addListener(
    function (req, sender, res) {
        if (req.action == 'play') {
            playOrPause(rain);
        }
    }
);


