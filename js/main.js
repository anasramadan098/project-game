/**
 * Steps
 * [1] Show Video Intro (true)
 * [2] Log In Page
 * [3] Sign Up Proccess
 * [4] Start The Game 
 */


document.addEventListener('DOMContentLoaded' , () => {

    showVideoIntro()
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