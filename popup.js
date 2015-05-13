;(function () {

    var btns = document.getElementById('btns');

    btns.addEventListener('click', function (e) {
        var message = e.target.dataset.message;
        if (message) {
            chrome.runtime.sendMessage({ action: message })
        }
    })

})()

