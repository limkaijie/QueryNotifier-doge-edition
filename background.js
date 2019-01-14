var options = {
  type: "basic",
  title: "Oi!",
  message: "Your query has completed!",
  iconUrl: "icon.png"
};

chrome.notifications.create(options, callback);

function callback(){

}
