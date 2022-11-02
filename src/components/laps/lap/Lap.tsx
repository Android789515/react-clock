import styles from './Lap.module.scss';

import type { FormattedTime } from '../../../types/timeTypes';

interface Props {
    lap: FormattedTime
}

const Lap = ({ lap }: Props) => {
    return (
        <li className={styles.lap}>

        </li>
    );
};

export default Lap;