import styles from './StopWatch.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
import StartButton from '../start-button/StartButton';

const StopWatch = () => {
    return (
        <div className={styles.stopWatch}>
            <ClockDisplay/>

            <StartButton />
        </div>
    );
};

export default StopWatch;