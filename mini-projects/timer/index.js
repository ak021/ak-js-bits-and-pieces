import Timer from "./timer.js";

const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");

const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;

new Timer(durationInput, startBtn, pauseBtn, {
  onStart: (totalDuration) => {
    duration = totalDuration;
  },
  onTick: (timeRemaining) => {
    const currentOffset = (perimeter * timeRemaining) / duration - perimeter;
    circle.setAttribute("stroke-dashoffset", currentOffset);
  },
  onComplete: () => console.log("timer completed"),
});
