import type { TimeInMilliseconds } from '../../types/timeTypes';

import Lap from './lap/Lap';

import styles from './Laps.module.scss';

interface Props {
    laps: TimeInMilliseconds[];
    currentLapTime: TimeInMilliseconds;
}

const Laps = ({ laps, currentLapTime }: Props) => {
    return (
        <ul className={styles.laps}>
            {laps.map((lap, index) => (
                <Lap key={index} lap={lap} />
            ))}

            <Lap lap={currentLapTime} />
        </ul>
    );
};

export default Laps;