var play = document.getElementById('play');
play.addEventListener('click', function() {
    chrome.extension.sendMessage({ action: 'play' })
});
