import { useState } from 'react';

import type { TimeInMilliseconds } from '../../types/timeTypes';
import Clock from '../clock/clock';
import useMemoizeClock from '../clock/use-memoize-clock/useMemoizeClock';

import styles from './StopWatch.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
import StopWatchButtons from './stop-watch-buttons/StopWatchButtons';

const StopWatch = () => {
    const [ stopWatchTime, setStopWatchTime ] = useState<TimeInMilliseconds>(0);

    const incrementStopWatchTime = () => setStopWatchTime(currentTime => currentTime + 1);

    const clock = useMemoizeClock(new Clock(incrementStopWatchTime));

    const startStopWatch = () => {
        clock.startClock({ precise: true });
    };

    const suspendStopWatch = () => {
        clock.stopClock();
    };

    const resetStopWatchTime = () => {
        setStopWatchTime(0);
    };

    const afterClockStarts = stopWatchTime !== 0;
    return (
        <div className={styles.stopWatch}>

            <ClockDisplay
                timeInMilliseconds={stopWatchTime}
                showMilliseconds={afterClockStarts}
            />

            <StopWatchButtons
                startCounting={startStopWatch}
                stopCounting={suspendStopWatch}
                resetTime={resetStopWatchTime}
            />
        </div>
    );
};

export default StopWatch;