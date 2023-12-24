const timer = document.querySelector("#timer").value;
const updateTimer = document.querySelector("#updateTimer");
let setTimer = document.querySelector("#setTimer");
let deals = document.querySelector(".sectionDeals");

let countdownTimer = document.querySelector("#countdown-timer");

let time = timer;

if (time) {
  const startCountdown = () => {
    let hrs = Math.floor(time / 60 / 60) % 60;

    let min = Math.floor(time / 60) % 60;

    let sec = Math.floor(time % 60);

    let newHrs = hrs * 60 * 60;
    let newMin = min * 60;

    setTimer.value = Math.floor(sec + newHrs + newMin);

    hrs = hrs < 10 ? "0" + hrs : hrs;

    min = min < 10 ? "0" + min : min;

    sec = sec < 10 ? "0" + sec : sec;

    countdownTimer.innerHTML = `${hrs} : ${min} : ${sec}`;

    updateTimer.addEventListener("click", (e) => {
      e.preventDefault();
    });
    updateTimer.click();

    if (setTimer.value <= "0") {
      // deals.classList.add("hide");

      return;
    } else {
      time--;
    }
  };

  if (timer.value === "0") {
    // deals.classList.add("hide");
  }

  setInterval(startCountdown, 1000);
}
