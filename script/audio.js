// 初始化显示数据
let audio = document.getElementById('audios');
let musicTime = '0:00';
let musicNowTime = '0:00'
audio.addEventListener("canplay", function() {
    musicTime =`${parseInt(parseInt(audio.duration)/60)}:${(parseInt(audio.duration)- parseInt(parseInt(audio.duration)/60)*60)}`
    document.getElementById("musicTime_long").innerHTML = musicTime
});
let time = null
let perect = 1
let volicePerect = 1
audio.volume = 1
document.getElementById("audio_voiceNum").style.height = '100%'
// 点击播放
function playMusic(){
    if(audio.paused){
        audio.play()
        newMusicTime()
        document.getElementById("audio_musicBtns").style.margin="0 auto"
        document.getElementById("audio_musicBtns").style.marginTop="30px"
        document.getElementById("audio_musicBtns").style.height="45px"
    }else {
        audio.pause()
        document.getElementById("audio_musicInfo").style.width = '130px'
        document.getElementById("audio_controller").style.width = '70%';
        document.getElementById("audio_musicBtns").style.margin="0"
        document.getElementById("audio_musicBtns").style.marginTop="0"
        document.getElementById("audio_musicBtns").style.height="30px"
    }
    
}
function pashit(){
    if(audio.paused){
        audio.play()
    }else {
        audio.pause()
        document.getElementById("audio_musicInfo").style.width = '130px'
        document.getElementById("audio_controller").style.width = '70%';
        document.getElementById("audio_musicBtns").style.margin="0"
        document.getElementById("audio_musicBtns").style.marginTop="0"
        document.getElementById("audio_musicBtns").style.height="30px"
    }
   
}
// 播放进度
function musicTimeBar(){
    // 当前进度与总进度百分比
    if(parseInt(audio.currentTime) === 0){
        perect = 1
    }else {
        perect = parseInt(audio.currentTime)/parseInt(audio.duration)
        document.getElementById("audio_timelineBar").style.width = document.getElementById("timeLine").clientWidth*perect.toFixed(3)
        document.getElementById("audio_timeText").style.width =  document.getElementById("timeLine").clientWidth*(1-perect.toFixed(3))
    }
    
}

// 获取当前歌曲时间
function newMusicTime(){
    // 实时显示当前播放时间
    setInterval(function(){
        let musicSec = (parseInt(audio.currentTime)- parseInt(parseInt(audio.currentTime)/60)*60)>9? (parseInt(audio.currentTime)- parseInt(parseInt(audio.currentTime)/60)*60):`0${ (parseInt(audio.currentTime)- parseInt(parseInt(audio.currentTime)/60)*60)}`
        musicNowTime =`${parseInt(parseInt(audio.currentTime )/60)}:${musicSec}`
        document.getElementById("musicTime_now").innerHTML = musicNowTime
        musicTimeBar()
    }, 1000)
    document.getElementById("audio_musicInfo").style.width = 0
    document.getElementById("audio_controller").style.width = '95%';

}

// 音量控制
function changeVoice(event){
    let hight = document.getElementById("audio_voiceLine").clientHeight
    document.getElementById("audio_voiceNum").style.height=(1-(event.offsetY/hight))*hight
    audio.volume = 1-(event.offsetY/hight)*hight/100
}

