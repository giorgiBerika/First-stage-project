const myVideo = document.querySelector('.video-data-video video');
let playButton = document.querySelector('.video-data-video .video-controls .play-pause');
let durationLine = document.querySelector('.skyblue-line');
const mainPlayButton = document.querySelector('.main-play-button');
const playButtons = document.querySelectorAll('.play-pause-video');

playButtons.forEach( (button)=>{
    button.addEventListener('click', function(){
    if(myVideo.paused)
    {
        myVideo.play();
        playButton.classList.toggle('pause-button');
        mainPlayButton.style.display = 'none';        
    }
    else
    {
        myVideo.pause();
        playButton.classList.remove('pause-button');
        mainPlayButton.style.display = 'block';        
    }
});
});

myVideo.addEventListener('timeupdate', function(){
    let linePos = myVideo.currentTime / myVideo.duration;
    durationLine.style.width = (linePos*100) + "%";
    console.log(durationLine);

})
