import { useState } from 'react';

import type { TimeInSeconds } from '../../types/timeTypes';
import Clock from '../clock/clock';
import useMemoizeClock from '../clock/use-memoize-clock/useMemoizeClock';
import useTimeBarToggle from '../timer-bar/useTimeBarToggle';

import styles from './StopWatch.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
import StopWatchButtons from './stop-watch-buttons/StopWatchButtons';
import TimerBar from '../timer-bar/TimerBar';

const StopWatch = () => {
    const [ stopWatchTime, setStopWatchTime ] = useState<TimeInSeconds>(0);

    const incrementStopWatchTime = () => setStopWatchTime(currentTime => currentTime + 1);
    const resetStopWatchTime = () => setStopWatchTime(0);

    const clock = useMemoizeClock(new Clock(incrementStopWatchTime));

    const { getTimeBarVisibility, showTimeBar, hideTimeBar } = useTimeBarToggle(false);

    const startStopWatch = () => {
        showTimeBar();

        clock.startClock();
    };

    const stopStopWatch = () => {
        hideTimeBar();

        clock.stopClock();
    };

    return (
        <div className={styles.stopWatch}>

            <ClockDisplay timeInSeconds={stopWatchTime} />

            <TimerBar
                isActive={getTimeBarVisibility()}
                timeInSeconds={stopWatchTime}
            />

            <StopWatchButtons
                startClock={startStopWatch}
                stopClock={stopStopWatch}
                resetClock={resetStopWatchTime}
            />
        </div>
    );
};

export default StopWatch;