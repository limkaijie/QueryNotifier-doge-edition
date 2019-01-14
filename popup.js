var map = {}; // You could also use an array
var isDone = false;

onkeydown = onkeyup = function(e) {
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keyup';
    /* insert conditional here */
    if (map[17] && map[13]) { // CTRL+SHIFT+A
        console.log('Ctrl + Enter pressed');
        mockRun();
        map = {};
    }
}

function mockRun(){
    setInterval(console.log('hi'), 5000)
}

function run(){
    isDone = false;
    console.log('running');
    //while(!isDone){
        setInterval(checkIfTabPaneActive(), 1000);
        console.log('while loop');
    //}
}

function checkIfTabPaneActive(){
    var result = document.getElementById('queryResults').className;
    console.log(result);
    if (result == 'tab-pane active'){
        chrome.runtime.sendMessage('trigger');
        console.log('found tab pane active')
        isDone = true;
    }
}

// window.onload = function(){
//     console.log('page load !');
// }
