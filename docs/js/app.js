/*!
 * boilerplate - A boilerplate for building web projects with Gulp.js.
 * @version v1.3.0
 * @link https://github.com/mavisland/boilerplate
 * @license MIT
 */
"use strict";

var play_btn = document.getElementById("play-btn");
var play_btn_text = document.getElementById("play-btn-text");
var sound = new Howl({
  src: ["song/wicked-game.mp3"],
  autoplay: false,
  loop: true,
  html5: true,
  mute: false,
  volume: 0.75
});
sound.once("load", function () {
  play_btn.addEventListener("click", function () {
    var state = play_btn.classList.toggle("active");

    if (state) {
      sound.play();
      play_btn_text.innerHTML = "Pause Music";
    } else {
      sound.pause();
      play_btn_text.innerHTML = "Play Music";
    }
  });
});
sound.once("play", function () {
  console.log(sound.duration());
});
sound.on("end", function () {//Finished!
});