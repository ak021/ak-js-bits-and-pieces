class Logger {
  #instance = null;
  constructor() {
    if (this.#instance === null) {
      // do all the initialization
      this.logs = [];
      this.#instance = this;
    }
    return this.#instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`${new Date().toISOString()}::message`);
  }

  printLogCount() {
    console.log("Log Count::", this.logs.length);
  }
}

const logger = new Logger();
Object.freeze(logger);
// export default logger;

logger.log("hello there");
logger.printLogCount();

logger.log("malayalam");
logger.printLogCount();
