pomodoro.onclick = () => {
  pomodoro.classList.add("active");
  shortBreak.classList.remove("active");
  longBreak.classList.remove("active");
};

shortBreak.onclick = () => {
  pomodoro.classList.remove("active");
  shortBreak.classList.add("active");
  longBreak.classList.remove("active");
};

longBreak.onclick = () => {
  pomodoro.classList.remove("active");
  shortBreak.classList.remove("active");
  longBreak.classList.add("active");
};
