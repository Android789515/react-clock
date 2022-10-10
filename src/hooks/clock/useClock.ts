import { useState } from 'react';

type OnTickFunction = () => void;
const useClock = (onTick: OnTickFunction) => {
    type CurrentTicker = NodeJS.Timer | null;
    const [ currentTicker, setCurrentTicker ] = useState<CurrentTicker>(null);

    const [ isStarted, setIsStarted ] = useState(false);
    const isClockStarted = () => isStarted;

    interface StartClockOptions {
        precise?: boolean;
    }
    const startClock = (options?: StartClockOptions) => {
        // Prevent starting a new interval when one's already running.
        if (isClockStarted()) return

        setIsStarted(true);

        const everyOneMillisecond = 1;
        const everyOneSecond = 1000;

        setCurrentTicker(
            setInterval(
                onTick,
                options?.precise
                    ? everyOneMillisecond
                    : everyOneSecond
            )
        );
    };

    const stopClock = () => {
        setIsStarted(false);

        if (currentTicker) {
            clearInterval(currentTicker);
            setCurrentTicker(null);
        }
    };

    return {
        isClockStarted,
        startClock,
        stopClock
    };
};

export default useClock;