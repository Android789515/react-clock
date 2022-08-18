import { useState } from 'react';

import type { TimeInMilliseconds } from '../../types/timeTypes';

import styles from './StopWatch.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
import StopWatchButtons from './stop-watch-buttons/StopWatchButtons';
import useClock from '../../hooks/clock/useClock';

const StopWatch = () => {
    const [ stopWatchTime, setStopWatchTime ] = useState<TimeInMilliseconds>(0);

    const incrementStopWatchTime = () => setStopWatchTime(currentTime => currentTime + 1);

    const { startClock, stopClock } = useClock(incrementStopWatchTime);

    const [ isStopWatchStarted, setIsStopWatchStarted ] = useState(false);

    const startStopWatch = () => {
        setIsStopWatchStarted(true);
        startClock({ precise: true });
    };

    const suspendStopWatch = () => {
        setIsStopWatchStarted(false);
        stopClock();
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
                isStopWatchStarted={isStopWatchStarted}
                startCounting={startStopWatch}
                stopCounting={suspendStopWatch}
                resetTime={resetStopWatchTime}
            />
        </div>
    );
};

export default StopWatch;