import { useState } from 'react';

import type { TimeInMilliseconds, FormattedTime } from '../../../types/timeTypes';
import { formatTime } from '../../../utils/timeConversionUtils';

const useLaps = () => {
    const [ laps, updateLaps ] = useState<FormattedTime[]>([]);

    const addLap = (currentTime: TimeInMilliseconds) => {
        const newLap = formatTime(currentTime);
        updateLaps(prevLaps => [...prevLaps, newLap]);
    };

    const getLaps = () => laps;

    return {
        addLap,
        getLaps,
    };
};

export default useLaps;