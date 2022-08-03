import styles from './StopWatch.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';
import StartButton from '../start-button/StartButton';
import StopButton from '../stop-button/StopButton';
import ResetButton from '../reset-button/ResetButton';

const StopWatch = () => {
    const temporaryTimeToDisplay = 0;

    return (
        <div className={styles.stopWatch}>

            <ClockDisplay timeInSeconds={temporaryTimeToDisplay} />

            <StartButton />
            <StopButton />
            <ResetButton />
        </div>
    );
};

export default StopWatch;