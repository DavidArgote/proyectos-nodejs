import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js'


const video = document.querySelector("video");
const buttonPlay = document.querySelector("#play");
const buttonUnmute = document.querySelector("#unmute");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()]});

buttonPlay.onclick = () => (player.isPlay ? player.stop() : player.play());
buttonUnmute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}