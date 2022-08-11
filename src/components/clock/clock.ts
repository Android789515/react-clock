type CurrentTicker = NodeJS.Timer | undefined;

interface StartClockOptions {
    precise?: boolean;
}
class Clock {

    readonly #onTick;

    constructor(onTick: () => void) {
        this.#onTick = onTick;
    }

    readonly #everyOneMillisecond = 1;
    readonly #everyOneSecond = 1000;

    #currentTicker: CurrentTicker;
    startClock(options?: StartClockOptions) {
        this.#currentTicker = setInterval(
            this.#onTick,
            options?.precise
                ? this.#everyOneMillisecond
                : this.#everyOneSecond
        );
    }

    stopClock() {
        clearInterval(this.#currentTicker);
    }
}

export default Clock;