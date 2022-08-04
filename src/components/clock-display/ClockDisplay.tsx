import { AriaRoles } from '../../types/AriaRoles';
import type { TimeInSeconds } from '../../types/timeTypes';

import styles from './ClockDisplay.module.scss'

const makeDoubleDigit = (number: number): string => {
    const measurableDigits = String(number);

    const isSingleDigit = measurableDigits.length < 2;
    return isSingleDigit ? '0' + number : String(number);
}

interface Props {
    timeInSeconds: TimeInSeconds;
}

const ClockDisplay = ({ timeInSeconds }: Props) => {

    const formattedSeconds = makeDoubleDigit(timeInSeconds % 60);

    const totalMinutes = (timeInSeconds / 60) % 60
    const formattedMinutes = makeDoubleDigit(Math.floor(totalMinutes));

    const totalHours = (timeInSeconds / 3600) % 120
    const formattedHours = makeDoubleDigit(Math.floor(totalHours));

    return (
        <h1
            role={AriaRoles.timer}
            className={styles.clockDisplay}
        >
            {formattedHours}:{formattedMinutes}:{formattedSeconds}
        </h1>
    );
};

export default ClockDisplay;