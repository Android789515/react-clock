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

    const decrementCounterTime = () => updateCounterTime(prevTime => {
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

    const { startClock, stopClock, isClockStarted } = useClock(incrementCounterTime);

    const resetTimer = () => {
        stopClock();
        resetCounterTime();
    };

    const preventNegativeTime = () => {
        if (isClockStarted() && counterTime === 0) {
            updateCounterTime(0);
            stopClock();
        }
    };
    useEffect(preventNegativeTime, [isClockStarted]);

    const timeNotReset = counterTime !== timeToCountFrom;
    const canCountFromTime = timeToCountFrom !== 0;
    const isProgressBarActive = () => ( isClockStarted() && canCountFromTime ) || timeNotReset;

    return (
        <div
            className={styles.timer}
        >
            <EditableClockDisplayOverlay
                disabled={isClockStarted()}
                timeInSeconds={counterTime}
                updateTimeInSeconds={updateTimeToCountFrom}
            />

            <TimerProgressBar
                isActive={isProgressBarActive()}
                currentTimeInSeconds={counterTime}
                totalTimeInSeconds={timeToCountFrom}
            />

            {/* Re-usable component wrapped in div, so that it
                can be styled for this component.
             */}
            <div
                className={`
                    ${styles.timerButtons}
                    ${isProgressBarActive() ? styles.timerButtonsActive : styles.timerButtonsInactive}
                `}
            >
                <ClockActionButtons
                    startCounting={startClock}
                    stopCounting={stopClock}
                    resetTime={resetTimer}
                />
            </div>
        </div>
    );
};

export default Timer;