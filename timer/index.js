class Timer {
  // constructor is a function which get called automatically whenever we create a new instance of the class.
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
    // this is a solution with bind
    // this.startButton.addEventListener("click", this.start.bind(this));
  }
  start = () => {
    this.tick(); // otherwise it will wait 1 second to print the first tick, but we need to print the tick immediately.
    console.log("inside start");
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    console.log("tick");
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
