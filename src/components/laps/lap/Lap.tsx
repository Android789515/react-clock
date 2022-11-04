import styles from './Lap.module.scss';

import type { TimeInMilliseconds } from '../../../types/timeTypes';
import { formatTime } from '../../../utils/timeConversionUtils';

interface Props {
    lap: TimeInMilliseconds;
    isBestLap?: boolean
    isWorstLap?: boolean
}

const Lap = ({ lap, isBestLap, isWorstLap }: Props) => {
    const { hours, minutes, seconds, milliseconds } = formatTime(lap);

    return (
        <li
            className={`
                ${styles.lap}
                ${isBestLap ? styles.bestLap : ''}
                ${isWorstLap ? styles.worstLap : ''}
            `}
        >
            {hours}:{minutes}:{seconds}.{milliseconds}
        </li>
    );
};

export default Lap;