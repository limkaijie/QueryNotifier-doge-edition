var map = {}; // You could also use an array
var isDone = false;
var failedQuery = false;

onkeydown = onkeyup = function(e) {
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keyup';

    if (map[17] && map[13]){ // CTRL + ENTER
        if (failedQuery == false) {run();}
        else {console.log('[INFO] Previous query failed!');}
        map = {};
    }
}

function run(){
    // Check every 1000 millisecond
    isDone = window.setInterval(checkIfTabPaneActive, 1000);
}

function checkIfTabPaneActive() {
    try {
        var result = document.getElementById('queryResults').className;
        console.log('[INFO] Listening...')
        // If result is displayed
        if (result == 'tab-pane active') {
            // Send notification
            chrome.runtime.sendMessage('trigger');
            console.log('[INFO] Successfully notified!');
            // Update query status
            failedQuery = false;
            // Clear notification
            window.clearInterval(isDone);
        }else {
            failedQuery = true;
        }
    }
    catch(TypeError) {
        window.clearInterval(isDone);
    }
}
