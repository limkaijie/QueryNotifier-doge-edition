var options = {
  type: "basic",
  title: "Oi!",
  message: "Your query has completed!",
  iconUrl: "images/icon.png"
};


function callback(){

}

chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
    if (response == 'trigger')
        chrome.notifications.create(options, callback);
});
