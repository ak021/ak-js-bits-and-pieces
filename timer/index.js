class Timer {
  // constructor is a function which get called automatically whenever we create a new instance of the class.
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startButton.addEventListener("click", this.start);
    // this is a solution with bind
    // this.startButton.addEventListener("click", this.start.bind(this));
  }
  start = () => {
    console.log("inside start");
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
