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

reset.style.opacity = ".5";
pause.style.opacity = ".5";

reset.disabled = true;
pause.disabled = true;

let isPaused = false;
play.onclick = () => {
  audio.play();
  play.disabled = true;
  pause.disabled = false;
  play.style.opacity = ".5";
  reset.style.opacity = "1";
  pause.style.opacity = "1";
  reset.disabled = false;

  setInterval(() => {
    if (!isPaused) {
      seconds--;
      console.log(minutes, seconds);
      if (seconds === 0) {
        minutes--;
        seconds = 60;
      }
      minutesText.textContent = minutes;
      secondsText.textContent = seconds;
    }
  }, 1000);
  reset.onclick = () => {
    audio.play();
    minutes = 24;
    seconds = 60;
  };
  pause.onclick = (e) => {
    e.preventDefault();
    isPaused = true;
    play.disabled = false;
    play.style.opacity = "1";
    pause.disabled = true;
    pause.style.opacity = ".5";
  };
  play.onclick = (e) => {
    e.preventDefault();
    isPaused = false;
    play.disabled = true;
    play.style.opacity = ".5";
    pause.disabled = false;
    pause.style.opacity = "1";
  };
};
