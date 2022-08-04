import { useState } from 'react';

import type { TimeInSeconds } from '../../types/timeTypes';
import Clock from '../clock/clock';
import useMemoizeClock from '../clock/use-memoize-clock/useMemoizeClock';

import styles from './StopWatch.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
import ActionButton from '../action-button/ActionButton';

const StopWatch = () => {
    const [ stopWatchTime, setStopWatchTime ] = useState<TimeInSeconds>(0);
    const incrementStopWatchTime = () => setStopWatchTime(currentTime => currentTime + 1);

    const clock = useMemoizeClock(new Clock(incrementStopWatchTime));

    return (
        <div className={styles.stopWatch}>

            <ClockDisplay timeInSeconds={stopWatchTime} />

            <ActionButton
                actionName='Start'
                onClick={() => clock.startClock()}
            />

            <ActionButton
                actionName='Stop'
                onClick={() => clock.stopClock()}
            />
        </div>
    );
};

export default StopWatch;