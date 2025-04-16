let timeInSeconds = 0; 
let countdown;
let isPaused = true;

const timerDisplay = document.getElementById("timer");
const playPauseBtn = document.getElementById("playPauseBtn");
const resetBtn = document.getElementById("resetBtn");

// Play/Pause button
playPauseBtn.addEventListener("click", () => {
  if (isPaused) {
    startCountdown();
    playPauseBtn.textContent = "Pause";
    playPauseBtn.classList.remove("btn-outline-info");
    playPauseBtn.classList.add("btn-outline-warning");
  } else {
    clearInterval(countdown);
    playPauseBtn.textContent = "Play";
    playPauseBtn.classList.add("btn-outline-info");
    playPauseBtn.classList.remove("btn-outline-warning");
  }
  isPaused = !isPaused;
});

// Reset button
resetBtn.addEventListener("click", () => {
  clearInterval(countdown);
  timeInSeconds = 0;
  updateDisplay();
  playPauseBtn.textContent = "Play";
  isPaused = true;
});

// Countdown function
function startCountdown() {
  countdown = setInterval(() => {
    timeInSeconds++;
    updateDisplay();
  }, 1000);
}

// Update the timer display in HH:MM:SS format
function updateDisplay() {
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds % 3600) / 60);
  let seconds = timeInSeconds % 60;

  
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}


updateDisplay();

//------------------------------------------------------------------------------
const quotestxt = document.querySelector("#quotes_txt");
const quotesbtn = document.querySelector("#quotes_btn");

api = "https://qapi.vercel.app/api/random";

quotesbtn.addEventListener("click", () => {
  async function quotes() {
    try {
      const res = await fetch(api);
      const data = await res.json();
      const quote = await data.quote;

      quotestxt.innerHTML = quote;
    } catch (error) {
      console.log(error);
    }
  }
  quotes();
});
