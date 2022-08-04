type CurrentTicker = NodeJS.Timer | undefined;
class Clock {

    readonly #onTick;

    constructor(onTick: () => void) {
        this.#onTick = onTick;
    }

    readonly #everyOneSecond = 1000;
    #currentTicker: CurrentTicker;
    startClock() {
        this.#currentTicker = setInterval(this.#onTick, this.#everyOneSecond);
    }

    stopClock() {
        clearInterval(this.#currentTicker);
    }
}

export default Clock;