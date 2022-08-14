import styles from './Timer.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
import TimerBar from './timer-bar/TimerBar';
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
                <TimerBar
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