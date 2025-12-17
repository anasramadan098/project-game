// Toogle Video
if (user.gender == 'female') 
{
    document.querySelector('.gameBg').src = 'videos/girl_bg.mp4';
} else {
    document.querySelector('.gameBg').src = 'videos/boy_bg.mp4';
}

// Show Levels Task

















function toogleMute() {
    const soundIcon = document.querySelector('.sound-icon i');
    if (soundIcon.classList.contains('fa-volume-high')) {
        soundIcon.classList.remove('fa-volume-high');
        soundIcon.classList.add('fa-volume-xmark');
        document.querySelector('#bgMusic').muted = true;
        // document.querySelector('#bgMusic').pause();
    } else {
        soundIcon.classList.remove('fa-volume-xmark');
        soundIcon.classList.add('fa-volume-high');
        document.querySelector('#bgMusic').muted = false;
        // document.querySelector('#bgMusic').play();
}
}



