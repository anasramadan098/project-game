/**
 * Steps
 * [1] Show Video Intro (true)
 * [2] Log In Page
 * [3] Sign Up Proccess
 * [4] Start The Game 
 */


document.addEventListener('DOMContentLoaded' , () => {

    // showVideoIntro();
    initFullscreenToggle();
})


document.onload = function () {
    showVideoIntro();
}

const bgMusicVolume = 0.4;






const introDiv = document.querySelector('.intro');

const logo = introDiv.querySelector('img.logo');
const bgmusic = document.querySelector('audio#bgMusic');
bgmusic.volume = bgMusicVolume;


document.querySelector('#startGame').addEventListener('click' , () => {
    endIntro();

    goFullscreen();
    bgmusic.play();

});


function showVideoIntro() {

    hideAllElementsExcept('.intro.loading');

    introDiv.style.cssText = 'display: flex;';
    
    // endIntro();

}


function endIntro() {

    introDiv.style.opacity = '0';
    showAllElementsExcept('#rotate-warning');
    // setTimeout(() => {
    // }, 3000);
    
    setTimeout(() => {
        introDiv.style.display = 'none';
    }, 4000);

}

// Fullscreen toggle initialization and handlers
function initFullscreenToggle(){
    const btn = document.querySelector('.fullscreen-toggle');
    if(!btn) return;

    function isFullscreen(){
        return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
    }

    function updateIcon(){
        const icon = btn.querySelector('i');
        if(!icon) return;
        if(isFullscreen()){
            icon.classList.remove('fa-expand');
            icon.classList.add('fa-compress');
        } else {
            icon.classList.remove('fa-compress');
            icon.classList.add('fa-expand');
        }
    }

    btn.addEventListener('click', async () => {
        try{
            if(isFullscreen()){
                if(document.exitFullscreen) await document.exitFullscreen();
                else if(document.webkitExitFullscreen) await document.webkitExitFullscreen();
            } else {
                const el = document.documentElement;
                if(el.requestFullscreen) await el.requestFullscreen();
                else if(el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
            }
        }catch(err){
            console.warn('Fullscreen toggle failed:', err);
        }
    });

    ['fullscreenchange','webkitfullscreenchange','mozfullscreenchange','MSFullscreenChange'].forEach(ev => document.addEventListener(ev, updateIcon));
    updateIcon();
}


function hideAllElementsExcept(element = null) {

    document.querySelectorAll('body > div').forEach(el => {

        getComputedStyle(el).display == 'none' ? true :  el.setAttribute('data-display', getComputedStyle(el).display);

        el.style.display = 'none';
    });


    if (element) 
    {
        document.querySelectorAll(element).forEach(el => el.style.dispaly = 'block');
    }

}


function showAllElementsExcept(element = null) {

    document.querySelectorAll('body > div').forEach(el => el.style.display = el.dataset.display);


    if (element) 
    {
        document.querySelectorAll(element).forEach(el => el.style.dispaly = 'none');
    }
}