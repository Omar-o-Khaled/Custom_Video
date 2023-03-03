let video=document.querySelector("video");
let play=document.querySelector("#play");
let stopnow=document.querySelector("#stop");
let progress=document.querySelector("#progress");
let timestamp=document.querySelector("#timestamp");

function toggleVideoStatues(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
function fullScreenVideo(){
    video.requestFullscreen();
}
function updatePlayIcon(){    
    if(video.paused){
        play.innerHTML='<ion-icon name="play" class="play"></ion-icon>';
    }else{
        play.innerHTML='<ion-icon name="pause-outline"></ion-icon>';
    }
    video.volume=0.5;
}
function updateProgress(){
    progress.value=(video.currentTime*100)/video.duration;

    let mins=Math.floor(video.currentTime/60);
    let secs=Math.floor(video.currentTime%60);
    if(mins<10){
        mins=`0`+mins
    }
    if(secs<10){
        secs=`0`+secs
    }
    timestamp.innerHTML=`${mins}:${secs}`
    
}
function stopVideo(){
    video.currentTime=0;
    video.pause();
}
function setVideoProgress(){
    video.currentTime=(+progress.value * video.duration)/100;
}
document.addEventListener("keypress",(ele)=>{
    if(ele.keyCode===32){
        toggleVideoStatues();
    }
    if(ele.keyCode===77 || ele.keyCode===109){
        if( video.volume===0){
            video.volume=1;
        }else{
            video.volume=0;
        }
    }
})

video.addEventListener("click",toggleVideoStatues);
video.addEventListener("dblclick",fullScreenVideo);
video.addEventListener("pause",updatePlayIcon);
video.addEventListener("play",updatePlayIcon);
video.addEventListener("timeupdate",updateProgress);

play.addEventListener("click",toggleVideoStatues);
stopnow.addEventListener("click",stopVideo);
progress.addEventListener("change",setVideoProgress);