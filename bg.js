function injectedMethod (tab, method, callback) {
    chrome.tabs.executeScript(tab.id, { file: 'popup.js' }, function(){
        chrome.tabs.sendMessage(tab.id, { method: method }, callback);
    });
}

function play (tab) {
    injectedMethod(tab, 'play', function (response) {
        return true;
    });
}

chrome.browserAction.onClicked.addListener(play);

