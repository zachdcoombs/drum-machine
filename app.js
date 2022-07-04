// listen for keystrokes, play sound when user presses corresponding key
// invokes audio id setup in index.html

document.addEventListener('keydown', function(e){
    if (e.keyCode == 65) {
        document.getElementById('clap').play();
    } else if(e.keyCode == 83) {
        document.getElementById('closedhat').play();
    } else if(e.keyCode == 68) {
        document.getElementById('crash').play();
    } else if(e.keyCode == 74) {
        document.getElementById('kick').play();
    } else if(e.keyCode == 75) {
        document.getElementById('openhat').play();
    } else if(e.keyCode == 76) {
        document.getElementById('snare').play();
    }
});