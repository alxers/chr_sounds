var audioEl = document.createElement('audio');

audioEl.setAttribute('preload', 'auto');
audioEl.autobuffer = true;

var source = document.createElement('source');
source.type = 'audio/mpeg';
source.src = '/';
audioEl.appendChild(source);

chrome.extension.onMessage.addListener(
        function (req, sender, res) {
            if (req.action == 'play') {
                audioEl.load;
                audioEl.play();
            }
        }
);
