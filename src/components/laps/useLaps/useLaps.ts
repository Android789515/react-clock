import { useState } from 'react';

import type { TimeInMilliseconds } from '../../../types/timeTypes';

const useLaps = () => {
    const [ laps, updateLaps ] = useState<TimeInMilliseconds[]>([]);

    const _createLap = (currentTime: TimeInMilliseconds) => {
        const isFirstLap = laps.length === 0;

        if (isFirstLap) {
            return currentTime;
        } else {
            const mostRecentTime = laps.at(-1)!;
            return currentTime - mostRecentTime;
        }
    };

    const addLap = (currentTime: TimeInMilliseconds) => {
        updateLaps(prevLaps => [...prevLaps, _createLap(currentTime)]);
    };

    const getLaps = () => laps;

    return {
        addLap,
        getLaps,
    };
};

export default useLaps;