import { useState } from 'react';

import type { TimeInSeconds } from '../../types/timeTypes';
import Clock from '../clock/clock';
import useMemoizeClock from '../clock/use-memoize-clock/useMemoizeClock';

import styles from './StopWatch.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
import StopWatchButtons from './stop-watch-buttons/StopWatchButtons';

const StopWatch = () => {
    const [ stopWatchTime, setStopWatchTime ] = useState<TimeInSeconds>(0);

    const incrementStopWatchTime = () => setStopWatchTime(currentTime => currentTime + 1);
    const resetStopWatchTime = () => setStopWatchTime(0);

    const clock = useMemoizeClock(new Clock(incrementStopWatchTime));

    return (
        <div className={styles.stopWatch}>

            <ClockDisplay timeInSeconds={stopWatchTime} />

            <StopWatchButtons
                startClock={() => clock.startClock()}
                stopClock={() => clock.stopClock()}
                resetClock={resetStopWatchTime}
            />
        </div>
    );
};

export default StopWatch;