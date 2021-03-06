const keys = document.querySelectorAll('.keys');
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
    key.classList.add('active');
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}
