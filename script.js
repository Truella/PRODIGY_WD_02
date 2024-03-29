window.onload = function () {
  let appendMilliSec = document.getElementById("millisec");
  let appendSecond = document.getElementById("second");
  let appendMinute = document.getElementById("minute");
  const startBtn = document.getElementById("start-count-btn");
  const stopBtn = document.getElementById("stop-count-btn");
  const resumeBtn = document.getElementById("resume-count-btn");
  const resetBtn = document.getElementById("reset-count-btn");
  let milliSecs = 0;
  let seconds = 0;
  let minutes = 0;
  let interval;
  function removeClass(element, className) {
    element.classList.remove(className);
  }
  function addClass(element, className) {
    element.classList.add(className);
  }
  function updateStopwatch() {
    milliSecs++;
    if (milliSecs <= 9) {
      appendMilliSec.innerText = "0" + milliSecs;
    }
    if (milliSecs > 9) {
      appendMilliSec.innerText = milliSecs;
    }
    if (milliSecs > 99) {
      seconds++;
      appendSecond.innerText = "0" + seconds;
      milliSecs = 0;
      appendMilliSec.innerText = "0" + 0;
    }
    if (seconds > 9) {
      appendSecond.innerText = seconds;
    }
    if (seconds > 59) {
      minutes++;
      appendMinute.innerText = "0" + minutes;
      seconds = 0;
      appendSecond.innerText = "0" + 0;
    }
  }
  startBtn.onclick = () => {
    clearInterval(interval);
    interval = setInterval(updateStopwatch, 10);
    addClass(startBtn, "hidden");
    removeClass(stopBtn, "hidden");
    removeClass(lapBtn, "hidden");
  };
  resumeBtn.onclick = () => {
    clearInterval(interval);
    interval = setInterval(updateStopwatch, 10);
    removeClass(stopBtn, "hidden");
    addClass(resetBtn, "hidden");
    addClass(resumeBtn, "hidden");
  };
  stopBtn.onclick = () => {
    clearInterval(interval);
    removeClass(resetBtn, "hidden");
    removeClass(resumeBtn, "hidden");
    addClass(stopBtn, "hidden");
  };
  resetBtn.onclick = () => {
    clearInterval(interval);
    milliSecs = "00";
    seconds = "00";
    minutes = "00";
    appendMilliSec.innerText = milliSecs;
    appendSecond.innerText = seconds;
    appendMinute.innerText = minutes;
    addClass(resumeBtn, "hidden");
    addClass(resetBtn, "hidden");
    removeClass(startBtn, "hidden");
  };
};
/*

  lapBtn.onclick = () => {
    currentTime = Date.now();
    lapTime = currentTime - startTime;
    startTime = currentTime;
    const list = document.createElement("li");
    const lapCount = document.createElement("span");
    const lap = document.createElement("span");
    const totalTime = document.createElement("span");
    lapCount.innerText = `${count++}`;
    let lapMinute = Math.floor(
      (lapTime % (1000 * 60 * 60)) / (1000 * 60)
    )
    let lapSec = Math.floor((lapTime % (1000 * 60)) / 1000);
    let lapMillisec = Math.floor(
      lapTime % 1000
    );
    lap.innerText = `${
      lapMinute < 10 ? (lapMinute = ("0" + lapMinute).slice(-2)) : (lapMinute = lapMinute)
    } : ${lapSec < 10 ? (lapSec = ("0" + lapSec).slice(-2)) : (lapSec = lapSec)} : ${lapMillisec < 10 ? (lapMillisec = ("0" + lapMillisec).slice(-2)) : (lapMillisec = lapMillisec)}`
    totalTime.innerText = `${
      minutes < 10 ? (minutes = ("0" + minutes).slice(-2)) : (minutes = minutes)
    } : ${
      seconds < 10 ? (seconds = ("0" + seconds).slice(-2)) : (seconds = seconds)
    } : ${milliSecs}`;
    if (milliSecs <= 9) {
      milliSecs = "0" + milliSecs;
    }
    if (milliSecs > 9) {
      appendMilliSec.innerText = milliSecs;
    }
    list.appendChild(lapCount);
    list.appendChild(lap);
    list.appendChild(totalTime);
    lapContainer.appendChild(list);
  };

*/