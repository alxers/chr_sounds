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

    function playSounds (msg) {
        if (msg === 'rain') {
            playOrPause(RAIN);
        }

        if (msg === 'waves') {
            playOrPause(WAVES);
        }

        if (msg === 'fire') {
            playOrPause(FIRE);
        }

        if (msg === 'forest') {
            playOrPause(FOREST);
        } 
    }

    chrome.runtime.onMessage.addListener(
        function (req, sender, res) {
            var msg = req.action;
            playSounds(msg);
        }
    );
    
})()
