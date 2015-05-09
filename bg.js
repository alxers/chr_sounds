chrome.runtime.onMessage.addListener(
    function (req, sender, res) {
        console.dir(arguments);
        var rain = new Audio('rain.wav');
        if (req.action == 'play') {
            rain.play();
        } else if (req.action == 'pause') {
            rain.pause();
        }
    }
);
