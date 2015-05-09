var btnPlay = document.getElementById('play');

btnPlay.addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: 'play' });
});
