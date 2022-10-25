import { useEffect, useState } from 'react';

import type { TimeInSeconds } from '../../types/timeTypes';
import { toMilliseconds } from '../../utils/timeConversionUtils';
import useClock from '../../hooks/clock/useClock';

import styles from './Timer.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
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
    const setCounterTime = () => updateCounterTime(timeToCountFrom);
    // Sets the counter time if the time to count
    // from is updated by the user.
    useEffect(setCounterTime, [timeToCountFrom]);

    const { startClock, stopClock, isClockStarted } = useClock(decrementCounterTime);

    const resetTimer = () => {
        stopClock();
        setCounterTime();
    };

    const timeNotReset = counterTime !== timeToCountFrom;
    const canCountDown = timeToCountFrom !== 0;
    const isTimerActive = () => ( isClockStarted() && canCountDown ) || timeNotReset;

    return (
        <div
            className={`
                ${styles.timer}
                ${isTimerActive() ? styles.timerActive : styles.timerInactive}
            `}
        >
            <ClockDisplay
                disabled={isClockStarted()}
                timeInMilliseconds={toMilliseconds(counterTime)}
                updateTimeInSeconds={updateTimeToCountFrom}
            />

            <TimerProgressBar
                isActive={isTimerActive()}
                currentTimeInSeconds={counterTime}
                totalTimeInSeconds={timeToCountFrom}
            />

            {/* Re-usable component wrapped in div, so that it
                can be styled for this component.
             */}
            <div
                className={`
                    ${styles.timerButtons}
                `}
            >
                <ClockActionButtons
                    startCounting={() => {
                        // Prevents starting the clock when
                        // it's set to 0
                        if (canCountDown) startClock();
                    }}
                    stopCounting={stopClock}
                    resetTime={resetTimer}
                />
            </div>
        </div>
    );
};

export default Timer;