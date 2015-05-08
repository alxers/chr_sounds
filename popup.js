var btn = document.getElementById('play');

btn.addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: 'play' });
});
