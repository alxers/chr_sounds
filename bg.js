;(function () {

    var RAIN = createAudio('rain.wav');
    var WAVES= createAudio('waves.wav');
    var FIRE= createAudio('fire.wav');
    var FOREST = createAudio('forest.wav');

    function createAudio (fileName) {
        return new Audio(fileName);
    }

    function enableLoop (audio) {
        audio.loop = true;
    }

    function playOrPause (audio) {
        if (audio.paused) {
            enableLoop(audio);
            audio.play();
        } else {
            audio.pause();
        }
    }

    function playSounds (req) {
        if (req.action == 'rain') {
            playOrPause(RAIN);
        }

        if (req.action == 'waves') {
            playOrPause(WAVES);
        }

        if (req.action == 'fire') {
            playOrPause(FIRE);
        }

        if (req.action == 'forest') {
            playOrPause(FOREST);
        } 
    }

    // chrome.extension.getViews({ type: 'popup' }, function () {

    // });

    chrome.runtime.onMessage.addListener(
        function (req, sender, res) {
            playSounds(req);
        }
    );
})()
