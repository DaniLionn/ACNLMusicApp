const player = require("play-sound")((opts = {}));
const process = require("node:process");
const path = require("path");
const baseAudioPath = path.join(__dirname, "audios");

var playing = false;
var lastHour = 0;
var audio = null;
const audios = [
  `${baseAudioPath}/12AM.mp3`,
  `${baseAudioPath}/1AM.mp3`,
  `${baseAudioPath}/2AM.mp3`,
  `${baseAudioPath}/3AM.mp3`,
  `${baseAudioPath}/4AM.mp3`,
  `${baseAudioPath}/5AM.mp3`,
  `${baseAudioPath}/6AM.mp3`,
  `${baseAudioPath}/7AM.mp3`,
  `${baseAudioPath}/8AM.mp3`,
  `${baseAudioPath}/9AM.mp3`,
  `${baseAudioPath}/10AM.mp3`,
  `${baseAudioPath}/11AM.mp3`,
  `${baseAudioPath}/12PM.mp3`,
  `${baseAudioPath}/1PM.mp3`,
  `${baseAudioPath}/2PM.mp3`,
  `${baseAudioPath}/3PM.mp3`,
  `${baseAudioPath}/4PM.mp3`,
  `${baseAudioPath}/5PM.mp3`,
  `${baseAudioPath}/6PM.mp3`,
  `${baseAudioPath}/7PM.mp3`,
  `${baseAudioPath}/8PM.mp3`,
  `${baseAudioPath}/9PM.mp3`,
  `${baseAudioPath}/10PM.mp3`,
  `${baseAudioPath}/11PM.mp3`,
];

setInterval(() => {
  const date = new Date();
  const hour = date.getHours();
  const time = date.toLocaleTimeString();
  console.clear();
  console.log("Playing!");
  console.log("It is currently " + time);
  if (lastHour != hour) {
    lastHour = hour;
    if (audio != null) {
      audio.kill();
    }
  }

  if (lastHour == hour) {
    if (playing == false) {
      playing = true;

      audio = player.play(
        audios[hour],
        { mpg123: ["-f", 6000] },
        function (err) {
          if (err) throw err;
          playing = false;
        }
      );
    }
  }
}, 1000);

process.on("uncaughtException", function (err) {
  console.log(err);
});
