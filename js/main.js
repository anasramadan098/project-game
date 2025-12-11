/**
 * Steps
 * [1] Show Video Intro (true)
 * [2] Log In Page
 * [3] Sign Up Proccess
 * [4] Start The Game 
 */


document.addEventListener('DOMContentLoaded' , () => {

    showVideoIntro()
    initFullscreenToggle();
})




const introDiv = document.querySelector('.intro');

const logo = introDiv.querySelector('img.logo');



function showVideoIntro() {
    introDiv.style.cssText = 'display: flex; opacity:1; animation-name: fade-in; transition: opacity 1s ease;';
    logo.style.cssText = 'animation-name: fade-in ';
    
    endIntro();

}


function endIntro() {

    setTimeout(() => {
        introDiv.style.opacity = '0';
    }, 3000);

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