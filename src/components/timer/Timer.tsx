import { useEffect, useState } from 'react';

import type { TimeInSeconds } from '../../types/timeTypes';
import useClock from '../../hooks/clock/useClock';

import styles from './Timer.module.scss';

import EditableClockDisplayOverlay from './editable-clock-display-overlay/EditableClockDisplayOverlay';
import TimerProgressBar from './timer-progress-bar/TimerProgressBar';
import ClockActionButtons from '../clock-action-buttons/ClockActionButtons';

const Timer = () => {
    // What the user can set.
    const [ timeToCountFrom, updateTimeToCountFrom ] = useState<TimeInSeconds>(0);

    // What the clock uses.
    // Less confusing to call it counterTime than timerTime.
    const [ counterTime, updateCounterTime ] = useState<TimeInSeconds>(timeToCountFrom)

    const incrementCounterTime = () => updateCounterTime(prevTime => {
        if (prevTime) {
            return prevTime - 1;
        } else {
            return prevTime;
        }
    });
    const resetCounterTime = () => updateCounterTime(timeToCountFrom);
    // Sets the counter time if the time to count
    // from is updated by the user.
    useEffect(resetCounterTime, [timeToCountFrom]);

    const [ isClockStarted, setIsClockStarted ] = useState(false);
    const { startClock, stopClock } = useClock(incrementCounterTime);

    const startTimer = () => {
        startClock();
        setIsClockStarted(true);
    };

    const stopTimer = () => {
        stopClock();
        setIsClockStarted(false);
    };

    const resetTimer = () => {
        stopTimer();
        resetCounterTime();
    };

    const preventNegativeTime = () => {
        if (isClockStarted && counterTime === 0) {
            updateCounterTime(0);
            stopTimer();
        }
    };
    useEffect(preventNegativeTime, [isClockStarted]);

    return (
        <div
            className={styles.timer}
        >
            <EditableClockDisplayOverlay
                disabled={isClockStarted}
                timeInSeconds={counterTime}
                updateTimeInSeconds={updateTimeToCountFrom}
            />

            <TimerProgressBar
                isActive={true}
                currentTimeInSeconds={counterTime}
                totalTimeInSeconds={timeToCountFrom}
            />

            <div
                className={styles.timerButtons}
            >
                <ClockActionButtons
                    startCounting={startTimer}
                    stopCounting={stopTimer}
                    resetTime={resetTimer}
                />
            </div>
        </div>
    );
};

export default Timer;