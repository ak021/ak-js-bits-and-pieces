export default class Timer {
  #durationInput;
  #startButton;
  #pauseButton;
  #interval;
  #onStart;
  #onTick;
  #onComplete;

  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.#durationInput = durationInput;
    this.#startButton = startButton;
    this.#pauseButton = pauseButton;
    if (callbacks) {
      if (typeof callbacks !== "object") {
        throw new Error(
          `callbacks should be an object, received ${typeof callbacks}`
        );
      }
      this.#onStart = callbacks.onStart;
      this.#onTick = callbacks.onTick;
      this.#onComplete = callbacks.onComplete;
    }
    this.#startButton.addEventListener("click", this.#start);
    this.#pauseButton.addEventListener("click", this.#pause);
  }

  #start = () => {
    if (this.#onStart) this.#onStart(this.timeRemaining);
    this.#tick();
    this.#pause();
    this.#interval = setInterval(this.#tick, 50);
  };

  #pause = () => {
    if (this.#interval) {
      clearInterval(this.#interval);
    }
  };

  #tick = () => {
    if (this.timeRemaining <= 0) {
      this.#pause();
      if (this.#onComplete) this.#onComplete();
      return;
    }
    this.timeRemaining = this.timeRemaining - 0.05;
    if (this.#onTick) this.#onTick(this.timeRemaining);
  };

  get timeRemaining() {
    return parseFloat(this.#durationInput.value);
  }

  set timeRemaining(time) {
    this.#durationInput.value = time.toFixed(2);
  }
}
