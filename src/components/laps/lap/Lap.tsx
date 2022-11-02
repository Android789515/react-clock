import styles from './Lap.module.scss';

import type { FormattedTime } from '../../../types/timeTypes';

interface Props {
    lap: FormattedTime
}

const Lap = ({ lap: { hours, minutes, seconds, milliseconds } }: Props) => {
    return (
        <li className={styles.lap}>
            {hours}:{minutes}:{seconds}.{milliseconds}
        </li>
    );
};

export default Lap;