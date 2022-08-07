import { TimeInSeconds } from '../../types/timeTypes';

import styles from './TimerBar.module.scss';

interface Props {
    isActive: boolean;
    timeInSeconds: TimeInSeconds;
}

const TimerBar = ({ isActive, timeInSeconds }: Props) => {



    const isVisible = isActive ? '' : styles.timerBarInvisible;
    return (
        <div
            role='progressbar'
            className={`${styles.timerBar} ${isVisible}`}
        />
    );
};

export default TimerBar;