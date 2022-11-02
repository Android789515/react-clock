import styles from './Lap.module.scss';

import type { TimeInMilliseconds } from '../../../types/timeTypes';
import { formatTime } from '../../../utils/timeConversionUtils';

interface Props {
    lap: TimeInMilliseconds;
}

const Lap = ({ lap }: Props) => {
    const { hours, minutes, seconds, milliseconds } = formatTime(lap);

    return (
        <li className={styles.lap}>
            {hours}:{minutes}:{seconds}.{milliseconds}
        </li>
    );
};

export default Lap;