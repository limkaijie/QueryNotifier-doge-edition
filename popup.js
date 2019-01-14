var map = {}; // You could also use an array
var isDone = false;

onkeydown = onkeyup = function(e) {
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keyup';
    /* insert conditional here */
    if (map[17] && map[13]) { // CTRL+SHIFT+A
        run();
        map = {};
    }
}

function run(){
    isDone = window.setInterval(checkIfTabPaneActive, 1000);
}

function checkIfTabPaneActive(){
    var result = document.getElementById('queryResults').className;
    if (result == 'tab-pane active'){
        chrome.runtime.sendMessage('trigger');
        window.clearTimeout(isDone);
    }
}
