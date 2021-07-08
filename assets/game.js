
function togglePlay() {
    $("#sound i").toggleClass("fa-volume-up fa-volume-mute");
    let audio = document.getElementById("main-menu-music");
    return audio.paused ? audio.play() : audio.pause();
}