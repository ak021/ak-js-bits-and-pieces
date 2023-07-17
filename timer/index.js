class Timer {
  // constructor is a function which get called automatically whenever we create a new instance of the class.
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
    // this is a solution with bind
    // this.startButton.addEventListener("click", this.start.bind(this));

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
  }
  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick(); // otherwise it will wait 1 second to print the first tick, but we need to print the tick immediately.
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      // since we are using the getter , though timeRemaining is a function we can access it like an instance variable or property of the class.
      //  const timeRemaining = this.timeRemaining;

      // if we assing like this, since it is a setter, value in the right side is automatically passed to the setter function
      // this.timeRemaining = timeRemaining - 1;

      //which can be condensed to the below
      this.timeRemaining = this.timeRemaining - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  //we can use getters and setters

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("inside on start");
  },
  onTick() {
    console.log("inside on tick");
  },
  onComplete() {
    console.log("inside on complete");
  },
});
