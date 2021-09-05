let pomodoro = document.getElementById("pomodoro");
let shortBreak = document.getElementById("shortBreak");
let longBreak = document.getElementById("longBreak");
let settingButton = document.getElementById("settingButton");
let close = document.getElementById("close");
let settingsDiv = document.getElementById("settingsDiv");
let toggle = document.getElementById("toggle");
let toggleClock = document.getElementById("toggleClock");

settingButton.onclick = () => {
  settingsDiv.style.display = "grid";
  settingButton.style.display = "none";
  toggleClock.style.display = "none";
  toggle.style.display = "none";
  settingsDiv.animate(
    [
      // keyframes
      { opacity: "0" },
      { opacity: "1" },
    ],
    {
      // timing options
      duration: 5e2,
      iterations: 1,
    }
  );
};

close.onclick = () => {
  settingsDiv.style.display = "none";
  settingButton.style.display = "block";
  toggle.style.display = "flex";
  toggleClock.style.display = "block";
  document.body.style.background = "#1f2140";
  settingButton.animate(
    [
      // keyframes
      { opacity: "0" },
      { opacity: "1" },
    ],
    {
      // timing options
      duration: 5e2,
      iterations: 1,
    }
  );
};

let minutes = 24;
let seconds = 60;

let minutesText = document.getElementById("minutesText");
let secondsText = document.getElementById("secondsText");
let play = document.getElementById("play");
let reset = document.getElementById("reset");
let pause = document.getElementById("pause");
let audio = document.getElementById("audio");


reset.style.opacity = ".5"
pause.style.opacity = ".5"

play.onclick = () => {
  audio.play();
  play.disabled = true;
  play.style.opacity = ".5"
  reset.style.opacity = "1"
  pause.style.opacity = "1"
  reset.disabled = false;
  setInterval(() => {
    seconds--;
    console.log(minutes, seconds);
    if (seconds === 0) {
      minutes--;
      seconds = 60;
    }
    minutesText.textContent = minutes;
    secondsText.textContent = seconds;
  }, 1000);
};

reset.onclick = () => {
    audio.play();
    play.disabled = false;
    
    reset.disabled = true;
  minutes = 24;
  seconds = 60;
};
