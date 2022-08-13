import styles from './Timer.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
import TimerBar from './timer-bar/TimerBar';
import TimerButtons from './timer-buttons/TimerButtons';

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

            <TimerButtons
                startTimer={() => {}}
                stopTimer={() => {}}
                resetTimer={() => {}}
            />
        </div>
    );
};

//

export default Timer;