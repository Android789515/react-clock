import { useState } from 'react';

import type { TimeInMilliseconds } from '../../types/timeTypes';
import useClock from '../../independent-hooks/clock/useClock';

import styles from './StopWatch.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
import ClockActionButtons from '../clock-action-buttons/ClockActionButtons';

const StopWatch = () => {
    const [ stopWatchTime, setStopWatchTime ] = useState<TimeInMilliseconds>(0);

    const incrementStopWatchTime = () => setStopWatchTime(currentTime => {
        // Increment by 10ms as the startClock function
        // is only precise to that amount
        const tenMilliseconds = 10;
        return currentTime + tenMilliseconds;
    });

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
                disabled={true}
                showMilliseconds={afterClockStarts}
                timeInMilliseconds={stopWatchTime}
            />

            <ClockActionButtons
                actions={[
                    isStopWatchStarted
                    ? { name: 'Lap', action: () => {} }
                    : { name: 'Start', action: startStopWatch },
                    { name: 'Stop', action: suspendStopWatch },
                    { name: 'Reset', action: resetStopWatchTime }
                ]}
            />
        </div>
    );
};

export default StopWatch;