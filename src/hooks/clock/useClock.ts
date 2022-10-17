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
        setIsStarted(true);

        // Minimum update time for browsers is 4ms
        // this will run the function passed to the hook
        // every 10ms, which is as precise as it can be
        const everyTenMillisecond = 10;
        const everyOneSecond = 1000;

        setCurrentTicker(
            setInterval(
                onTick,
                options?.precise
                    ? everyTenMillisecond
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