const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause');
const volumeSlider = document.getElementById('volume-slider');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const timeDisplay = document.getElementById('time');
const fullscreenBtn = document.getElementById('fullscreen');

playPauseBtn.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause); // Click video to play/pause

function togglePlayPause() {
    if (video.paused || video.ended) {
        video.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        video.pause();
        playPauseBtn.textContent = '▶️';
    }
}

video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progress.style.width = `${percentage}%`;
    updateTimeDisplay();
});

function updateTimeDisplay() {
    const currentMinutes = Math.floor(video.currentTime / 60);
    const currentSeconds = Math.floor(video.currentTime % 60).toString().padStart(2, '0');
    const durationMinutes = Math.floor(video.duration / 60);
    const durationSeconds = Math.floor(video.duration % 60).toString().padStart(2, '0');
    timeDisplay.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
}

volumeSlider.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

fullscreenBtn.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
});
