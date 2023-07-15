"use strict";

var audio = document.getElementById("audio");
var playButton = document.getElementById("playButton");

playButton.addEventListener("click", function () {
  audio.play();
  playButton.classList.add("hide-button");
});
