var tabId = 0;

var options = {
  type: "basic",
  title: "wow",
  message: "such amaze. your query has completed!",
  iconUrl: "images/icon.png"
};

function callBack() {

}

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
    if (response == 'trigger'){
        tabId = sender.tab.id;
        chrome.notifications.create(options, callBack);
    }
});

chrome.notifications.onClicked.addListener(function(notificationId) {
    chrome.tabs.update(tabId, {active:true});
    chrome.notifications.clear(notificationId, callBack);
});
