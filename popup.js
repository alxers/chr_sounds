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
            chrome.extension.getBackgroundPage().clickedEls[message] = el;
        }
    });

    window.addEventListener('load', function (e) {
        var clickedEls = chrome.extension.getBackgroundPage().clickedEls;

        // replace existing elements to ones from background
        for (var key in clickedEls) {
            if (clickedEls.hasOwnProperty(key)) {
                var iconEl = document.querySelector('[data-message=' + key + ']');
                iconEl.parentElement.replaceChild(clickedEls[key], iconEl);
            }
        }
    });

})()
