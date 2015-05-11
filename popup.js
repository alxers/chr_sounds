var btnPlay = document.getElementById('rain');

btnPlay.addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: 'rain' });
});
