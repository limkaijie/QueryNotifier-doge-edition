var options = {
  type: "basic",
  title: "wow",
  message: "such amaze. your query has completed!",
  iconUrl: "images/icon.png"
};

function callBack(){

}

chrome.runtime.onMessage.addListener(
    function(response, sender, sendResponse){
        if (response == 'trigger')
            chrome.notifications.create(options, callBack);
    }
);
