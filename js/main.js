const fields = ['fashion'];





document.addEventListener('DOMContentLoaded' , () => {

    showVideoIntro();
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

const cards = document.querySelectorAll('form .cards .card')
cards.forEach(card => {
    card.addEventListener('click' , e => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        if (fields.find(v => v == card.dataset.value) != undefined) {
            document.querySelector('input[name="field"]').value = card.dataset.value
        } else {
            alert('المجال مكتوب بالخطأ يرجي إعادة تحميل الصفحة') ;
            location.reload();
        }

    })
})


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

// دالة لتعديل قيمة animation progress bar
function setProgressWidth(percentage) {
    const progressContainer = document.querySelector('.progress-container');
    if (progressContainer) {
        progressContainer.style.setProperty('--progress-width', percentage + '%');
    }
}

// مثال على الاستخدام:
// setProgressWidth(60); // سيجعل الـ progress bar يصل إلى 60%

