import { AriaRoles } from '../../types/ariaTypes';
import type { TimeInMilliseconds } from '../../types/timeTypes';

import styles from './ClockDisplay.module.scss';

const makeDoubleDigit = (number: number | string): string => {
    const measurableDigits = String(number);

    const isSingleDigit = measurableDigits.length < 2;
    return isSingleDigit ? '0' + number : String(number);
};

const removeSeconds = (milliseconds: TimeInMilliseconds) => {
    const secondsAndMilliseconds = (milliseconds / 100).toFixed(2);
    const millisecondsOnly = secondsAndMilliseconds.slice(-2);

    return makeDoubleDigit(millisecondsOnly);
}

interface Props {
    timeInMilliseconds: TimeInMilliseconds;
    showMilliseconds?: boolean;
}

const ClockDisplay = ({ timeInMilliseconds, showMilliseconds }: Props) => {

    const formattedMilliseconds = '.' + removeSeconds(timeInMilliseconds);

    const timeInSeconds = Math.floor(timeInMilliseconds / 100) % 1000;
    const formattedSeconds = makeDoubleDigit(timeInSeconds % 60);

    const totalMinutes = (timeInSeconds / 60) % 60;
    const formattedMinutes = makeDoubleDigit(Math.floor(totalMinutes));

    const totalHours = (timeInSeconds / 3600) % 120;
    const formattedHours = makeDoubleDigit(Math.floor(totalHours));

    return (
        <h1
            role={AriaRoles.timer}
            id={clockDisplayID}
            className={styles.clockDisplay}
        >
            {formattedHours}:
            {formattedMinutes}:
            {formattedSeconds}
            {showMilliseconds && formattedMilliseconds}
        </h1>
    );
};

// For aria-controls
export const clockDisplayID = 'clock-display';
export default ClockDisplay;