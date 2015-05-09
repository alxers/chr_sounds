var btnPlay = document.getElementById('play');
var btnPause = document.getElementById('pause');

btnPlay.addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: 'play' });
});

btnPause.addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: 'pause' });
});
