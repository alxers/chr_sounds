function createBtn () {
    var elements = [
        'rain',
        'waves',
        'fire',
        'forest'
    ]
    for (var i = 0, elLength = elements.length; i < elLength; i += 1) {
        (function (i) {
            var btn = document.getElementById(elements[i]);
            btn.addEventListener('click', function () {
                chrome.runtime.sendMessage({ action: elements[i] })
            });
        })(i)
    }
}

createBtn()
