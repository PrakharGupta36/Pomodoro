let pomodoro = document.getElementById("pomodoro");
let shortBreak = document.getElementById("shortBreak");
let longBreak = document.getElementById("longBreak");
let settingButton = document.getElementById("settingButton");
let close = document.getElementById("close");
let settingsDiv = document.getElementById("settingsDiv");
let toggle = document.getElementById("toggle");
let toggleClock = document.getElementById("toggleClock");
let pausePLay = document.getElementById("pausePLay");

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

      if (minutes < 10) {
        minutesText.textContent = `0${minutes}`;
      } else {
        minutesText.textContent = minutes;
      }

      if (seconds < 10) {
        secondsText.textContent = `0${seconds}`;
      } else {
        secondsText.textContent = seconds;
      }
      if (minutes < 0 && seconds < 0) {
        minutesText.textContent = `Poromodo Done`;
        secondsText.textContent = ``;
      }
    }
  }, 1000);

  reset.onclick = () => {
    audio.play();
    minutes = 24;
    seconds = 60;
  };

  pause.onclick = (e) => {
    audio.play();
    e.preventDefault();
    isPaused = true;
    play.disabled = false;
    play.style.opacity = "1";
    pause.disabled = true;
    reset.disabled = true;
    pause.style.opacity = ".5";
    reset.style.opacity = ".5";
  };
  play.onclick = (e) => {
    audio.play();
    e.preventDefault();
    isPaused = false;
    play.disabled = true;
    play.style.opacity = ".5";
    pause.disabled = false;
    reset.disabled = false;
    reset.style.opacity = "1";
    pause.style.opacity = "1";
  };
};

pomodoro.onclick = () => {
  minutesText.textContent = 24;
  secondsText.textContent = 60;

  pomodoro.classList.add("active");
  shortBreak.classList.remove("active");
  longBreak.classList.remove("active");
  pausePLay.style.display = "flex";
};

shortBreak.onclick = () => {
  let minutesShort = 0;
  let secondsShort = 10;
  pomodoro.disabled = true;
  longBreak.disabled = true;
  pomodoro.style.opacity = ".5";
  longBreak.style.opacity = ".5";
  setInterval(() => {
    if (!isPaused) {
      secondsShort--;

      console.log(minutesShort, secondsShort);

      if (secondsShort === 0) {
        minutesShort--;
        secondsShort = 60;
      }

      if (minutesShort < 10) {
        minutesText.textContent = `0${minutesShort}`;
      } else {
        minutesText.textContent = minutesShort;
      }

      if (secondsShort < 10) {
        secondsText.textContent = `0${secondsShort}`;
      } else {
        secondsText.textContent = secondsShort;
      }

      if (minutesShort === 0) {
        pomodoro.disabled = false;
        longBreak.disabled = false;
        pomodoro.style.opacity = "1";
        longBreak.style.opacity = "1";
      }
      
    }
  }, 1000);

  pomodoro.classList.remove("active");
  shortBreak.classList.add("active");
  longBreak.classList.remove("active");
  pausePLay.style.display = "none";
};

longBreak.onclick = () => {
  let minutesLong = 14;
  let secondsLong = 60;
  setInterval(() => {
    if (!isPaused) {
      secondsLong--;

      console.log(minutesLong, secondsLong);
      if (secondsLong === 0) {
        minutesLong--;
        secondsLong = 60;
      }

      if (minutesLong < 10) {
        minutesText.textContent = `0${minutesLong}`;
      } else {
        minutesText.textContent = minutesLong;
      }

      if (secondsLong < 10) {
        secondsText.textContent = `0${secondsLong}`;
      } else {
        secondsText.textContent = secondsLong;
      }

      if (minutesLong < 0 && secondsLong < 0) {
        minutesText.textContent = `Break Done`;
        secondsText.textContent = ``;
      }
    }
  }, 1000);

  pomodoro.classList.remove("active");
  shortBreak.classList.remove("active");
  longBreak.classList.add("active");
  pausePLay.style.display = "none";
};
