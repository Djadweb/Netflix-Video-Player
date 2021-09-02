
let video = document.querySelector('video');
//let playBtn = document.querySelector('.play-pause');
let playSVG = document.querySelector('.play-pause .play');
let pauseSVG = document.querySelector('.play-pause .pause');
//let screenSize = document.querySelector('.screen-size');
let fullScreenSVG = document.querySelector('.screen-size .full');
let minimizedScreenSVG = document.querySelector('.screen-size .minimized');
let watchedTime = document.querySelector('.progress-bar .watched-time');
let circle = document.querySelector('.progress-bar .circle');

//Play & Pause 
function playPause() {
    if(video.paused) {
        video.play();
        playSVG.style.display = "none";
        pauseSVG.style.display = "block";
    } else {
        video.pause();
        playSVG.style.display = "block";
        pauseSVG.style.display = "none";    
    }
}

//Change screen size fullscreen/minimized
function changeScreenSize() {
    if(document.fullscreenElement) {     
        document.exitFullscreen();
        fullScreenSVG.style.display = "none";
        minimizedScreenSVG.style.display = "block";  
    } else {        
        document.documentElement.requestFullscreen();
        fullScreenSVG.style.display = "block";
        minimizedScreenSVG.style.display = "none";
    }
}

//Calculate watched time
video.addEventListener('timeupdate', () => {
    watchedTime.style.width = ((video.currentTime  / video.duration) * 100) + "%";
    circle.left
})
    