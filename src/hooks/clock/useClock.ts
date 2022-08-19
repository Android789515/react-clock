import { useState } from 'react';

type OnTickFunction = () => void;
const useClock = (onTick: OnTickFunction) => {
    type CurrentTicker = NodeJS.Timer | null;
    const [ currentTicker, setCurrentTicker ] = useState<CurrentTicker>(null);

    interface StartClockOptions {
        precise?: boolean;
    }
    const startClock = (options?: StartClockOptions) => {
        const everyOneMillisecond = 1;
        const everyOneSecond = 1000;

        setCurrentTicker(
            setInterval(
                onTick,
                options?.precise
                    ? everyOneMillisecond
                    : everyOneSecond
            )
        )
    };

    const stopClock = () => {
        if (currentTicker) {
            clearInterval(currentTicker);
            setCurrentTicker(null);
        }
    };

    return {
        startClock,
        stopClock
    };
};

export default useClock;