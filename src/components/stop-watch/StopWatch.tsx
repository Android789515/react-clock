import styles from './StopWatch.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
import StartButton from '../start-button/StartButton';
import StopButton from '../stop-button/StopButton';
import ResetButton from '../reset-button/ResetButton';

const StopWatch = () => {
    return (
        <div className={styles.stopWatch}>
            <ClockDisplay/>

            <StartButton />
            <StopButton />
            <ResetButton />
        </div>
    );
};

export default StopWatch;