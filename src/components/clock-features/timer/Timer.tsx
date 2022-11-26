import { useState } from 'react';

import type { TimeInSeconds } from '../../../types/timeTypes';
import { AriaRoles } from '../../../types/ariaTypes';
import { toMilliseconds } from '../../../utils/timeConversionUtils';
import useClock from '../../../independent-hooks/clock/useClock';

import styles from './Timer.module.scss';

import Alarm from '../../alarm/Alarm';
import ClockDisplay from '../../clock-display/ClockDisplay';
import TimerProgressBar from './timer-progress-bar/TimerProgressBar';
import ClockActionButtons from '../../clock-action-buttons/ClockActionButtons';

interface CounterTimeState {
    totalTime: TimeInSeconds
    currentTime: TimeInSeconds
}

const Timer = () => {
    // Less confusing to call it counterTime than timerTime.
    const [ counterTime, updateCounterTime ] = useState<CounterTimeState>({
        totalTime: 0,
        currentTime: 0
    });

    const setTimeToCountFrom = (timeInSeconds: TimeInSeconds) => updateCounterTime(() => {
        return { totalTime: timeInSeconds, currentTime: timeInSeconds };
    });

    const resetCounterTime = () => updateCounterTime(prevState => {
        return { ...prevState, currentTime: prevState.totalTime };
    });

    const decrementCounterTime = () => updateCounterTime(prevState => {
        const { currentTime } = prevState;

        if (currentTime > 0) {
            return { ...prevState, currentTime: currentTime - 1 };
        } else {
            return prevState;
        }
    });

    const { startClock, stopClock, isClockStarted } = useClock(decrementCounterTime);

    const canCountDown = counterTime.totalTime > 0 && counterTime.currentTime > 0;
    const startTimer = () => {
        // Prevents starting the clock when
        // it's set to 0.
        if (canCountDown) startClock();
    };

    const stopTimer = () => stopClock();

    const resetTimer = () => {
        stopClock();
        resetCounterTime();
    };

    // Timer can still be active while clock is stopped.
    const isTimerActive = isClockStarted() || counterTime.currentTime < counterTime.totalTime;

    return (
        <main
            role={AriaRoles.main}
            className={`
                ${styles.timer}
                ${isTimerActive ? styles.timerActive : styles.timerInactive}
            `}
        >
            <Alarm
                shouldRingAlarm={isClockStarted() && counterTime.currentTime === 0}
            />
            <ClockDisplay
                disabled={isClockStarted()}
                timeInMilliseconds={toMilliseconds(counterTime.currentTime)}
                setTime={setTimeToCountFrom}
            />

            <TimerProgressBar
                isActive={isTimerActive}
                currentTimeInSeconds={counterTime.currentTime}
                totalTimeInSeconds={counterTime.totalTime}
            />

            {/* Re-usable component wrapped in div, so that it
                can be styled for this component.
             */}
            <div className={`${styles.timerButtons}`}>
                <ClockActionButtons
                    actions={[
                        { name: 'Start', action: startTimer},
                        { name: 'Stop', action: stopTimer },
                        { name: 'Reset', action: resetTimer }
                    ]}
                />
            </div>
        </main>
    );
};

export default Timer;