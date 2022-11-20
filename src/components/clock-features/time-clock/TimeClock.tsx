import { useEffect, useState } from 'react';

import { TimeInMilliseconds } from '../../../types/timeTypes';
import { toMilliseconds } from '../../../utils/timeConversionUtils';
import useClock from '../../../independent-hooks/clock/useClock';
import use12hTime from './use-12h-time/use12hTime';

import styles from './TimeClock.module.scss';

import ClockDisplay from '../../clock-display/ClockDisplay';
import ToggleSwitch from '../../toggle-switch/ToggleSwitch';

const TimeClock = () => {
    const millisecondsPerHour = 3.6e+6;
    const millisecondsPerMinute = 6e+4;

    const getCurrentTime = () => {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        const milliseconds = currentDate.getMilliseconds();

        // Converts every time unit to milliseconds
        return (
            (hours *  millisecondsPerHour)
            + (minutes * millisecondsPerMinute)
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

    const { is12hTime, toggleIs12hTime } = use12hTime(false);
    const afternoonHours = 12 * millisecondsPerHour;

    return (
        <main className={styles.timeClock}>
            <ClockDisplay
                disabled
                timeInMilliseconds={is12hTime() ? currentTime - afternoonHours : currentTime}
            />

            <ToggleSwitch
                scale={1}
                whenToggledOn={() => toggleIs12hTime()}
                whenToggledOff={() => toggleIs12hTime()}
            />
        </main>
    );
};

export default TimeClock;