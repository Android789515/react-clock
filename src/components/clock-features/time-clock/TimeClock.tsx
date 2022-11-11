import { useEffect, useState } from 'react';

import { TimeInMilliseconds } from '../../../types/timeTypes';
import { toMilliseconds } from '../../../utils/timeConversionUtils';
import useClock from '../../../independent-hooks/clock/useClock';

import styles from './TimeClock.module.scss';

import ClockDisplay from '../../clock-display/ClockDisplay';

const TimeClock = () => {
    const getCurrentTime = () => {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        const milliseconds = currentDate.getMilliseconds();

        return (
            (hours *  3.6e+6)
            + (minutes * 6e+4)
            + toMilliseconds(seconds)
            + milliseconds
        );
    };

    const [ currentTime, setCurrentTime ] = useState<TimeInMilliseconds>(getCurrentTime());

    const { startClock, stopClock } = useClock(() => {
        setCurrentTime(getCurrentTime());
    });

    useEffect(() => {
        startClock();

        return () => stopClock();
    }, []);

    return (
        <main className={styles.timeClock}>
            <ClockDisplay
                disabled
                timeInMilliseconds={currentTime}
            />
        </main>
    );
};

export default TimeClock;