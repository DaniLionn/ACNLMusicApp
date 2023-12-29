const player = require('play-sound')(opts = {})
const process = require('node:process');

var playing = false
var lastHour = 0
var audio = null
var audios = [
    "audios/12AM.mp3",
    "audios/1AM.mp3",
    "audios/2AM.mp3",
    "audios/3AM.mp3",
    "audios/4AM.mp3",
    "audios/5AM.mp3",
    "audios/6AM.mp3",
    "audios/7AM.mp3",
    "audios/8AM.mp3",
    "audios/9AM.mp3",
    "audios/10AM.mp3",
    "audios/11AM.mp3",
    "audios/12PM.mp3",
    "audios/1PM.mp3",
    "audios/2PM.mp3",
    "audios/3PM.mp3",
    "audios/4PM.mp3",
    "audios/5PM.mp3",
    "audios/6PM.mp3",
    "audios/7PM.mp3",
    "audios/8PM.mp3",
    "audios/9PM.mp3",
    "audios/10PM.mp3",
    "audios/11PM.mp3",
]



setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const time = date.toLocaleTimeString()
    console.clear()
    console.log("Playing!")
    console.log("It is currently " + time)

    if (lastHour != hour) {
        lastHour = hour
        if (audio != null) {
            audio.kill()
        }

    }

    if (lastHour == hour) {

        if (playing == false) {

            playing = true

            audio = player.play(audios[hour], { mpg123: ["-f", 6000] }, function(err) {
                if (err) throw err
                playing = false
            })


        }

    }
}, 1000)

process.on('uncaughtException', function(err) {
    console.log(err);
  });