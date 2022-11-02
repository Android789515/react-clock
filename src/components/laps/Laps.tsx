import type { FormattedTime } from '../../types/timeTypes';

import styles from './Laps.module.scss';

interface Props {
    laps: FormattedTime[]
}

const Laps = ({ laps }: Props) => {
    return (
        <ul className={styles.laps}>

        </ul>
    );
};

export default Laps;