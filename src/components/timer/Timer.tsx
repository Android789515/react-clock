import styles from './Timer.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
import TimerProgressBar from './timer-progress-bar/TimerProgressBar';
import ClockActionButtons from '../clock-action-buttons/ClockActionButtons';

const Timer = () => {

    return (
        <div
            className={styles.timer}
        >
            <div
                className={styles.timerDisplay}
            >
                <ClockDisplay
                    timeInMilliseconds={0}
                />
            </div>

            <div
                className={styles.timerBar}
            >
                <TimerProgressBar
                    isActive={true}
                    currentTimeInSeconds={0}
                />
            </div>

            <div
                className={styles.timerButtons}
            >
                <ClockActionButtons
                    startCounting={() => {}}
                    stopCounting={() => {}}
                    resetTime={() => {}}
                />
            </div>
        </div>
    );
};

export default Timer;