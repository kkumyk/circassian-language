function playAudio(audioPath) {
    var playAudio = document.getElementById('playAudio');
    playAudio.src = audioPath;
    playAudio.play();
}