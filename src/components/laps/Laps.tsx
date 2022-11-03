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
            {laps.map((lap, index) => {
                const isBestLap = lap === Math.min(...laps);
                const isWorstLap = lap === Math.max(...laps);

                const isFirstLap = laps.length === 1;

                return (
                    <Lap
                        key={index}
                        lap={lap}
                        isBestLap={isBestLap && !isFirstLap}
                        isWorstLap={isWorstLap && !isFirstLap}
                    />
                );
            })}

            <Lap lap={currentLapTime} />
        </ul>
    );
};

export default Laps;