import type { StringifiedTime } from '../../../types/timeTypes';

import styles from './Alarm.module.scss';

interface Props {
    alarm: StringifiedTime;
}

const Alarm = ({ alarm }: Props) => {
    return (
        <li className={styles.alarm}>
            {alarm}
        </li>
    );
};

export default Alarm;