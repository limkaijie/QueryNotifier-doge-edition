var map = {}; // You could also use an array
var isDone = false;

onkeydown = onkeyup = function(e) {
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keyup';

    if (map[17] && map[13]) { // CTRL + ENTER
        run();
        map = {};
    }
}

function run(){
    // Check every 1000 millisecond
    isDone = window.setInterval(checkIfTabPaneActive, 1000);
}

function checkIfTabPaneActive(){

    try{
        var result = document.getElementById('queryResults').className;
        console.log('trying');
    }
    catch(TypeError){
        window.clearTimeout(isDone);
        console.log('catching');
    }

    if (result == 'tab-pane active'){
        chrome.runtime.sendMessage('trigger');
        window.clearTimeout(isDone);
        console.log('done');
    }
}
