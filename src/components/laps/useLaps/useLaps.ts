import { useState } from 'react';

import type { TimeInMilliseconds } from '../../../types/timeTypes';

const useLaps = () => {
    const [ laps, updateLaps ] = useState<TimeInMilliseconds[]>([]);

    const addLap = (currentTime: TimeInMilliseconds) => {
        updateLaps(prevLaps => [...prevLaps, currentTime]);
    };

    const clearLaps = () => updateLaps([]);

    const getLaps = () => laps;

    return {
        addLap,
        getLaps,
        clearLaps
    };
};

export default useLaps;