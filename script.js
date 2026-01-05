const display = document.getElementById("display");
const drumPads = document.querySelectorAll(".drum-pad");
const audioEl = document.querySelectorAll(".clip");

const audioMap = {};
audioEl.forEach(a => audioMap[a.id] = a);

const playClip = (audioId) => {
  const audio = audioMap[audioId]

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  let text = audio.parentElement.id;
  display.innerText = text;
}

drumPads.forEach(pad => {
    pad.addEventListener("click", () => playClip(pad.querySelector("audio").id))
})

document.addEventListener("keydown", e =>
  playClip(e.key.toUpperCase())
);