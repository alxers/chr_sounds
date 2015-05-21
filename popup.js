;(function () {

    var btns = document.getElementById('btns');

    function toggleHighlight (el) {
        // css class that applies highlighting
        var cls = 'is-active';
        var hasClass = el.className === cls;

        if (hasClass) {
            el.className = '';
        } else {
            el.className = cls;
        }
    }

    btns.addEventListener('click', function (e) {
        var el = e.target;
        var message = e.target.dataset.message;

        if (message) {
            chrome.runtime.sendMessage({ action: message });
            toggleHighlight(el);
            // get element from background
            chrome.extension.getBackgroundPage().clickedEl = el;
        }
    });

    window.addEventListener('load', function (e) {
        var clickedEl = chrome.extension.getBackgroundPage().clickedEl;
        if (clickedEl) {
            var iconEl = document.querySelector('[data-message=' + clickedEl.dataset.message + ']');
            var parentEl = iconEl.parentElement;
            parentEl.replaceChild(document.importNode(clickedEl,true), iconEl);
        }
    });
    
})()
