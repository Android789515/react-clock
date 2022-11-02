import type { TimeInMilliseconds } from '../../types/timeTypes';

import Lap from './lap/Lap';

import styles from './Laps.module.scss';

interface Props {
    laps: TimeInMilliseconds[]
}

const Laps = ({ laps }: Props) => {
    return (
        <ul className={styles.laps}>
            {laps.map((lap, index) => (
                <Lap key={index} lap={lap} />
            ))}
        </ul>
    );
};

export default Laps;