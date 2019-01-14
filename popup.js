var map = {}; // You could also use an array
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keyup';
    /* insert conditional here */
    if(map[17] && map[13]) { // CTRL+SHIFT+A
        alert('Control Enter');
        console.log('register')
        map = {};
    }
}
