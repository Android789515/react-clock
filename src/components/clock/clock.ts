type CurrentTicker = NodeJS.Timer | undefined;
class Clock {
    #everyOneSecond = 1000;

    #time = 0;
    getTime() {
        return this.#time;
    }

    #tick() {
        this.#time = Date.now() - this.#startTime;
    }

    #startTime = 0;
    #currentTicker: CurrentTicker = undefined;
    startClock() {
        this.#startTime = Date.now();
        this.#currentTicker = setInterval(this.#tick, this.#everyOneSecond);
    }

    stopClock() {
        clearInterval(this.#currentTicker);
    }
}

export default Clock;