import { useState, useContext, useEffect } from 'react';

import { TimeInMilliseconds, FormattedTime, FormattedTimeUnit } from '../../../types/timeTypes';
import { notificationContext } from '../../../notification-context/NotificationContext';
import { formatTime } from '../../../utils/timeConversionUtils';

const useLaps = () => {
    const [ laps, updateLaps ] = useState<FormattedTime[]>([]);

    const addLap = (currentTime: TimeInMilliseconds) => {
        const newLap = formatTime(currentTime);
        updateLaps(prevLaps => [...prevLaps, newLap]);
    };

    const { addNotification } = useContext(notificationContext);

    const displayNonZeroTime = (time: FormattedTimeUnit, suffixCharacter: string = '') => {
        const isNonZeroTime = Number(time) !== 0;

        const fallback = '';
        if (isNonZeroTime) {
            return time + suffixCharacter;
        } else {
            return fallback;
        }
    };

    const getFormattedLapTime = () => {
        const mostRecentLap = laps.at(-1)!;
        const hours = displayNonZeroTime(mostRecentLap.hours, ':');
        const minutes = displayNonZeroTime(mostRecentLap.minutes, ':');
        // Seconds may be zero while milliseconds are increasing.
        const seconds = mostRecentLap.seconds + '.';
        const milliseconds = displayNonZeroTime(mostRecentLap.milliseconds);

        return (
            hours
            + minutes
            + seconds
            + milliseconds
        );
    };

    useEffect(() => {
        if (laps.length) {
            addNotification({ body: 'Lapped at ' + getFormattedLapTime() });
        }
    }, [laps])

    return {
        addLap
    };
};

export default useLaps;