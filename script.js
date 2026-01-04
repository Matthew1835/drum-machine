const display = document.getElementById("display");
const padBank = document.getElementById("pad-bank");
const padContainer = document.getElementById("pad-container");
const drumPads = document.querySelectorAll(".drum-pad");
const audioEl = document.querySelectorAll(".clip");

const audio = new Audio();

const playClip = () => {

}

drumPads.forEach(pad => {
    pad.addEventListener("click", () => console.log(pad.innerText))
})

document.addEventListener("keydown", e =>
  console.log(e.key)
);