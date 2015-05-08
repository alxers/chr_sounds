chrome.runtime.onMessage.addListener(
    function (req, sender, res) {
        console.dir(arguments);
        if (req.action == 'play') {
            var rain = new Audio('rain.wav');
            rain.play();
        }
    }
);
