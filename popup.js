function play_sound() {
    var btn = document.getElementById('play');
    var rain = new Audio('rain.wav');
    btn.addEventListener('click', function() {
        rain.play();
    });
}

play_sound();
// TODO: Currently it stops playing if popup window is closed
