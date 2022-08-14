import styles from './Timer.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
import TimerBar from './timer-bar/TimerBar';
import ClockActionButtons from '../clock-action-buttons/ClockActionButtons';

const Timer = () => {

    return (
        <div
            className={styles.timer}
        >
            <ClockDisplay
                timeInMilliseconds={0}
            />

            <TimerBar
                isActive={false}
                currentTimeInSeconds={0}
                totalTimeInSeconds={1000}
            />

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